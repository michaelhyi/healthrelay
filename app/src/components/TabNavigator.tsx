import { AntDesign, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useContext } from "react";
import Settings from "../screens/settings";
import Context from "../utils/context";
import { colors } from "../utils/styles";
import CreateOrderStack from "./CreateOrderStack";
import HomeStack from "./HomeStack";
import ViewOrdersStack from "./ViewOrdersStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { user } = useContext(Context);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.blue_400,
      }}
    >
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
      {user.profession === "Radiologist" && (
        <Tab.Screen
          name="Create Order"
          component={CreateOrderStack}
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
      )}
      {user.profession === "Ordering Physician" && (
        <Tab.Screen
          name="View Orders"
          component={ViewOrdersStack}
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="folder1"
                size={25}
                color={focused ? colors.blue_400 : colors.gray}
              />
            ),
          }}
        />
      )}
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
