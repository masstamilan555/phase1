import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useNavigation, useRouter } from "expo-router";

const Item = ({ name, url, price, quantity ,productId }) => {
 
  const navigation =useNavigation()

  return (
    <TouchableOpacity onPress={()=>{
      navigation.navigate('product-detail',{...productId})

    }} className="mb-1 bg-[#F2E7B2] rounded-2xl ">
      <View className="w-[90vw] h-[100px] p-3 flex flex-row justify-between ">
        <View>
          <Text className="text-black text-2xl font-extrabold ">{name}</Text>
          <Text className="text-[#FF7506] text-xl">
            Quantity: {quantity} kg
          </Text>
          <Text className="text-[#0E6507] text-xl">
            Price: ₹{price} <Text className="text-black text-lg">per (KG)</Text>
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