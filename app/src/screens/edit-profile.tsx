import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../components/BackButton";
import Layout from "../components/Layout";
import { useReadUserQuery, useUpdateUserMutation } from "../generated/graphql";
import Context from "../utils/context";
import { colors } from "../utils/styles";
import Loading from "./loading";

interface Props {
  navigation: {
    goBack: () => void;
  };
}

const EditProfile: React.FC<Props> = ({ navigation }) => {
  const { user, setUser } = useContext(Context);
  const [{ data, fetching }] = useReadUserQuery({ variables: { id: user.id } });
  const [, updateUser] = useUpdateUserMutation();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setFirstName(data?.readUser.firstName!);
    setLastName(data?.readUser.lastName!);
    setOrganization(data?.readUser.organization!);
    setEmail(data?.readUser.email!);
    setPhone(data?.readUser.phone!);
  }, [data, fetching]);

  if (fetching) return <Loading />;

  return (
    <Layout>
      <BackButton navigation={navigation} />
      <View
        style={{
          marginTop: 40,
          flexDirection: "row",
        }}
      >
        <View style={{ width: "40%" }}>
          <Text style={styles.header}>First Name</Text>
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        <View style={{ width: "40%", marginLeft: 48 }}>
          <Text style={styles.header}>Last Name</Text>
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.header}>Organization</Text>
        <TextInput
          style={styles.input}
          value={organization}
          onChangeText={setOrganization}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.header}>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.header}>Phone</Text>
        <TextInput style={styles.input} value={phone} onChangeText={setPhone} />
      </View>
      <TouchableOpacity
        onPress={async () => {
          await updateUser({
            id: user.id,
            firstName,
            lastName,
            organization,
            email,
            phone,
          });

          await AsyncStorage.setItem(
            "user",
            JSON.stringify({
              id: user.id,
              email,
              firstName,
              lastName,
              profession: user.profession,
              organization,
              phone,
            })
          );
          setUser({
            id: user.id,
            email,
            firstName,
            lastName,
            profession: user.profession,
            organization,
            phone,
          });
          Alert.alert("Success!", "Profile has been updated.");
          navigation.goBack();
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
          Edit Profile
        </Text>
      </TouchableOpacity>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    color: "#999999",
  },
  input: {
    marginTop: 15,
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    color: "black",
  },
});

export default EditProfile;
