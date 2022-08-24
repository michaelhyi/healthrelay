import React from "react";
import { Dimensions, FlatList, View } from "react-native";
import OrderCard from "./OrderCard";
import SectionHeader from "./SectionHeader";

interface OrderProps {
  id: number;
  date: string;
  priority: string;
  status: string;
}

interface Props {
  profession: string;
  uuid: string;
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
  uuid,
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
      style={{ marginTop: 36, height: Dimensions.get("window").height / 5 }}
    >
      <SectionHeader
        profession={profession}
        uuid={uuid}
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
