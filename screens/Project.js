import React from "react";
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
    img: require("../assets/usain.png"),
  },
  {
    id: 2,
    img: require("../assets/uwi.png"),
  },
  {
    id: 3,
    img: require("../assets/arbit.png"),
  },
  {
    id: 4,
    img: require("../assets/bank.png"),
  },
  {
    id: 5,
    img: require("../assets/mcdonald.png"),
  },
];

const Item = ({ item }) => {
  return (
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
        }}
      />
    </View>
    </View>
  );
};

export const Project = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#191970", height: "100vh" }}>
      
   
      <FlatList
          style={{ marginBottom: 20 }}
          data={imgs}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
   
       
     
    </SafeAreaView>
  );
};
