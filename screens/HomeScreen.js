import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import intro from "../assets/Digita Global Service Reel.mp4";

export const HomeScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#191970", height: "100vh" }}>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          marginBottom: 20,
          margin: 10,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 250,
          }}
        >
          <Text>Home Screen</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
