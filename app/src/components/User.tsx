import { Ionicons } from "@expo/vector-icons";
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
  onPress: () => void;
  firstName: string;
  lastName: string;
  profession: string;
}

const User: React.FC<Props> = ({
  onPress,
  firstName,
  lastName,
  profession,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Ionicons
        name="person"
        size={(Dimensions.get("window").width * 45) / 428}
        color={colors.blue_400}
      />
      <View style={{ marginLeft: (Dimensions.get("window").width * 18) / 428 }}>
        <Text style={styles.name}>
          Dr. {firstName} {lastName}
        </Text>
        <Text style={styles.profession}>{profession}</Text>
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
    fontSize: (Dimensions.get("window").width * 18) / 428,
  },

  profession: {
    color: colors.blue_300,
    fontFamily: "Poppins-Regular",
    fontSize: (Dimensions.get("window").width * 14) / 428,
  },
});

export default User;
