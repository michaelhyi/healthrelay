import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { colors } from "../utils/styles";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={25}
              color={focused ? colors.blue_400 : colors.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Create Order"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="plus"
              size={25}
              color={focused ? colors.blue_400 : colors.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="settings"
              size={25}
              color={focused ? colors.blue_400 : colors.gray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;