import React from "react";
import { Dimensions, FlatList, View } from "react-native";
import OrderCard from "./OrderCard";
import SectionHeader from "./SectionHeader";

interface OrderProps {
  id: number;
  date: string;
  priority: number;
  status: number;
}

interface Props {
  profession: string;
  id: number;
  navigation: {
    navigate: (route: string) => void;
  };
  data: OrderProps[];
}

interface ItemProps {
  item: OrderProps;
}

const RecentOrdersSection: React.FC<Props> = ({
  profession,
  navigation,
  data,
  id,
}) => {
  const renderItem: React.FC<ItemProps> = ({ item }) => (
    <OrderCard
      navigation={navigation}
      id={item.id}
      date={item.date}
      priority={item.priority}
      status={item.status}
    />
  );

  return (
    <View
      style={{
        marginTop: (Dimensions.get("window").width * 36) / 428,
        height: Dimensions.get("window").height / 5,
      }}
    >
      <SectionHeader
        profession={profession}
        id={id}
        text="Orders"
        navigation={navigation}
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default RecentOrdersSection;
