import { createStackNavigator } from "@react-navigation/stack";
import AdditionalRegister from "../screens/additional-register";
import Login from "../screens/login";
import Register from "../screens/register";

const Stack = createStackNavigator();

const LandingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Additional Register" component={AdditionalRegister} />
    </Stack.Navigator>
  );
};

export default LandingStack;
