import { createStackNavigator } from "@react-navigation/stack";
import EditOrder from "../screens/edit-order";
import Order from "../screens/order";
import Orders from "../screens/orders";

const Stack = createStackNavigator();

const ViewOrdersStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="View Orders Screen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="View Orders Screen" component={Orders} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Edit Order" component={EditOrder} />
    </Stack.Navigator>
  );
};

export default ViewOrdersStack;
