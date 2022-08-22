import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import Container from "./components/Container";
import LandingStack from "./components/LandingStack";
import Layout from "./components/Layout";
import TabNavigator from "./components/TabNavigator";
import Splash from "./screens/splash";
import Context from "./utils/context";
import { loadFonts } from "./utils/loadFonts";
import { sleep } from "./utils/sleep";

const App = () => {
  let [fontsLoaded] = loadFonts();
  const [user, setUser] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        setUser(JSON.parse(user));
      }

      await sleep(2000).then(() => setLoading(false));
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
    <Container>
      <Context.Provider value={{ user, setUser }}>
        {user ? <TabNavigator /> : <LandingStack />}
      </Context.Provider>
    </Container>
  );
};

export default App;
