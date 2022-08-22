import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";

interface Props {
  navigation: {
    goBack: () => void;
  };
}

const BackButton: React.FC<Props> = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={{ zIndex: 100 }}
      onPress={() => navigation.goBack()}
    >
      <AntDesign name="left" size={20} style={{ marginTop: 36 }} />
    </TouchableOpacity>
  );
};

export default BackButton;
