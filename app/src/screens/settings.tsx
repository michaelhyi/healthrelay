import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import Layout from "../components/Layout";
import Context from "../utils/context";

const Settings = () => {
  const { setUser } = useContext(Context);

  return (
    <Layout>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={async () => {
            await AsyncStorage.removeItem("user");
            setUser(null);
          }}
          style={{
            backgroundColor: "#B6DCFE",
            padding: 25,
            borderRadius: 36,
            width: Dimensions.get("window").width * (13 / 15),
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 18,
              textAlign: "center",
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default Settings;
