import { CheckIcon, Select } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../components/BackButton";
import Layout from "../components/Layout";
import User from "../components/User";
import {
  useCreateRecentContactMutation,
  useDeleteOrderMutation,
  useReadContactMutation,
  useUpdateOrderMutation,
} from "../generated/graphql";
import Context from "../utils/context";
import { colors } from "../utils/styles";
import Loading from "./loading";

interface Props {
  route: {
    params: {
      data: any;
    };
  };
  navigation: {
    navigate: (
      route: string,
      params?: {
        id?: number;
        contact?: boolean;
      }
    ) => void;
    goBack: () => void;
  };
}

const EditOrder: React.FC<Props> = ({ route, navigation }) => {
  const { user } = useContext(Context);
  const { data } = route.params;
  const [, readContact] = useReadContactMutation();
  const [, updateOrder] = useUpdateOrderMutation();
  const [, createRecentContact] = useCreateRecentContactMutation();
  const [, deleteOrder] = useDeleteOrderMutation();

  const [mrn, setMrn] = useState(data.readOrder.mrn);
  const [priority, setPriority] = useState(data.readOrder.priority);
  const [contact, setContact] = useState<null | {
    id: number;
    firstName: string;
    lastName: string;
    profession: string;
  }>(null);
  const [message, setMessage] = useState(data.readOrder.message);

  useEffect(() => {
    (async () => {
      const response = await readContact({
        id: data.readOrder.orderingPhysicianId,
      });

      setContact({
        id: response.data?.readContact.id!,
        firstName: response.data?.readContact.firstName!,
        lastName: response.data?.readContact.lastName!,
        profession: response.data?.readContact.profession!,
      });
    })();
  }, []);

  if (!contact) return <Loading />;

  return (
    <Layout>
      <BackButton navigation={navigation} />
      <View style={{ marginTop: (Dimensions.get("window").width * 20) / 428 }}>
        <Text style={styles.header}>MRN</Text>
        <TextInput style={styles.input} value={mrn} onChangeText={setMrn} />
      </View>
      <View style={{ marginTop: (Dimensions.get("window").width * 20) / 428 }}>
        <Text style={styles.header}>Priority</Text>
        <Select
          selectedValue={priority}
          accessibilityLabel="Select Priority"
          minWidth={(Dimensions.get("window").width * 13) / 15}
          placeholder="Select Priority"
          fontFamily="Poppins-Regular"
          fontSize={(Dimensions.get("window").width * 16) / 428}
          style={{
            height: (Dimensions.get("window").width * 64) / 428,
          }}
          _selectedItem={{
            bg: "#E5E5E5",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setPriority(itemValue)}
        >
          <Select.Item label="Low" value="Low" />
          <Select.Item label="Medium" value="Medium" />
          <Select.Item label="High" value="High" />
        </Select>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: (Dimensions.get("window").width * 25) / 428,
        }}
      >
        <Text style={styles.header}>Ordering Physician</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Contacts", {
              id: user.id!,
              contact: true,
            })
          }
        >
          <Text style={styles.bluetext}>Select Contact</Text>
        </TouchableOpacity>
      </View>
      {contact && (
        <>
          <View style={{ padding: Dimensions.get("window").height / 128 }} />
          <User
            onPress={() => navigation.navigate("Profile", { id: contact.id })}
            firstName={contact.firstName}
            lastName={contact.lastName}
            profession={contact.profession}
          />
        </>
      )}
      <View style={{ marginTop: (Dimensions.get("window").width * 20) / 428 }}>
        <Text style={styles.header}>Message</Text>
        <TextInput
          multiline
          style={styles.input}
          value={message}
          onChangeText={setMessage}
        />
      </View>
      <TouchableOpacity
        onPress={async () => {
          await updateOrder({
            id: data.readOrder.id,
            mrn,
            priority,
            message,
            orderingPhysicianId: contact.id,
          });

          await createRecentContact({
            radiologistId: user.id,
            orderingPhysicianId: contact.id,
          });

          Alert.alert("Success!", "Order has been updated.");
          navigation.goBack();
        }}
        style={{
          backgroundColor: colors.blue_400,
          padding: (Dimensions.get("window").width * 12) / 428,
          marginTop: (Dimensions.get("window").width * 24) / 428,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            color: "white",
            textAlign: "center",
          }}
        >
          Edit Order
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            "Delete Order",
            "Are you sure that you want to delete your order? This action CANNOT be undone.",
            [
              {
                text: "Yes",
                onPress: async () => {
                  await deleteOrder({ id: data.readOrder.id });
                  Alert.alert("Success!", "Order has been deleted.");
                  navigation.goBack();
                  navigation.goBack();
                },
              },
              {
                text: "No",
                style: "cancel",
              },
            ]
          );
        }}
        style={{
          backgroundColor: "#FF7575",
          padding: (Dimensions.get("window").width * 12) / 428,
          marginTop: (Dimensions.get("window").width * 24) / 428,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            color: "white",
            textAlign: "center",
          }}
        >
          Delete Order
        </Text>
      </TouchableOpacity>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: (Dimensions.get("window").width * 14) / 428,
    fontFamily: "Poppins-SemiBold",
    color: "#999999",
  },
  input: {
    marginTop: (Dimensions.get("window").width * 15) / 428,
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: (Dimensions.get("window").width * 1) / 428,
    fontSize: (Dimensions.get("window").width * 14) / 428,
    fontFamily: "Poppins-SemiBold",
    color: "black",
  },
  bluetext: {
    fontSize: (Dimensions.get("window").width * 12) / 428,
    fontFamily: "Poppins-SemiBold",
    color: "#59A5D8",
  },
});

export default EditOrder;
