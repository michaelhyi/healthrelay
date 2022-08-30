import React, { useContext, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../components/BackButton";
import Layout from "../components/Layout";
import {
  useCreateContactMutation,
  useCreateRecentContactMutation,
} from "../generated/graphql";
import Context from "../utils/context";
import { colors } from "../utils/styles";

interface Props {
  navigation: {
    goBack: () => void;
  };
}

const CreateContact: React.FC<Props> = ({ navigation }) => {
  const { user } = useContext(Context);
  const [, createContact] = useCreateContactMutation();
  const [, createRecentContact] = useCreateRecentContactMutation();
  const [id, setId] = useState<string>("");
  const [idError, setIdError] = useState<null | string>(null);

  return (
    <Layout>
      <BackButton navigation={navigation} />
      <View
        style={{
          zIndex: -1,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={styles.header}>Add Contact ID</Text>
          <TextInput
            autoCapitalize="none"
            value={id}
            onChangeText={setId}
            style={styles.input}
          />
          {idError && <Text style={styles.error}>{idError}</Text>}
          <TouchableOpacity
            onPress={async () => {
              const response = await createContact({
                radiologistId: user.id!,
                orderingPhysicianId: parseInt(id),
              });

              await createRecentContact({
                radiologistId: user.id!,
                orderingPhysicianId: parseInt(id),
              });

              if (!response.data?.createContact.success) {
                setIdError(response.data?.createContact.error?.message!);
              } else {
                setIdError(null);
                Alert.alert("Success!", "User has been added to contacts!");
                navigation.goBack();
              }
            }}
            style={{
              backgroundColor: colors.blue_400,
              padding: 12,
              marginTop: 24,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                color: "white",
                textAlign: "center",
              }}
            >
              Add Contact
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    color: "#999999",
    textAlign: "left",
  },
  input: {
    marginTop: 15,
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    fontSize: 14,
    fontFamily: "Poppins-SemiBold",
    color: "black",
    width: 256,
  },
  error: {
    fontFamily: "Poppins-SemiBold",
    color: "#CC3333",
    marginTop: 14,
  },
});

export default CreateContact;
