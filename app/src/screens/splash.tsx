import { StyleSheet, Text, View } from "react-native";
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
    width: 75,
    height: 75,
    backgroundColor: "#DDDDDD",
    borderRadius: 12,
  },

  text: {
    fontFamily: "Poppins-Bold",
    color: "#386FA4",
    fontSize: 24,
    marginTop: 24,
  },
});

export default Splash;
