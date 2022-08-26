import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import Container from "./components/Container";
import LandingStack from "./components/LandingStack";
import TabNavigator from "./components/TabNavigator";
import Loading from "./screens/loading";
import Splash from "./screens/splash";
import Context from "./utils/context";
import { loadFonts } from "./utils/loadFonts";
import { sleep } from "./utils/sleep";

const App = () => {
  let [fontsLoaded] = loadFonts();
  const [user, setUser] = useState<{
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    profession: string;
    organization: string;
    phone: string;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [contact, setContact] = useState<null | {
    firstName: string;
    lastName: string;
    profession: string;
  }>(null);

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
    return <Loading />;
  }

  if (loading) {
    return <Splash />;
  }

  return (
    <Container>
      <Context.Provider value={{ user, setUser, contact, setContact }}>
        {user ? <TabNavigator /> : <LandingStack />}
      </Context.Provider>
    </Container>
  );
};

export default App;
