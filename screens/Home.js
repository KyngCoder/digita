import React, { useState } from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();

import { Blogs } from "./Blogs";
import { Project } from "./Project";
import {HomeScreen} from './HomeScreen'

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator >
      <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Blogs" component={Blogs} />
        <Tab.Screen name="Projects" component={Project} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Home;
