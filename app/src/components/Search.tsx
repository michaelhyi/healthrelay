import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import { colors } from "../utils/styles";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
}

const Search: React.FC<Props> = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <AntDesign
        name="search1"
        color={colors.gray}
        size={(Dimensions.get("window").width * 20) / 428}
        style={{ marginLeft: (Dimensions.get("window").width * 8) / 428 }}
      />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{
          fontFamily: "Poppins-Regular",
          fontSize: (Dimensions.get("window").width * 16) / 428,
          color: colors.gray,
          marginLeft: (Dimensions.get("window").width * 12) / 428,
        }}
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#E5E5E5",
    width: "100%",
    borderRadius: 12,
    padding: 12,
    marginTop: 36,
  },
});

export default Search;
