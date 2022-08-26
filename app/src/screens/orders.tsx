import React from "react";
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

  if (fetching) return <Loading />;

  return (
    <Layout>
      <BackButton navigation={navigation} />
      <Search />
      <FlatList
        style={{ marginTop: 12 }}
        showsVerticalScrollIndicator={false}
        data={data?.readOrders}
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
