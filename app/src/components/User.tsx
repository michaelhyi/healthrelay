import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../utils/styles";
import React from "react";

interface Props {
  onPress: () => void;
}

const User: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Ionicons name="person" size={45} color={colors.blue_400} />
      <View style={{ marginLeft: 24 }}>
        <Text style={styles.name}>Dr. Oneil Lee</Text>
        <Text style={styles.profession}>Radiologist</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    color: colors.blue_400,
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
  },

  profession: {
    color: colors.blue_300,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
  },
});

export default User;
