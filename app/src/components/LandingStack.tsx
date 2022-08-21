import { createStackNavigator } from "@react-navigation/stack";
import Register from "../screens/Register";
import Login from "../screens/Login";

const Stack = createStackNavigator();

const LandingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default LandingStack;
