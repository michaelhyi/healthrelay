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
import { useCreateContactMutation } from "../generated/graphql";
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
  const [uuid, setUuid] = useState("");
  const [uuidError, setUuidError] = useState<null | string>(null);

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
          <Text style={styles.header}>Add Contact UUID</Text>
          <TextInput
            autoCapitalize="none"
            value={uuid}
            onChangeText={setUuid}
            style={styles.input}
          />
          {uuidError && <Text style={styles.error}>{uuidError}</Text>}
          <TouchableOpacity
            onPress={async () => {
              const response = await createContact({
                uuid: user.uuid!,
                contactUuid: uuid,
              });

              if (!response.data?.createContact.success) {
                setUuidError(response.data?.createContact.error?.message!);
              } else {
                setUuidError(null);
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
