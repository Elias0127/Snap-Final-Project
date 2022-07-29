import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const MapScreen = () => {
  const data = [
    {
      image:
        "https://sdk.bitmoji.comhttps://images.bitmoji.com/3d/avatar/201714142-334308312_4-s1-v1.webp/render/panel/49490f4e-eabb-4cab-bcb6-69f361d66706-b04e0b03-724c-49a0-aed6-acaaa095e117-v1.png?transparent=1&palette=1",
      id: "1",
      latitude: 34.055699115698225,
      longitude: -118.24572452599948,
      name: "Elias",
    },
    {
      image:
        "https://sdk.bitmoji.com/render/panel/49490fhttps://images.bitmoji.com/3d/avatar/201714142-334308312_4-s1-v1.webp4e-eabb-4cab-bcb6-69f361d66706-349ae33a-71ac-4e93-aa23-6fea888cbce8-v1.png?transparent=1&palette=1",
      id: "2",
      latitude: 34.05220,
      longitude: -118.230,
      name: "Amanuel",
    },
    {
      image:
        "https://sdk.bitmoji.com/render/panel/49490f4e-eabb-4cab-bcb6-69f36https://images.bitmoji.com/3d/avatar/201714142-334308312_4-s1-v1.webp1d66706-36c5b152-0741-4b18-9b2d-2172a549e359-v1.png?transparent=1&palette=1",
      id: "3",
      latitude: 34.0520,
      longitude: -118.25630,
      name: "Elias",
    },
    
  ];

  return (
    <View style={{ marginTop: 30 }}>
      <MapView
        zoomEnabled={true}
        provider={PROVIDER_GOOGLE}
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 34.052235,
          longitude: -118.243683,
          latitudeDelta: 0.06,
          longitudeDelta: 0.015,
        }}
      >
        {/* {data.map((emoji, i) => (
          <Marker
            key={i}
            coordinate={{
              latitude: emoji.latitude,
              longitude: emoji.longitude,
            }}
            title="Snap Map"
            description={emoji.name}
            identifer="origin"
          >
            <Image source={{ uri: emoji.image }} />
          </Marker>
        ))} */}
        {data.map((emoji, i) => (
          <Marker
            key={i}
            title="Bangalore"
            description={"city"}
            coordinate={{
              latitude: parseFloat(emoji.latitude),
              longitude: parseFloat(emoji.longitude),
            }}
          >
            <Image
              source={{ uri: emoji.image }}
              style={{ width: 100, height: 100, resizeMode: "cover" }}
            />
          </Marker>
        ))}
      </MapView>
      <View
        style={{
          position: "absolute",
          bottom: 30,
          left: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#D8D8D8",
            width: 60,
            height: 60,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 70, height: 70, borderRadius: 35 }}
            source={{
              uri: "https://sdk.bitmojhttps://images.bitmoji.com/3d/avatar/201714142-334308312_4-s1-v1.webpi.com/render/panel/76c3b171-f0cf-4dd6-b91f-91bd86693f61-d8fa313e-d0e8-4d84-9769-a3238cf96fc0-v1.png?transparent=1&palette=1",
            }}
          />
          <Text
            style={{
              backgroundColor: "white",
              fontWeight: "bold",
              padding: 2,
              textAlign: "center",
              width: 90,
              borderRadius: 4,
            }}
          >
            My Bitmoji
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#D8D8D8",
            marginLeft: 100,
            width: 60,
            height: 60,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 70, height: 70, borderRadius: 35 }}
            source={{
              uri: "https://sdk.bitmohttps://images.bitmoji.com/3d/avatar/201714142-334308312_4-s1-v1.webpji.com/render/panel/395d53d1-7032-472e-9c34-fae7ebdae0e1-d8fa313e-d0e8-4d84-9769-a3238cf96fc0-v1.png?transparent=1&palette=1",
            }}
          />
          <Text
            style={{
              backgroundColor: "white",
              fontWeight: "bold",
              padding: 2,
              textAlign: "center",
              width: 90,
              borderRadius: 4,
            }}
          >
            Places
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#D8D8D8",
            width: 60,
            height: 60,
            borderRadius: 30,
            alignItems: "center",
            marginLeft: 80,
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              resizeMode: "cover",
            }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw21BoBj8deH0-mopG7ELCQv_gwz9Mzr3NyA&usqp=CAU",
            }}
          />
          <Text
            style={{
              backgroundColor: "white",
              fontWeight: "bold",
              padding: 2,
              textAlign: "center",
              width: 90,
              borderRadius: 4,
            }}
          >
            Friends
          </Text>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#B0B0B0",
            width: 34,
            height: 34,
            borderRadius: 17,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 34, height: 34, borderRadius: 17 }}
            source={{
              uri: "https://sdk.bitmoji.com/render/panel/76c3b171-f0cf-4dd6-b91f-91bd86693f61-d8fa313e-d0e8-4d84-9769-a3238cf96fc0-v1.png?transparent=1&palette=1",
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#B0B0B0",
            marginLeft: 10,
            width: 34,
            height: 34,
            borderRadius: 17,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather name="search" size={17} color="white" />
        </View>
        <View
          style={{
            backgroundColor: "#B0B0B0",
            marginLeft: 250,
            width: 34,
            height: 34,
            borderRadius: 17,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="settings" size={18} color="white" />
        </View>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});