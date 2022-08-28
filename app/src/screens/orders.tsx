import { useRoute } from "@react-navigation/native";
import { CheckIcon, Select } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import BackButton from "../components/BackButton";
import Layout from "../components/Layout";
import OrderCard from "../components/OrderCard";
import Search from "../components/Search";
import { useReadOrdersQuery } from "../generated/graphql";
import Context from "../utils/context";
import Loading from "./loading";

interface Props {
  navigation: {
    navigate: (route: string) => void;
    goBack: () => void;
  };
}

const Orders: React.FC<Props> = ({ navigation }) => {
  const { user } = useContext(Context);
  const [{ data, fetching }] = useReadOrdersQuery({
    variables: {
      id: user.id,
      profession: user.profession,
    },
  });
  const route = useRoute();

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<any>(null);
  const [sortBy, setSortBy] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!fetching && typeof data?.readOrders !== "undefined") {
      const orders = data.readOrders;
      orders.sort((a, b) =>
        a.createdAt < b.createdAt ? 1 : b.createdAt < a.createdAt ? -1 : 0
      );
      setFilteredData(orders);
      setSortBy("Date Descending");
      setLoading(false);
    }
  }, [data, fetching]);

  const filter = (text: string) => {
    if (text.length === 0) {
      setSearch("");
      setFilteredData(data?.readOrders);
    } else if (text && data) {
      const newData = data.readOrders.filter((item: any) => {
        const id = item.id;
        const itemData = id ? id.toString().toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    }
  };

  if (fetching || loading) return <Loading />;

  return (
    <Layout>
      {route.name !== "View Orders Screen" && (
        <BackButton navigation={navigation} />
      )}
      <Search value={search} onChangeText={(text) => filter(text)} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 16,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: 16,
          }}
        >
          Sort By
        </Text>
        <Select
          selectedValue={sortBy}
          accessibilityLabel="Sort By"
          placeholder="Sort By"
          fontFamily="Poppins-Regular"
          fontSize={16}
          style={{
            height: 32,
          }}
          width={256}
          _selectedItem={{
            bg: "#E5E5E5",
            endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => {
            setSortBy(itemValue);
            if (!fetching && typeof data?.readOrders !== "undefined") {
              const orders = data.readOrders;
              if (itemValue === "Date Descending") {
                console.log(sortBy);
                orders.sort((a, b) =>
                  a.createdAt < b.createdAt
                    ? 1
                    : b.createdAt < a.createdAt
                    ? -1
                    : 0
                );
                setFilteredData(orders);
              } else if (itemValue === "Date Ascending") {
                console.log(itemValue);
                orders.sort((a, b) =>
                  a.createdAt > b.createdAt
                    ? 1
                    : b.createdAt > a.createdAt
                    ? -1
                    : 0
                );
                setFilteredData(orders);
              } else if (itemValue === "Priority Ascending") {
                orders.sort((a, b) =>
                  a.priority > b.priority ? 1 : b.priority > a.priority ? -1 : 0
                );
                setFilteredData(orders);
              } else if (itemValue === "Priority Descending") {
                orders.sort((a, b) =>
                  a.priority < b.priority ? 1 : b.priority < a.priority ? -1 : 0
                );
                setFilteredData(orders);
              } else if (itemValue === "Status Ascending") {
                orders.sort((a, b) =>
                  a.status > b.status ? 1 : b.status > a.status ? -1 : 0
                );
                setFilteredData(orders);
              } else {
                orders.sort((a, b) =>
                  a.status < b.status ? 1 : b.status < a.status ? -1 : 0
                );
                setFilteredData(orders);
              }
            }
          }}
        >
          <Select.Item label="Date Ascending" value="Date Ascending" />
          <Select.Item label="Date Descending" value="Date Descending" />
          <Select.Item label="Priority Ascending" value="Priority Ascending" />
          <Select.Item
            label="Priority Descending"
            value="Priority Descending"
          />
          <Select.Item label="Status Ascending" value="Status Ascending" />
          <Select.Item label="Status Descending" value="Status Descending" />
        </Select>
      </View>
      <FlatList
        style={{ marginTop: 12 }}
        showsVerticalScrollIndicator={false}
        data={filteredData}
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
