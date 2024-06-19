import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../Pages/Home";
import { Profile } from "../Pages/Profile";

export type TabsParametrosDaRota = {
  TabsHome: { name: string };
  TabsProfile: { name: string };
};

const Tab = createBottomTabNavigator();

export function BottomTabsRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabsHome" component={Home} />
      <Tab.Screen name="TabsProfile" component={Profile} />
    </Tab.Navigator>
  );
}
