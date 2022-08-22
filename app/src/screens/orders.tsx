import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Layout from "../components/Layout";
import { AntDesign } from "@expo/vector-icons";
import Search from "../components/Search";
import OrderCard from "../components/OrderCard";
import BackButton from "../components/BackButton";

interface Props {
  navigation: {
    navigate: (route: string) => void;
    goBack: () => void;
  };
}

const Orders: React.FC<Props> = ({ navigation }) => {
  const data = [
    {
      id: 39461,
      date: "August 1st, 2022",
      priority: "High",
      status: "Complete",
    },
    {
      id: 39461,
      date: "August 1st, 2022",
      priority: "High",
      status: "Complete",
    },
    {
      id: 39461,
      date: "August 1st, 2022",
      priority: "High",
      status: "Complete",
    },
    {
      id: 39461,
      date: "August 1st, 2022",
      priority: "High",
      status: "Complete",
    },
    {
      id: 39461,
      date: "August 1st, 2022",
      priority: "High",
      status: "Complete",
    },
    {
      id: 39461,
      date: "August 1st, 2022",
      priority: "High",
      status: "Complete",
    },
    {
      id: 39461,
      date: "August 1st, 2022",
      priority: "High",
      status: "Complete",
    },
    {
      id: 39461,
      date: "August 1st, 2022",
      priority: "High",
      status: "Complete",
    },
  ];

  return (
    <Layout>
      <BackButton navigation={navigation} />
      <Search />
      <FlatList
        style={{ marginTop: 12 }}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <OrderCard
            navigation={navigation}
            full
            id={item.id}
            date={item.date}
            priority={item.priority}
            status={item.status}
          />
        )}
      />
    </Layout>
  );
};

export default Orders;
