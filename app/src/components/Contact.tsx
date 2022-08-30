import { Ionicons } from "@expo/vector-icons";
import React, { useContext } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Context from "../utils/context";
import { colors } from "../utils/styles";

interface Props {
  navigation: {
    navigate: (route: string, params: { id: number }) => void;
    goBack: () => void;
  };
  id: number;
  firstName: string;
  lastName: string;
  contact?: boolean;
  profession: string;
  organization: string;
}

const Contact: React.FC<Props> = ({
  navigation,
  id,
  contact,
  profession,
  organization,
  firstName,
  lastName,
}) => {
  const { setContact } = useContext(Context);

  return (
    <TouchableOpacity
      onPress={async () => {
        if (contact) {
          setContact({
            id: id!,
            firstName: firstName!,
            lastName: lastName!,
            profession: profession!,
          });
          navigation.goBack();
        } else {
          navigation.navigate("Profile", { id });
        }
      }}
      style={styles.container}
    >
      <Ionicons
        name="person"
        size={(Dimensions.get("window").width * 45) / 428}
        color={colors.blue_400}
      />
      <View style={{ marginLeft: (Dimensions.get("window").width * 24) / 428 }}>
        <Text style={styles.name}>
          Dr. {firstName} {lastName}
        </Text>
        <Text style={styles.profession}>
          {profession} at {organization}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: (Dimensions.get("window").width * 12) / 428,
    flexDirection: "row",
    alignItems: "center",
    padding: (Dimensions.get("window").width * 24) / 428,
    marginBottom: (Dimensions.get("window").width * 18) / 428,
  },

  name: {
    color: colors.blue_400,
    fontFamily: "Poppins-SemiBold",
    fontSize: (Dimensions.get("window").width * 18) / 428,
  },

  profession: {
    color: colors.blue_300,
    fontFamily: "Poppins-Regular",
    fontSize: (Dimensions.get("window").width * 12) / 428,
  },
});

export default Contact;
