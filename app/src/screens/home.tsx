import { Ionicons } from "@expo/vector-icons";
import { format } from "date-fns";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Layout from "../components/Layout";
import RecentContactsSection from "../components/RecentContactsSection";
import RecentOrdersSection from "../components/RecentOrdersSection";
import User from "../components/User";
import { useReadUserQuery } from "../generated/graphql";
import Context from "../utils/context";
import { colors } from "../utils/styles";
import Loading from "./loading";

interface Props {
  navigation: {
    navigate: (route: string, params?: { id: number }) => void;
  };
}

const Home: React.FC<Props> = ({ navigation }) => {
  const { user } = useContext(Context);
  const [{ data, fetching }] = useReadUserQuery({ variables: { id: user } });

  if (fetching) return <Loading />;

  return (
    <Layout>
      <View style={styles.header_1}>
        <User
          firstName={data!.readUser.doctor!.firstName}
          lastName={data!.readUser.doctor!.lastName}
          profession={data!.readUser.user.profession}
          onPress={() => navigation.navigate("Profile", { id: user })}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Notifications")}
          style={{ marginLeft: "auto" }}
        >
          <Ionicons name="notifications" size={30} color={colors.blue_400} />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 36 }}>
        <Text style={styles.welcome}>
          Welcome Dr. {data?.readUser.doctor?.lastName}!
        </Text>
        <Text style={styles.date}>
          {format(new Date(), "EEEE MMMM do, yyyy p")}
        </Text>
      </View>
      <RecentOrdersSection
        profession={data?.readUser.user.profession!}
        uuid={data?.readUser.user.uuid!}
        navigation={navigation}
        data={data?.readUser.doctor?.orders!}
      />
      <RecentContactsSection
        profession={data?.readUser.user.profession!}
        uuid={data?.readUser.user.uuid!}
        navigation={navigation}
        data={data?.readUser.doctor?.contacts!}
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
