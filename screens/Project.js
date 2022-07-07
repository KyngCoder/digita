import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { View, Image } from "react-native";

export const Project = () => {

    return (
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 8,
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
          <Image
            source=''
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
}

