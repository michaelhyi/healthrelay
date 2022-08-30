import React, { useContext, useState } from "react";
import {
  Alert,
  Dimensions,
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
              padding: (Dimensions.get("window").width * 12) / 428,
              marginTop: (Dimensions.get("window").width * 24) / 428,
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
    fontSize: (Dimensions.get("window").width * 14) / 428,
    fontFamily: "Poppins-SemiBold",
    color: "#999999",
    textAlign: "left",
  },
  input: {
    marginTop: (Dimensions.get("window").width * 15) / 428,
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: (Dimensions.get("window").width * 1) / 428,
    fontSize: (Dimensions.get("window").width * 14) / 428,
    fontFamily: "Poppins-SemiBold",
    color: "black",
    width: (Dimensions.get("window").width * 256) / 428,
  },
  error: {
    fontFamily: "Poppins-SemiBold",
    color: "#CC3333",
    marginTop: (Dimensions.get("window").width * 14) / 428,
  },
});

export default CreateContact;
