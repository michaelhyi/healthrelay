import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import LandingStack from "./components/LandingStack";
import Layout from "./components/Layout";
import Splash from "./screens/splash";
import { loadFonts } from "./utils/loadFonts";
import { sleep } from "./utils/sleep";

const App = () => {
  let [fontsLoaded] = loadFonts();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      await sleep(1000);
      setLoading(false);
    })();
  }, []);

  if (!fontsLoaded) {
    return (
      <Layout>
        <ActivityIndicator
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </Layout>
    );
  }

  if (loading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <LandingStack />
    </NavigationContainer>
  );
};

export default App;
