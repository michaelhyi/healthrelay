import { createStackNavigator } from "@react-navigation/stack";
import Contacts from "../screens/contacts";
import CreateContact from "../screens/create-contact";
import CreateOrder from "../screens/create-order";
import Order from "../screens/order";
import Profile from "../screens/profile";

const Stack = createStackNavigator();

const CreateOrderStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Create Order Screen" component={CreateOrder} />
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Create Contact" component={CreateContact} />
    </Stack.Navigator>
  );
};

export default CreateOrderStack;