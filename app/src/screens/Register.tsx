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
import BackButton from "../components/BackButton";
import Layout from "../components/Layout";
import { CheckIcon, Select } from "native-base";
import { colors } from "../utils/styles";
// import { useRegisterMutation } from "../generated/graphql";
// import { context } from "../utils/context";
// import { Navigation } from "../utils/types";

interface Props {
  navigation: {
    navigate: (route: string) => void;
    goBack: () => void;
  };
}
const Register: React.FC<Props> = ({ navigation }) => {
  // const { setUser } = useContext(context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profession, setProfession] = useState("");
  //   const [, register] = useRegisterMutation();

  return (
    <Layout>
      <BackButton navigation={navigation} />
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
        <View style={{ padding: 6 }} />
        <Select
          selectedValue={profession}
          accessibilityLabel="Select Profession"
          minWidth={(Dimensions.get("window").width * 13) / 15}
          placeholder="Select Profession"
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: 16,
            height: 64,
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
          onPress={() => navigation.navigate("Additional Register")}
          style={styles.button}
        >
          <Text style={{ fontFamily: "Poppins-Medium", fontSize: 18 }}>
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
    marginTop: 48,
    backgroundColor: "#B6DCFE",
    padding: 25,
    borderRadius: 36,
    width: (Dimensions.get("window").width * 13) / 15,
    alignItems: "center",
  },
});

export default Register;
