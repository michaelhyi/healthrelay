import { createStackNavigator } from "@react-navigation/stack";
import Contacts from "../screens/contacts";
import CreateContact from "../screens/create-contact";
import EditOrder from "../screens/edit-order";
import EditProfile from "../screens/edit-profile";
import Home from "../screens/home";
import Notifications from "../screens/notifications";
import Order from "../screens/order";
import Orders from "../screens/orders";
import Profile from "../screens/profile";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home Screen" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Create Contact" component={CreateContact} />
      <Stack.Screen name="Edit Profile" component={EditProfile} />
      <Stack.Screen name="Edit Order" component={EditOrder} />
    </Stack.Navigator>
  );
};

export default HomeStack;
