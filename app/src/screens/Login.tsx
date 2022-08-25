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
import { useLoginMutation } from "../generated/graphql";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Context from "../utils/context";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

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
        <View style={styles.icon} />
        <Text style={styles.logoText}>HealthRelay</Text>
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
        {emailError && <Text style={styles.error}>{emailError}</Text>}
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
        {passwordError && <Text style={styles.error}>{passwordError}</Text>}
        <TouchableOpacity
          style={{ marginTop: 12 }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.text}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 4 }}>
          <Text style={styles.text}>Forgot Password? </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            const response = await login({ email, password });
            console.log(response);

            if (!response.data?.login.error) {
              await AsyncStorage.setItem(
                "user",
                JSON.stringify(response.data!.login.user!.uuid)
              );
              setUser(response.data!.login.user!.uuid);
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
  error: {
    fontFamily: "Poppins-SemiBold",
    color: "#CC3333",
    marginTop: 14,
  },
});

export default Login;
