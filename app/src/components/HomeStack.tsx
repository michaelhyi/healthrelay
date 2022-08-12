import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Profile from "../screens/profile";
import Notifications from "../screens/notifications";
import Orders from "../screens/orders";
import Contacts from "../screens/contacts";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Contacts" component={Contacts} />
    </Stack.Navigator>
  );
};

export default HomeStack;
