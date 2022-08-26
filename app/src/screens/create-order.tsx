import { CheckIcon, Select } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Layout from "../components/Layout";
import User from "../components/User";
import { useCreateOrderMutation } from "../generated/graphql";
import Context from "../utils/context";
import { colors } from "../utils/styles";

interface Props {
  route: {
    params: {
      contact?: string;
    };
  };
  navigation: {
    navigate: (
      route: string,
      params: {
        uuid?: string;
        contact?: boolean;
        id?: number;
      }
    ) => void;
  };
}

const CreateOrder: React.FC<Props> = ({ route, navigation }) => {
  const { user, contact, setContact } = useContext(Context);

  const [mrn, setMrn] = useState("");
  const [priority, setPriority] = useState("");
  const [message, setMessage] = useState("");

  const [, createOrder] = useCreateOrderMutation();

  useEffect(() => {
    setContact(null);
  }, []);

  return (
    <Layout>
      <View style={{ alignItems: "center", marginTop: 15 }}>
        <Text style={styles.title}>Create Order</Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.header}>MRN</Text>
        <TextInput value={mrn} onChangeText={setMrn} style={styles.input} />
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={styles.header}>Priority</Text>
        <Select
          selectedValue={priority}
          accessibilityLabel="Select Priority"
          minWidth={(Dimensions.get("window").width * 13) / 15}
          placeholder="Select Priority"
          fontFamily="Poppins-Regular"
          fontSize={16}
          style={{
            height: 64,
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
          marginTop: 25,
        }}
      >
        <Text style={styles.header}>Ordering Physician</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Contacts", {
              uuid: user.uuid!,
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
            onPress={() =>
              navigation.navigate("Profile", { uuid: contact.uuid })
            }
            firstName={contact.firstName}
            lastName={contact.lastName}
            profession={contact.profession}
          />
        </>
      )}
      <View style={{ marginTop: 24 }}>
        <Text style={styles.header}>Message</Text>
        <TextInput
          value={message}
          onChangeText={setMessage}
          multiline
          style={styles.message}
        />
      </View>
      <TouchableOpacity
        onPress={async () => {
          const response = await createOrder({
            mrn,
            priority,
            message,
            radiologistUuid: user,
            orderingPhysicianUuid: contact.uuid,
          });

          navigation.navigate("Order", { id: response.data?.createOrder.id });
        }}
        style={{
          backgroundColor: colors.blue_400,
          padding: 12,
          marginTop: 24,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            color: "white",
            textAlign: "center",
          }}
        >
          Create Order
        </Text>
      </TouchableOpacity>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
    color: "black",
  },
  header: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    color: "#999999",
  },
  bluetext: {
    fontSize: 12,
    fontFamily: "Poppins-SemiBold",
    color: "#59A5D8",
  },
  input: {
    marginTop: 15,
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    color: "black",
  },
  message: {
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    color: "black",
    height: 150,
  },
});

export default CreateOrder;
