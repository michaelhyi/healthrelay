import Layout from "../components/Layout";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import User from "../components/User";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../utils/styles";
import { format } from "date-fns";
import RecentOrdersSection from "../components/RecentOrdersSection";
import RecentContactsSection from "../components/RecentContactsSection";

const Home = () => {
  return (
    <Layout>
      <View style={styles.header_1}>
        <User />
        <TouchableOpacity style={{ marginLeft: "auto" }}>
          <Ionicons name="notifications" size={30} color={colors.blue_400} />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 36 }}>
        <Text style={styles.welcome}>Welcome Dr. Lee!</Text>
        <Text style={styles.date}>
          {format(new Date(), "EEEE MMMM do, yyyy p")}
        </Text>
      </View>
      <RecentOrdersSection />
      <RecentContactsSection />
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
