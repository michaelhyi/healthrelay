import { Dimensions, StyleSheet, Text, View } from "react-native";
import Layout from "../components/Layout";

const Splash = () => {
  return (
    <Layout noPadding>
      <View
        style={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
      >
        <View style={styles.icon} />
        <Text style={styles.text}>HealthRelay</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: (Dimensions.get("window").width * 75) / 428,
    height: (Dimensions.get("window").width * 75) / 428,
    backgroundColor: "#DDDDDD",
    borderRadius: (Dimensions.get("window").width * 12) / 428,
    marginBottom: (Dimensions.get("window").width * 16) / 428,
  },
  text: {
    fontFamily: "Poppins-Bold",
    color: "#386FA4",
    fontSize: (Dimensions.get("window").width * 36) / 428,
    marginBottom: (Dimensions.get("window").width * 24) / 428,
  },
});

export default Splash;
