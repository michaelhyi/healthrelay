import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Layout from "../components/Layout";
import { useReadUserQuery } from "../generated/graphql";
import Context from "../utils/context";
import Loading from "./loading";

interface Props {
  navigation: {
    navigate: (
      route: string,
      params: {
        uuid: string;
      }
    ) => void;
  };
}

const CreateOrder: React.FC<Props> = ({ navigation }) => {
  const { user } = useContext(Context);
  const [{ data, fetching }] = useReadUserQuery({ variables: { id: user } });

  if (fetching) return <Loading />;

  return (
    <Layout>
      <View style={{ alignItems: "center", marginTop: 15 }}>
        <Text style={styles.title}>Create Order</Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.header}>MRN</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={styles.header}>Priority</Text>
        <TextInput style={styles.input} />
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
            navigation.navigate("Contacts", { uuid: data?.readUser.user.uuid! })
          }
        >
          <Text style={styles.bluetext}>Select Contact</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.header}>Message</Text>
        <TextInput multiline style={styles.message} />
      </View>
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
