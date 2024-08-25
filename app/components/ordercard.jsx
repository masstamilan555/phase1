import { View, Text } from "react-native";
import React from "react";

const Ordercard = () => {
  return (
    <View className="bg-white border shadow-xl shadow-black w-full h-[135px] rounded-3xl mb-3 p-3">
      <Text className="text-2xl font-bold">Tomato</Text>
      <Text className="text-xl mt-3">Total Quantity : 5 kg</Text>
      <View className="flex flex-row justify-between">
        <Text className="text-xl mt-2 ">
          Price : <Text className="text-orange-400">₹40</Text>
        </Text>
        <Text className="text-xl mt-7 text-green-400">Delivered</Text>
      </View>
    </View>
  );
};

export default Ordercard;
