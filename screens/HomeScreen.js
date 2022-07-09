import React from "react";
import { View, Text, SafeAreaView,StyleSheet,Platform } from "react-native";
import { ScrollView } from "react-native-gesture-handler";



export const HomeScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#191970", height: "100vh" }}>
      
       <View>
        <Text>Home</Text>
       </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});