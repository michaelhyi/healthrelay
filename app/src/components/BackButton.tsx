import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";

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
      <AntDesign
        name="left"
        size={Dimensions.get("window").width * (20 / 428)}
        style={{ marginTop: Dimensions.get("window").width * (36 / 428) }}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
