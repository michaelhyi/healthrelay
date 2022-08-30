import { Feather } from "@expo/vector-icons";
import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";

interface Props {
  onPress: () => void;
}

const EditButton: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginLeft: "auto" }}>
      <Feather
        name="edit"
        size={(Dimensions.get("window").width * 20) / 428}
        style={{ marginTop: (Dimensions.get("window").width * 36) / 428 }}
      />
    </TouchableOpacity>
  );
};

export default EditButton;
