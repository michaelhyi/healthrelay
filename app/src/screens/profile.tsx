import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Layout from "../components/Layout";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { colors } from "../utils/styles";

interface Props {
  navigation: {
    goBack: () => void;
  };
}

const Profile: React.FC<Props> = ({ navigation }) => {
  return (
    <Layout>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={20} style={{ marginTop: 36 }} />
      </TouchableOpacity>
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
          Dr. Oneil Lee
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: 20,
            color: colors.blue_300,
          }}
        >
          Radiologist
        </Text>
        <TouchableOpacity style={styles.card}>
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
            52c74c89-9923-435b-ba63-8c92f24d58e4
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
            Kaiser Permenante
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
            oneillee@kaiserpermenante.org
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
            (949)-564-2424
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
