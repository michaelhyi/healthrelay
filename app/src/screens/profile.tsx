import { Ionicons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackButton from "../components/BackButton";
import EditButton from "../components/EditButton";
import Layout from "../components/Layout";
import { useReadUserQuery } from "../generated/graphql";
import Context from "../utils/context";
import { colors } from "../utils/styles";
import Loading from "./loading";
import * as Clipboard from "expo-clipboard";

interface Props {
  route: {
    params: {
      uuid: string;
    };
  };
  navigation: {
    navigate: (route: string) => void;
    goBack: () => void;
  };
}

const Profile: React.FC<Props> = ({ route, navigation }) => {
  const { user } = useContext(Context);
  const { uuid } = route.params;
  const [{ data, fetching }] = useReadUserQuery({ variables: { uuid } });

  if (fetching) return <Loading />;

  return (
    <Layout>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <BackButton navigation={navigation} />
        {user === uuid && <EditButton navigation={navigation} />}
      </View>
      <View style={styles.container}>
        <Ionicons name="person" size={100} color={colors.blue_400} />
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: 32,
            color: colors.blue_400,
            marginTop: 24,
          }}
        >
          Dr. {data?.readUser.doctor?.firstName}{" "}
          {data?.readUser.doctor?.lastName}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: 20,
            color: colors.blue_300,
          }}
        >
          {data?.readUser.user.profession}
        </Text>
        <TouchableOpacity
          onPress={async () => {
            await Clipboard.setStringAsync(data?.readUser.user.uuid!);
          }}
          style={styles.card}
        >
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 18,
              color: colors.blue_400,
            }}
          >
            UUID
          </Text>
          <Text
            style={{
              marginTop: 12,
              fontFamily: "Poppins-Regular",
              fontSize: 14,
              color: colors.gray,
            }}
          >
            {data?.readUser.user.uuid}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 18,
              color: colors.blue_400,
            }}
          >
            Organization
          </Text>
          <Text
            style={{
              marginTop: 12,
              fontFamily: "Poppins-Regular",
              fontSize: 14,
              color: colors.gray,
            }}
          >
            {data?.readUser.doctor?.organization}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 18,
              color: colors.blue_400,
            }}
          >
            Email
          </Text>
          <Text
            style={{
              marginTop: 12,
              fontFamily: "Poppins-Regular",
              fontSize: 14,
              color: colors.gray,
            }}
          >
            {data?.readUser.user.email}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 18,
              color: colors.blue_400,
            }}
          >
            Phone
          </Text>
          <Text
            style={{
              marginTop: 12,
              fontFamily: "Poppins-Regular",
              fontSize: 14,
              color: colors.gray,
            }}
          >
            {data?.readUser.doctor?.phone}
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    width: "100%",
    padding: 24,
    borderRadius: 12,
    marginTop: 24,
  },
});

export default Profile;
