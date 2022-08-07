import { id } from "date-fns/locale";
import { FlatList, View } from "react-native";
import SectionHeader from "./SectionHeader";
import Order from "./Order";

const RecentOrdersSection = () => {
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
    <Order
      id={item.id}
      date={item.date}
      priority={item.priority}
      status={item.status}
    />
  );

  return (
    <View style={{ marginTop: 48 }}>
      <SectionHeader text="Orders" />
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
