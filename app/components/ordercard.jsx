import { View, Text } from "react-native";
import React from "react";

const Ordercard = () => {
  return (
    <View className="bg-[#A5D6A7] border shadow-xl shadow-black w-full h-[135px] rounded-3xl mb-3 p-4">
      <Text className="text-2xl font-pmedium ">Tomato</Text>
      <Text className="text-md text-[#696868] font-pmedium mt-3">Total Quantity : 5 kg</Text>
      <View className="flex flex-row justify-between">
        <Text className="text-xl mt-2  font-pmedium">
          Price : <Text className="text-orange-400 "> ₹40</Text>
        </Text>
        <Text className="text-xl mt-5 text-[#058305] font-pmedium">Delivered</Text>
      </View>
    </View>
  );
};

export default Ordercard;
