import {
  View,
  Text,
  ImageBackground,
  Image,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import rootBg from "../../assets/Rootbg.png";
import bullock from "../../assets/bullock.webp";
import { useState } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function HomeTab() {

  return (
    <SafeAreaView className="">
      <ImageBackground
        className="w-full h-full"
        source={rootBg}
        resizeMode="cover"
      >
        <View className="flex justify-center items-center mt-[40px]">
          <Image source={bullock} resizeMode="contain" className="w-40 h-40" />
        </View>

        <Text className="text-3xl font-bold text-center mt-[-20px]">Profile Management</Text>
        

        <Text className="text-xl text-gray-400 mt-7 ml-10">General</Text>
        <View className="flex flex-col mt-3 ml-[-38px] ">
          <View className="flex flex-row items-center justify-center"> 
            <FontAwesome size={22} name="lock" />
          <Text className="text-xl ml-4">Change password</Text>
          </View>
        </View>
        
        <Text className="text-xl text-gray-400 mt-7 ml-10">Others</Text>
      </ImageBackground>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>

  );
}