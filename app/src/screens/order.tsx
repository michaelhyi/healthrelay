import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Layout from "../components/Layout";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils/styles";
import User from "../components/User";

interface Props {
  navigation: {
    goBack: () => void;
  };
}

const Order: React.FC<Props> = ({ navigation }) => {
  return (
    <Layout>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={20} style={{ marginTop: 36 }} />
        </TouchableOpacity>

      </View>
      <Text style={styles.header}>Order #39461</Text>
      <View style={{ flexDirection: "row", marginTop: 15}}>
        <Ionicons name="person" size={50} color={colors.blue_400} />
        <View style={{justifyContent: "center", marginLeft: 10}}>
          <User/>
          <Text style={styles.position}>Ordering Physician</Text>
        </View>
      </View>

      <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 20}}>
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

      <Text style={styles.text}>Avulsion fracture over the medila malleolus with a spiral fracture over the distal fibula. 
            Fracture fragments extending into the ankle mortise with the widening over the medial aspect. 
            Soft tissue swelling over the ankle more prominent over the lateral malleolus.</Text>

    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
    color: "#386FA4",
    marginTop: 20
  },
  name: {
    fontSize: 18,
    fontFamily: "Poppins-SemiBold",
    color: "#386FA4",
  },
  position: {
    fontSize: 14,
    fontFamily: "Poppins-Semibold",
    color: "#59A5D8"
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#999999"
  },
  bluetext: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: "#386FA4"
  },
  messageheader: {
    fontSize: 20,
    fontFamily: "Poppins-Medium",
    color: "#386FA4",
    marginTop: 20,
    marginBottom: 20
  }
})

export default Order;
