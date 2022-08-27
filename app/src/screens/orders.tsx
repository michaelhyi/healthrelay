import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import BackButton from "../components/BackButton";
import Layout from "../components/Layout";
import OrderCard from "../components/OrderCard";
import Search from "../components/Search";
import { useReadOrdersQuery } from "../generated/graphql";
import Loading from "./loading";

interface Props {
  route: {
    params: {
      id: number;
      profession: string;
    };
  };
  navigation: {
    navigate: (route: string) => void;
    goBack: () => void;
  };
}

const Orders: React.FC<Props> = ({ route, navigation }) => {
  const { id, profession } = route.params;
  const [{ data, fetching }] = useReadOrdersQuery({
    variables: {
      id,
      profession,
    },
  });

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<any>(null);

  useEffect(() => {
    if (!fetching && typeof data?.readOrders !== "undefined") {
      setFilteredData(data.readOrders);
    }
  }, [data, fetching]);

  const filter = (text: string) => {
    if (text.length === 0) setSearch("");
    else if (text && data) {
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

  if (fetching) return <Loading />;

  return (
    <Layout>
      <BackButton navigation={navigation} />
      <Search value={search} onChangeText={(text) => filter(text)} />
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
