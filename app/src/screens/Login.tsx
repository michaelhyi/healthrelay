import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Layout from "../components/Layout";
import { useLoginMutation } from "../generated/graphql";
import Context from "../utils/context";

interface Props {
  navigation: {
    navigate: (route: string) => void;
    goBack: () => void;
  };
}

const Login: React.FC<Props> = ({ navigation }) => {
  const { setUser } = useContext(Context);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<null | string>(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState<null | string>(null);
  const [, login] = useLoginMutation();

  return (
    <Layout>
      <View style={styles.container}>
        <Image
          source={require("../assets/Main_Logo_Transparent.png")}
          style={{
            height: Dimensions.get("window").height * (200 / 926),
            width: Dimensions.get("window").width * (300 / 428),
          }}
        />
        {/* <View style={styles.icon} />
        <Text style={styles.logoText}>HealthRelay</Text> */}
        <View style={styles.textInput}>
          <AntDesign
            name="mail"
            size={(Dimensions.get("window").width * 25) / 428}
            color="#999999"
          />
          <TextInput
            style={{
              flex: 1,
              color: "#999999",
              fontSize: (Dimensions.get("window").width * 16) / 428,
              marginLeft: (Dimensions.get("window").width * 15) / 428,
              fontFamily: "Poppins-Regular",
            }}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#999999"
            autoCapitalize="none"
          />
        </View>
        {emailError && <Text style={styles.error}>{emailError}</Text>}
        <View style={styles.textInput}>
          <AntDesign
            name="key"
            size={(Dimensions.get("window").width * 25) / 428}
            color="#999999"
          />
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
        {passwordError && <Text style={styles.error}>{passwordError}</Text>}
        <TouchableOpacity
          style={{ marginTop: (Dimensions.get("window").width * 12) / 428 }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.text}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: (Dimensions.get("window").width * 4) / 428 }}
        >
          <Text style={styles.text}>Forgot Password? </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            const response = await login({ email, password });

            if (!response.data?.login.error) {
              await AsyncStorage.setItem(
                "user",
                JSON.stringify(response.data!.login.user!)
              );
              setUser(response.data!.login.user!);
            } else {
              if (response.data?.login.error.field === "Email") {
                setEmailError(response.data.login.error.message);
                setPasswordError(null);
              } else {
                setEmailError(null);
                setPasswordError(response.data.login.error.message);
              }
            }
          }}
          style={styles.button}
        >
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: (Dimensions.get("window").width * 18) / 428,
            }}
          >
            Login
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
    width: (Dimensions.get("window").width * 75) / 428,
    height: (Dimensions.get("window").width * 75) / 428,
    backgroundColor: "#DDDDDD",
    borderRadius: (Dimensions.get("window").width * 12) / 428,
    marginBottom: (Dimensions.get("window").width * 16) / 428,
  },

  logoText: {
    fontFamily: "Poppins-Bold",
    color: "#386FA4",
    fontSize: (Dimensions.get("window").width * 36) / 428,
    marginBottom: (Dimensions.get("window").width * 24) / 428,
  },

  textInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
    padding: (Dimensions.get("window").width * 24) / 428,
    borderRadius: (Dimensions.get("window").width * 12) / 428,
    width: (Dimensions.get("window").width * 13) / 15,
    marginTop: (Dimensions.get("window").width * 16) / 428,
  },

  button: {
    marginTop: (Dimensions.get("window").width * 24) / 428,
    backgroundColor: "#B6DCFE",
    padding: (Dimensions.get("window").width * 25) / 428,
    borderRadius: (Dimensions.get("window").width * 36) / 428,
    width: (Dimensions.get("window").width * 13) / 15,
    alignItems: "center",
  },

  text: {
    fontFamily: "Poppins-SemiBold",
    color: "#87BEFF",
  },
  error: {
    fontFamily: "Poppins-SemiBold",
    color: "#CC3333",
    marginTop: (Dimensions.get("window").width * 14) / 428,
  },
});

export default Login;
