import { Ionicons } from "@expo/vector-icons";
import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Layout from "../components/Layout";
import RecentContactsSection from "../components/RecentContactsSection";
import RecentOrdersSection from "../components/RecentOrdersSection";
import User from "../components/User";
import { useReadOrdersQuery } from "../generated/graphql";
import Context from "../utils/context";
import { colors } from "../utils/styles";
import Loading from "./loading";

interface Props {
  navigation: {
    navigate: (route: string, params?: { id: number }) => void;
    goBack: () => void;
  };
}

const Home: React.FC<Props> = ({ navigation }) => {
  const { user } = useContext(Context);
  const [{ data, fetching }] = useReadOrdersQuery({
    variables: { id: user.id, profession: user.profession },
  });
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<any>(null);

  useEffect(() => {
    if (!fetching && data) {
      let orders = data.readOrders;
      orders.sort((a, b) =>
        a.createdAt < b.createdAt ? 1 : b.createdAt < a.createdAt ? -1 : 0
      );
      orders = orders.slice(0, 4);

      setOrders(orders);
      setLoading(false);
    }
  }, [data, fetching]);

  if (fetching || loading) return <Loading />;

  return (
    <Layout>
      <View style={styles.header_1}>
        <User
          firstName={user.firstName}
          lastName={user.lastName}
          profession={user.profession}
          onPress={() => navigation.navigate("Profile", { id: user.id })}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Notifications")}
          style={{ marginLeft: "auto" }}
        >
          <Ionicons
            name="notifications"
            size={(Dimensions.get("window").width * 30) / 428}
            color={colors.blue_400}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: (Dimensions.get("window").width * 36) / 428 }}>
        <Text style={styles.welcome}>Welcome Dr. {user.lastName}!</Text>
        <Text style={styles.date}>
          {format(new Date(), "EEEE MMMM do, yyyy p")}
        </Text>
      </View>
      <RecentOrdersSection
        profession={user.profession}
        id={user.id}
        navigation={navigation}
        data={data?.readOrders!}
      />
      <RecentContactsSection
        profession={user.profession}
        id={user.id}
        navigation={navigation}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  header_1: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: (Dimensions.get("window").width * 24) / 428,
  },

  welcome: {
    fontFamily: "Poppins-SemiBold",
    fontSize: (Dimensions.get("window").width * 28) / 428,
    color: colors.blue_500,
  },

  date: {
    fontFamily: "Poppins-Regular",
    fontSize: (Dimensions.get("window").width * 14) / 428,
    color: colors.blue_400,
  },
});

export default Home;
