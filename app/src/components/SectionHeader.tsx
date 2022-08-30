import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../utils/styles";

interface Props {
  profession: string;
  id: number;
  text: string;
  navigation: {
    navigate: (
      route: string,
      params: { id: number; profession: string }
    ) => void;
  };
}

const SectionHeader: React.FC<Props> = ({
  profession,
  id,
  text,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>Recent {text}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(text, {
            id,
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
    marginBottom: (Dimensions.get("window").width * 24) / 428,
  },
  main: {
    fontFamily: "Poppins-Medium",
    fontSize: (Dimensions.get("window").width * 20) / 428,
    color: colors.blue_400,
  },
  btn: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: colors.blue_300,
  },
});

export default SectionHeader;
