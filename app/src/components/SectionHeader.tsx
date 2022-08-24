import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../utils/styles";

interface Props {
  profession: string;
  uuid: string;
  text: string;
  navigation: {
    navigate: (
      route: string,
      params: { uuid: string; profession: string }
    ) => void;
  };
}

const SectionHeader: React.FC<Props> = ({
  profession,
  uuid,
  text,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>Recent {text}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(text, {
            uuid,
            profession,
          })
        }
        style={{ marginLeft: "auto" }}
      >
        <Text style={styles.btn}>View All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  main: {
    fontFamily: "Poppins-Medium",
    fontSize: 20,
    color: colors.blue_400,
  },
  btn: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: colors.blue_300,
  },
});

export default SectionHeader;
