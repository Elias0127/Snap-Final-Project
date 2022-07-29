import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import Map1 from "../screens/Map1";
import Map2 from "../screens/Map2";
import Map3 from "../screens/Map3";
import Map4 from "../screens/Map4";
import { StatusBar } from "expo-status-bar";


const Tab = createBottomTabNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <StatusBar hidden = {false}/>
      <Tab.Navigator
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: '#694fad' }}
        initialRouteName="Camera"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;
            let iconColor;

            if (route.name == "Map 1") {
              iconName = "ios-location-outline";
              iconColor = focused ? "green" : "white";
            } else if (route.name === "Map 2") {
              iconName = "ios-location-outline";
              iconColor = focused ? "yellow" : "white";
            } else if (route.name === "Map 3") {
              iconName = "ios-location-outline";
              iconColor = focused ? "purple" : "white";
            } else if (route.name === "Map 4") {
              iconName = "ios-location-outline";
              iconColor = focused ? "red" : "white";
            }
            return <Ionicons name={iconName} size={size} color={iconColor} />;
          },
          tabBarStyle: {  backgroundColor: "#000",
                          position: 'absolute',    
                          overflow: 'hidden', 
                          borderRadius: 50 
                        }
        })}
      >
        <Tab.Screen name="Map 1" component={Map1} />
        <Tab.Screen
          name="Map 2"
          component={Map2}
        />
        <Tab.Screen
          name="Map 3"
          component={Map3}
        />
        <Tab.Screen
          name="Map 4"
          component={Map4}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}