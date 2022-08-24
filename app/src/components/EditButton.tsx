import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

interface Props {
  navigation: {
    navigate: (route: string) => void;
  };
}

const EditButton: React.FC<Props> = ({ navigation }) => {
  return (
    <TouchableOpacity style={{ marginLeft: "auto" }}>
      <Feather name="edit" size={20} style={{ marginTop: 36 }} />
    </TouchableOpacity>
  );
};

export default EditButton;
