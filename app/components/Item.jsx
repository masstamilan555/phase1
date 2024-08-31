import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { useNavigation } from "@react-navigation/native";

const Item = ({ name, url, price, quantity ,productId }) => {
 
  const navigation =useNavigation()

  return (
    <TouchableOpacity onPress={()=>{
      navigation.navigate('product-detail',[productId])

    }} className="mb-1 bg-[#A5D6A7] rounded-2xl ">
      <View className="w-[90vw] h-[100px] p-2 flex flex-row justify-between ">
        <View className="p-1">
          <Text className="text-black text-xl font-pbold ">{name}</Text>
          <Text className="text-[#FF7506] text-md font-pmedium">
            Quantity: {quantity} kg
          </Text>
          <Text className="text-[#0E6507] text-lg font-pregular">
            Price: ₹{price} <Text className="text-black text-lg">per (Kg)</Text>
          </Text>
        </View>
        <View>
          <Image
            source={{ uri: url }}
            className="w-[20vw] h-[10vh] rounded-full"
            resizeMode="cover" 
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;