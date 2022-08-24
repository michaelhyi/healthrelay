import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackButton from "../components/BackButton";
import EditButton from "../components/EditButton";
import Layout from "../components/Layout";
import User from "../components/User";

interface Props {
  navigation: {
    navigate: (route: string) => void;
    goBack: () => void;
  };
}

const Order: React.FC<Props> = ({ navigation }) => {
  return (
    <Layout>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <BackButton navigation={navigation} />
        <EditButton navigation={navigation} />
      </View>
      <Text style={styles.header}>Order #39461</Text>
      <View style={{ marginTop: 15 }}>
        <User onPress={() => navigation.navigate("Profile")} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 25,
        }}
      >
        <View>
          <Text style={styles.text}>MRN</Text>
          <Text style={styles.text}>Date</Text>
          <Text style={styles.text}>Priority</Text>
          <Text style={styles.text}>Status</Text>
        </View>
        <View>
          <Text style={styles.bluetext}>3575038</Text>
          <Text style={styles.bluetext}>August 1st, 2022</Text>
          <Text style={styles.bluetext}>High</Text>
          <Text style={styles.bluetext}>Complete</Text>
        </View>
      </View>

      <Text style={styles.messageheader}>Message</Text>

      <Text style={styles.text}>
        Avulsion fracture over the medila malleolus with a spiral fracture over
        the distal fibula. Fracture fragments extending into the ankle mortise
        with the widening over the medial aspect. Soft tissue swelling over the
        ankle more prominent over the lateral malleolus.
      </Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
    color: "#386FA4",
    marginTop: 20,
  },
  name: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
    color: "#386FA4",
  },
  position: {
    fontSize: 14,
    fontFamily: "Poppins-Semibold",
    color: "#59A5D8",
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#999999",
    marginBottom: 4,
  },
  bluetext: {
    textAlign: "right",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#386FA4",
    marginBottom: 4,
  },
  messageheader: {
    fontSize: 20,
    fontFamily: "Poppins-Medium",
    color: "#386FA4",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Order;
