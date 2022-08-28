import { createStackNavigator } from "@react-navigation/stack";
import Contacts from "../screens/contacts";
import CreateContact from "../screens/create-contact";
import CreateOrder from "../screens/create-order";
import EditOrder from "../screens/edit-order";
import Order from "../screens/order";
import Profile from "../screens/profile";

const Stack = createStackNavigator();

const CreateOrderStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Create Order Screen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Create Order Screen" component={CreateOrder} />
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Create Contact" component={CreateContact} />
      <Stack.Screen name="Edit Order" component={EditOrder} />
    </Stack.Navigator>
  );
};

export default CreateOrderStack;
