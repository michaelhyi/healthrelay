import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../utils/styles";
import React, { useContext } from "react";
import Context from "../utils/context";
import { useReadContactMutation } from "../generated/graphql";

interface Props {
  navigation: {
    navigate: (route: string, params: { id: number }) => void;
    goBack: () => void;
  };
  id: number;
  item: {
    id: number;
    radiologistId: number;
    orderingPhysicianId: number;
  };
}

const Contact: React.FC<Props> = ({ navigation, item }) => {
  const { setContact } = useContext(Context);
  const [, readContact] = useReadContactMutation();

  return (
    <TouchableOpacity
      onPress={async () => {
        if (contact) {
          const response = await readContact({ uuid });
          setContact({
            uuid: response.data?.readContact.user.uuid!,
            firstName: response.data?.readContact.doctor?.firstName!,
            lastName: response.data?.readContact.doctor?.lastName!,
            profession: response.data?.readContact.user.profession!,
          });
          navigation.goBack();
        } else {
          navigation.navigate("Profile", { uuid });
        }
      }}
      style={styles.container}
    >
      <Ionicons name="person" size={45} color={colors.blue_400} />
      <View style={{ marginLeft: 24 }}>
        <Text style={styles.name}>Dr. {name}</Text>
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
