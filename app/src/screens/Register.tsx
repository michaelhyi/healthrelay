import { AntDesign, Ionicons } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// import BackButton from "../components/BackButton";
import Layout from "../components/Layout";
// import { useRegisterMutation } from "../generated/graphql";
// import { context } from "../utils/context";
// import { Navigation } from "../utils/types";

interface Props {
  navigation: {
    navigate: (route: string) => void;
    goBack: () => void;
  };
}
const Register: React.FC<Props> = ({ navigation}) => {
  // const { setUser } = useContext(context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [, register] = useRegisterMutation();

  return (
    <Layout>
      <TouchableOpacity>
        {/* <BackButton navigation={navigation} /> */}
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.icon} />
        <Text style={styles.logoText}>Health Relay</Text>
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
          <AntDesign name="mail" size={25} color="#999999" />
          <TextInput
            style={{
              flex: 1,
              color: "#999999",
              fontSize: 16,
              marginLeft: 15,
              fontFamily: "Poppins-Regular",
            }}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#999999"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.textInput}>
          <AntDesign name="key" size={25} color="#999999" />
          <TextInput
            style={{
              flex: 1,
              color: "#999999",
              fontSize: 16,
              marginLeft: 15,
              fontFamily: "Poppins-Regular",
            }}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#999999"
            autoCapitalize="none"
            secureTextEntry
          />
        </View>

        <TouchableOpacity
        //   onPress={async () => {
        //     const response = await register({
        //       email,
        //       password,
        //       firstName,
        //       lastName,
        //     });
        //     if (!response.data?.register.error) {
        //       await AsyncStorage.setItem(
        //         "user",
        //         JSON.stringify(response.data!.register.user!.id)
        //       );
        //       setUser(response.data!.register.user!.id);
        //     }
        //   }}
          onPress={() => navigation.navigate("Login")}
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
    backgroundColor: "white",
    padding: 35,
    borderRadius: 12,
    marginBottom: 16,
  },

  logoText: {
    fontFamily: "Poppins-SemiBold",
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
    marginTop: 48,
    backgroundColor: "#B6DCFE",
    padding: 25,
    borderRadius: 36,
    width: (Dimensions.get("window").width * 13) / 15,
    alignItems: "center",
  },
});

export default Register;