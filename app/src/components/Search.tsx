import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, View } from "react-native";
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
        size={20}
        style={{ marginLeft: 8 }}
      />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{
          fontFamily: "Poppins-Regular",
          fontSize: 16,
          color: colors.gray,
          marginLeft: 12,
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
