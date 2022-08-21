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
import { AntDesign } from "@expo/vector-icons";
import React from "react";
// import { Navigation } from "../utils/types";

interface Props {
    navigation: {
      navigate: (route: string) => void;
      goBack: () => void;
    };
  }

const Login: React.FC<Props> = ({ navigation }) => {
//   const { setUser } = useContext(context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [, login] = useLoginMutation();

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.icon} />
        <Text style={styles.logoText}>Health Relay</Text>
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
          style={{ marginTop: 12 }}
        //   onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.text}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 4 }}>
          <Text style={styles.text}>Forgot Password? </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 4 }}
        //   onPress={() => navigation.navigate("View Patient File")}
        >
          <Text style={styles.text}>
            Not a radiologist? View Your Patient File
          </Text>
        </TouchableOpacity>
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
          onPress={() => navigation.navigate("Register")}
          style={styles.button}
        >
          <Text style={{ fontFamily: "Poppins-Medium", fontSize: 18 }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default Login;