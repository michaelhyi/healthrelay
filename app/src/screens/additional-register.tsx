import { useContext, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Layout from "../components/Layout";
// import { useLoginMutation } from "../generated/graphql";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { context } from "../utils/context";
import { AntDesign, Octicons, Ionicons } from "@expo/vector-icons";
import React from "react";
import BackButton from "../components/BackButton";
// import { Navigation } from "../utils/types";

interface Props {
  navigation: {
    navigate: (route: string) => void;
    goBack: () => void;
  };
}

const AdditionalRegister: React.FC<Props> = ({ navigation }) => {
  //   const { setUser } = useContext(context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organization, setOrganization] = useState("");
  const [phone, setPhone] = useState("");
  //   const [, login] = useLoginMutation();

  return (
    <Layout>
      <BackButton navigation={navigation} />

      <View style={styles.container}>
        <View style={styles.icon} />
        <Text style={styles.logoText}>HealthRelay</Text>
        <View style={styles.textInput}>
          <Ionicons name="person" size={25} color="#999999" />
          <TextInput
            style={{
              flex: 1,
              color: "#999999",
              fontSize: 16,
              marginLeft: 15,
              fontFamily: "Poppins-Regular",
            }}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            placeholderTextColor="#999999"
          />
        </View>
        <View style={styles.textInput}>
          <Ionicons name="person" size={25} color="#999999" />
          <TextInput
            style={{
              flex: 1,
              color: "#999999",
              fontSize: 16,
              marginLeft: 15,
              fontFamily: "Poppins-Regular",
            }}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            placeholderTextColor="#999999"
          />
        </View>
        <View style={styles.textInput}>
          <Octicons name="organization" size={25} color="#999999" />
          <TextInput
            style={{
              flex: 1,
              color: "#999999",
              fontSize: 16,
              marginLeft: 15,
              fontFamily: "Poppins-Regular",
            }}
            placeholder="Organization"
            value={organization}
            onChangeText={setOrganization}
            placeholderTextColor="#999999"
          />
        </View>
        <View style={styles.textInput}>
          <AntDesign name="phone" size={25} color="#999999" />
          <TextInput
            style={{
              flex: 1,
              color: "#999999",
              fontSize: 16,
              marginLeft: 15,
              fontFamily: "Poppins-Regular",
            }}
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
            placeholderTextColor="#999999"
          />
        </View>
        <TouchableOpacity
          //   onPress={async () => {
          //     const response = await login({ email, password });
          //     if (!response.data?.login.error) {
          //       await AsyncStorage.setItem(
          //         "user",
          //         JSON.stringify(response.data!.login.user!.id)
          //       );
          //       setUser(response.data!.login.user!.id);
          //     }
          //   }}
          // onPress={() => navigation.navigate("Register")}
          style={styles.button}
        >
          <Text style={{ fontFamily: "Poppins-Medium", fontSize: 18 }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    width: 75,
    height: 75,
    backgroundColor: "#DDDDDD",
    borderRadius: 12,
    marginBottom: 16,
  },

  logoText: {
    fontFamily: "Poppins-Bold",
    color: "#386FA4",
    fontSize: 36,
    marginBottom: 24,
  },

  textInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
    padding: 24,
    borderRadius: 12,
    width: (Dimensions.get("window").width * 13) / 15,
    marginTop: 16,
  },

  button: {
    marginTop: 24,
    backgroundColor: "#B6DCFE",
    padding: 25,
    borderRadius: 36,
    width: (Dimensions.get("window").width * 13) / 15,
    alignItems: "center",
  },

  text: {
    fontFamily: "Poppins-SemiBold",
    color: "#87BEFF",
  },
});

export default AdditionalRegister;
