import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BackButton from "../components/BackButton";
import Layout from "../components/Layout";
import { colors } from "../utils/styles";

interface ItemProps {
  title: string;
  date: string;
}

interface RenderItemProps {
  item: ItemProps;
}

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

const Item: React.FC<ItemProps> = ({ title, date }) => (
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
  const renderItem: React.FC<RenderItemProps> = ({ item }) => (
    <Item title={item.title} date={item.date} />
  );

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
