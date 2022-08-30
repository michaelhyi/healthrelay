import { AntDesign, Ionicons, Octicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
import { useRegisterMutation } from "../generated/graphql";
import Context from "../utils/context";

interface Props {
  route: {
    params: {
      email: string;
      password: string;
      profession: string;
    };
  };
  navigation: {
    navigate: (route: string) => void;
    goBack: () => void;
  };
}

const AdditionalRegister: React.FC<Props> = ({ navigation, route }) => {
  const { email, password, profession } = route.params;
  const { setUser } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState<null | string>(null);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState<null | string>(null);
  const [organization, setOrganization] = useState("");
  const [organizationError, setOrganizationError] = useState<null | string>(
    null
  );
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState<null | string>(null);
  const [, register] = useRegisterMutation();

  return (
    <Layout>
      <BackButton navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.icon} />
        <Text style={styles.logoText}>HealthRelay</Text>
        <View style={styles.textInput}>
          <Ionicons
            name="person"
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
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            placeholderTextColor="#999999"
          />
        </View>
        {firstNameError && <Text style={styles.error}>{firstNameError}</Text>}
        <View style={styles.textInput}>
          <Ionicons
            name="person"
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
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            placeholderTextColor="#999999"
          />
        </View>
        {lastNameError && <Text style={styles.error}>{lastNameError}</Text>}
        <View style={styles.textInput}>
          <Octicons
            name="organization"
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
            placeholder="Organization"
            value={organization}
            onChangeText={setOrganization}
            placeholderTextColor="#999999"
          />
        </View>
        {organizationError && (
          <Text style={styles.error}>{organizationError}</Text>
        )}
        <View style={styles.textInput}>
          <AntDesign
            name="phone"
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
            placeholder="Phone"
            value={phone}
            onChangeText={setPhone}
            placeholderTextColor="#999999"
          />
        </View>
        {phoneError && <Text style={styles.error}>{phoneError}</Text>}
        <TouchableOpacity
          onPress={async () => {
            const response = await register({
              email,
              password,
              firstName,
              lastName,
              profession,
              organization,
              phone,
            });
            if (!response.data?.register.error) {
              await AsyncStorage.setItem(
                "user",
                JSON.stringify(response.data!.register.user)
              );
              setUser(response.data!.register.user!);
            } else {
              if (response.data?.register.error.field === "First Name") {
                setFirstNameError(response.data.register.error.message);
                setLastNameError(null);
                setOrganizationError(null);
                setPhoneError(null);
              } else if (response.data?.register.error.field === "Last Name") {
                setFirstNameError(null);
                setLastNameError(response.data.register.error.message);
                setOrganizationError(null);
                setPhoneError(null);
              } else if (
                response.data?.register.error.field === "Organization"
              ) {
                setFirstNameError(null);
                setLastNameError(null);
                setOrganizationError(response.data.register.error.message);
                setPhoneError(null);
              } else {
                setFirstNameError(null);
                setLastNameError(null);
                setOrganizationError(null);
                setPhoneError(response.data.register.error.message);
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

export default AdditionalRegister;
