import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../utils/styles";
import React from "react";

interface Props {
  navigation: {
    navigate: (route: string) => void;
  };
  id: number;
  name: string;
  profession: "Radiologist" | "Ordering Physician" | string;
  organization: string;
}

const Contact: React.FC<Props> = ({
  navigation,
  id,
  name,
  profession,
  organization,
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Profile")}
      style={styles.container}
    >
      <Ionicons name="person" size={45} color={colors.blue_400} />
      <View style={{ marginLeft: 24 }}>
        <Text style={styles.name}>Dr. {name}</Text>
        <Text style={styles.profession}>
          {profession} at {organization}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
    marginBottom: 18,
  },

  name: {
    color: colors.blue_400,
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
  },

  profession: {
    color: colors.blue_300,
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },
});

export default Contact;
