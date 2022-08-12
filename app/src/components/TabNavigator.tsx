import { AntDesign, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreateOrder from "../screens/create-order";
import Settings from "../screens/settings";
import { colors } from "../utils/styles";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
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
        component={CreateOrder}
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
        component={Settings}
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
