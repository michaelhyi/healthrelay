import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Layout from "../components/Layout";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils/styles";
import BackButton from "../components/BackButton";
const DATA = [
  {
    title: "Dr. Brian Wilson has completed Order #43",
    date: "August 18th, 2022 6:21 PM",
  },
  {
    title: "Dr. Brian Wilson has completed Order #43",
    date: "August 18th, 2022 6:21 PM",
  },
  {
    title: "Dr. Brian Wilson has completed Order #43",
    date: "August 18th, 2022 6:21 PM",
  },
  {
    title: "Dr. Brian Wilson has completed Order #43",
    date: "August 18th, 2022 6:21 PM",
  },
];

interface Props {
  navigation: {
    goBack: () => void;
  };
}

const Item = ({ title, date }) => (
  <TouchableOpacity
    style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
  >
    <Ionicons name="person" size={40} color={colors.blue_400} />
    <View style={{ justifyContent: "center", marginLeft: 11 }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  </TouchableOpacity>
);

const Notifications: React.FC<Props> = ({ navigation }) => {
  const renderItem = ({ item }) => <Item title={item.title} date={item.date} />;

  return (
    <Layout>
      <View style={{ flexDirection: "row" }}>
        <BackButton navigation={navigation} />
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#133C55",
  },
  date: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#386FA4",
  },
});

export default Notifications;
