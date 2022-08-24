import { Ionicons } from "@expo/vector-icons";
import { format } from "date-fns";
import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Layout from "../components/Layout";
import RecentContactsSection from "../components/RecentContactsSection";
import RecentOrdersSection from "../components/RecentOrdersSection";
import User from "../components/User";
import { useReadContactsQuery, useReadUserQuery } from "../generated/graphql";
import Context from "../utils/context";
import { colors } from "../utils/styles";
import Loading from "./loading";

interface Props {
  navigation: {
    navigate: (route: string, params?: { uuid: string }) => void;
  };
}

const Home: React.FC<Props> = ({ navigation }) => {
  const { user } = useContext(Context);
  const [{ data: userData, fetching: fetchingUserData }] = useReadUserQuery({
    variables: { uuid: user },
  });
  const [{ data: contacts, fetching: fetchingContacts }] = useReadContactsQuery(
    { variables: { uuid: user } }
  );

  if (fetchingUserData || fetchingContacts) return <Loading />;

  return (
    <Layout>
      <View style={styles.header_1}>
        <User
          firstName={userData!.readUser.doctor!.firstName}
          lastName={userData!.readUser.doctor!.lastName}
          profession={userData!.readUser.user.profession}
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
        <Text style={styles.welcome}>
          Welcome Dr. {userData?.readUser.doctor?.lastName}!
        </Text>
        <Text style={styles.date}>
          {format(new Date(), "EEEE MMMM do, yyyy p")}
        </Text>
      </View>
      <RecentOrdersSection
        profession={userData?.readUser.user.profession!}
        uuid={userData?.readUser.user.uuid!}
        navigation={navigation}
        data={userData?.readUser.doctor?.orders!}
      />
      <RecentContactsSection
        profession={userData?.readUser.user.profession!}
        uuid={userData?.readUser.user.uuid!}
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
