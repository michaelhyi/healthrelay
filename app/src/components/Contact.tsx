import { Ionicons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
      <Ionicons name="person" size={45} color={colors.blue_400} />
      <View style={{ marginLeft: 24 }}>
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
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
    marginBottom: 18,
  },

  name: {
    color: colors.blue_400,
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
  },

  profession: {
    color: colors.blue_300,
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },
});

export default Contact;
