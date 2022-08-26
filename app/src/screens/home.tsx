import { Ionicons } from "@expo/vector-icons";
import { format } from "date-fns";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Layout from "../components/Layout";
import RecentContactsSection from "../components/RecentContactsSection";
import RecentOrdersSection from "../components/RecentOrdersSection";
import User from "../components/User";
import { useReadContactsQuery, useReadOrdersQuery } from "../generated/graphql";
import Context from "../utils/context";
import { colors } from "../utils/styles";
import Loading from "./loading";

interface Props {
  navigation: {
    navigate: (route: string, params?: { uuid: string }) => void;
    goBack: () => void;
  };
}

const Home: React.FC<Props> = ({ navigation }) => {
  const { user } = useContext(Context);
  const [{ data: orders, fetching: fetchingOrders }] = useReadOrdersQuery({
    variables: { uuid: user.uuid, profession: user.profession, take: 4 },
  });
  const [{ data: contacts, fetching: fetchingContacts }] = useReadContactsQuery(
    {
      variables: { uuid: user.uuid, take: 3 },
    }
  );

  if (fetchingOrders || fetchingContacts) return <Loading />;

  return (
    <Layout>
      <View style={styles.header_1}>
        <User
          firstName={user.firstName}
          lastName={user.lastName}
          profession={user.profession}
          onPress={() => navigation.navigate("Profile", { uuid: user })}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Notifications")}
          style={{ marginLeft: "auto" }}
        >
          <Ionicons name="notifications" size={30} color={colors.blue_400} />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 36 }}>
        <Text style={styles.welcome}>Welcome Dr. {user.lastName}!</Text>
        <Text style={styles.date}>
          {format(new Date(), "EEEE MMMM do, yyyy p")}
        </Text>
      </View>
      <RecentOrdersSection
        profession={user.profession}
        uuid={user.uuid}
        navigation={navigation}
        data={orders?.readOrders}
      />
      <RecentContactsSection
        profession={user.profession}
        uuid={user.uuid}
        navigation={navigation}
        data={contacts?.readContacts!}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  header_1: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },

  welcome: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 28,
    color: colors.blue_500,
  },

  date: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: colors.blue_400,
  },
});

export default Home;
