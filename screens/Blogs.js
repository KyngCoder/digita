import React from 'react'


import {
  View,
  Image,
  SafeAreaView,
  Text,
  ScrollView,
  FlatList,
} from "react-native";


const imgs = [
  {
    id: 1,
    img: require("../assets/blog1.png"),
    constant:require('../assets/dev.png')
    
  },
  {
    id: 2,
    img: require("../assets/blog2.png"),
    constant:require('../assets/dev.png')
  },
  {
    id: 3,
    img: require("../assets/blog3.png"),
    constant:require('../assets/dev.png')
  },
  {
    id: 4,
    img: require("../assets/blog4.png"),
    constant:require('../assets/dev.png')
  },
 
];

const Item = ({ item }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 250,
        marginBottom: 20,
      }}
    >
      <Image
        source={item.img}
        resizeMode="cover"
        style={{
          width: "100%",
          height: "100%",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          position:"relative"
        }}
      />
      <View style={{display:"flex",position:"absolute",bottom:10, left:10}}>
      <Image
      source={item.constant}
      resizeMode="cover"
      style={{width:40,height:40,borderRadius:"50%"}}
       />
       <Text>by andrew</Text>
      </View>
    </View>
  );
};

export const Blogs = () => {
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
 
    <FlatList
        style={{ marginBottom: 20 }}
        data={imgs}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
 
     
    </View>
  </SafeAreaView>
  )
}
