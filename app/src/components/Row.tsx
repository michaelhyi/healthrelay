import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/styles";

interface Props {
  name: string;
  text: string;
}

const Row: React.FC<Props> = ({ name, text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontFamily: "Poppins-Medium",
    fontSize: (Dimensions.get("window").width * 12) / 428,
    color: colors.gray,
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: (Dimensions.get("window").width * 12) / 428,
    color: colors.blue_400,
    marginLeft: "auto",
  },
});

export default Row;
