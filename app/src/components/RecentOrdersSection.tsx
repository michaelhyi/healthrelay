import React from "react";
import { FlatList, View } from "react-native";
import OrderCard from "./OrderCard";
import SectionHeader from "./SectionHeader";

interface Props {
  navigation: {
    navigate: (route: string) => void;
  };
}

const RecentOrdersSection: React.FC<Props> = ({ navigation }) => {
  const fake_data = [
    {
      id: 39461,
      date: "August 1st, 2022",
      priority: "High",
      status: "Complete",
    },
    {
      id: 43612,
      date: "July 23rd, 2022",
      priority: "Low",
      status: "Opened",
    },
  ];

  const renderItem = ({ item }) => (
    <OrderCard
      id={item.id}
      date={item.date}
      priority={item.priority}
      status={item.status}
    />
  );

  return (
    <View style={{ marginTop: 48 }}>
      <SectionHeader text="Orders" navigation={navigation} />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={fake_data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default RecentOrdersSection;
