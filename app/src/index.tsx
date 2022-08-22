import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import Container from "./components/Container";
import LandingStack from "./components/LandingStack";
import Layout from "./components/Layout";
import TabNavigator from "./components/TabNavigator";
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
    <Container>
      {/* <LandingStack /> */}
      <TabNavigator />
    </Container>
  );
};

export default App;
