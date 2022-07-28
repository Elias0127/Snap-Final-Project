import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "../screens/HomeScreen";
import Education from "../screens/Education";
import MapTab from "../screens/MapTab";
import Help from "../screens/Help";
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
        <Tab.Screen name="Map 1" component={MapTab} />
        <Tab.Screen
          name="Map 2"
          component={HomeScreen}
        />
        <Tab.Screen
          name="Map 3"
          component={Education}
        />
        <Tab.Screen
          name="Map 4"
          component={Help}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}