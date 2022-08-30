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
import {
  useCreateOrderMutation,
  useCreateRecentContactMutation,
} from "../generated/graphql";
import Context from "../utils/context";
import { colors } from "../utils/styles";
import Loading from "./loading";

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
        contact?: boolean;
        id?: number;
      }
    ) => void;
  };
}

const CreateOrder: React.FC<Props> = ({ route, navigation }) => {
  const { user, contact, setContact } = useContext(Context);
  const [loading, setLoading] = useState(true);

  const [mrn, setMrn] = useState("");
  const [mrnError, setMrnError] = useState<null | string>(null);

  const [priority, setPriority] = useState("");
  const [priorityError, setPriorityError] = useState<null | string>(null);

  const [contactError, setContactError] = useState<null | string>(null);

  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState<null | string>(null);

  const [, createOrder] = useCreateOrderMutation();
  const [, createRecentContact] = useCreateRecentContactMutation();

  useEffect(() => {
    setContact(null);
    setLoading(false);
  }, []);

  if (loading) return <Loading />;

  return (
    <Layout>
      <View
        style={{
          alignItems: "center",
          marginTop: (Dimensions.get("window").width * 15) / 428,
        }}
      >
        <Text style={styles.title}>Create Order</Text>
      </View>
      <View style={{ marginTop: (Dimensions.get("window").width * 30) / 428 }}>
        <Text style={styles.header}>MRN</Text>
        <TextInput value={mrn} onChangeText={setMrn} style={styles.input} />
      </View>
      {mrnError && <Text style={styles.error}>{mrnError}</Text>}
      <View style={{ marginTop: (Dimensions.get("window").width * 15) / 428 }}>
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
      {priorityError && <Text style={styles.error}>{priorityError}</Text>}
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
      {contactError && <Text style={styles.error}>{contactError}</Text>}
      <View style={{ marginTop: (Dimensions.get("window").width * 24) / 428 }}>
        <Text style={styles.header}>Message</Text>
        <TextInput
          value={message}
          onChangeText={setMessage}
          multiline
          style={styles.message}
        />
      </View>
      {messageError && <Text style={styles.error}>{messageError}</Text>}
      <TouchableOpacity
        onPress={async () => {
          if (mrn.length === 0) {
            setMrnError("You must enter a MRN.");
            setPriorityError(null);
            setContactError(null);
            setMessageError(null);
          } else if (priority.length === 0) {
            setMrnError(null);
            setPriorityError("You must select a priority.");
            setContactError(null);
            setMessageError(null);
          } else if (!contact) {
            setMrnError(null);
            setPriorityError(null);
            setContactError("You must select a contact.");
            setMessageError(null);
          } else if (message.length === 0) {
            setMrnError(null);
            setPriorityError(null);
            setContactError(null);
            setMessageError("You must write a message.");
          } else {
            const response = await createOrder({
              mrn,
              priority,
              message,
              radiologistId: user.id,
              orderingPhysicianId: contact.id,
            });

            await createRecentContact({
              radiologistId: user.id,
              orderingPhysicianId: contact.id,
            });

            navigation.navigate("Order", { id: response.data?.createOrder.id });
          }
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
          Create Order
        </Text>
      </TouchableOpacity>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: (Dimensions.get("window").width * 24) / 428,
    fontFamily: "Poppins-SemiBold",
    color: "black",
  },
  header: {
    fontSize: (Dimensions.get("window").width * 14) / 428,
    fontFamily: "Poppins-SemiBold",
    color: "#999999",
  },
  bluetext: {
    fontSize: (Dimensions.get("window").width * 12) / 428,
    fontFamily: "Poppins-SemiBold",
    color: "#59A5D8",
  },
  input: {
    marginTop: (Dimensions.get("window").width * 15) / 428,
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: (Dimensions.get("window").width * 1) / 428,
    fontSize: (Dimensions.get("window").width * 14) / 428,
    fontFamily: "Poppins-SemiBold",
    color: "black",
  },
  message: {
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: (Dimensions.get("window").width * 1) / 428,
    fontSize: (Dimensions.get("window").width * 14) / 428,
    fontFamily: "Poppins-SemiBold",
    color: "black",
    height: (Dimensions.get("window").width * 150) / 428,
  },
  error: {
    fontFamily: "Poppins-SemiBold",
    color: "#CC3333",
    marginTop: (Dimensions.get("window").width * 14) / 428,
  },
});

export default CreateOrder;
