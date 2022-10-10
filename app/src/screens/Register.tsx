import { AntDesign } from "@expo/vector-icons";
import { CheckIcon, Select } from "native-base";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../components/BackButton";
import Layout from "../components/Layout";

interface Props {
  navigation: {
    navigate: (
      route: string,
      params: {
        email: string;
        password: string;
        profession: string;
      }
    ) => void;
    goBack: () => void;
  };
}
const Register: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<null | string>(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState<null | string>(null);
  const [profession, setProfession] = useState("");
  const [professionError, setProfessionError] = useState<null | string>(null);

  return (
    <Layout>
      <BackButton navigation={navigation} />
      <View style={styles.container}>
        <Image
          source={require("../assets/Main_Logo_Transparent.png")}
          style={{
            height: Dimensions.get("window").height * (200 / 926),
            width: Dimensions.get("window").width * (300 / 428),
          }}
        />
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
              fontSize: (Dimensions.get("window").width * 16) / 428,
              marginLeft: (Dimensions.get("window").width * 15) / 428,
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
        <View style={{ padding: (Dimensions.get("window").width * 6) / 428 }} />
        <Select
          selectedValue={profession}
          accessibilityLabel="Select Profession"
          minWidth={(Dimensions.get("window").width * 13) / 15}
          placeholder="Select Profession"
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
          onValueChange={(itemValue) => setProfession(itemValue)}
        >
          <Select.Item label="Radiologist" value="Radiologist" />
          <Select.Item label="Ordering Physician" value="Ordering Physician" />
        </Select>
        {professionError && <Text style={styles.error}>{professionError}</Text>}
        <TouchableOpacity
          onPress={async () => {
            if (!email.includes("@")) {
              setEmailError("Invalid email.");
              setPasswordError(null);
              setProfessionError(null);
            } else if (password.length <= 2) {
              setEmailError(null);
              setPasswordError("Password must be greater than 2 characters.");
              setProfessionError(null);
            } else if (profession.length === 0) {
              setEmailError(null);
              setPasswordError(null);
              setProfessionError("You must select a profession.");
            } else {
              navigation.navigate("Additional Register", {
                email,
                password,
                profession,
              });
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
            Next
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
    marginTop: (Dimensions.get("window").width * 48) / 428,
    backgroundColor: "#B6DCFE",
    padding: (Dimensions.get("window").width * 25) / 428,
    borderRadius: (Dimensions.get("window").width * 36) / 428,
    width: (Dimensions.get("window").width * 13) / 15,
    alignItems: "center",
  },
  error: {
    fontFamily: "Poppins-SemiBold",
    color: "#CC3333",
    marginTop: (Dimensions.get("window").width * 14) / 428,
  },
});

export default Register;
