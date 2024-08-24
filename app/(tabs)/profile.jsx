import {
  View,
  Text,
  ImageBackground,
  Image,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import rootBg from "../../assets/rootbg.png";
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


        <View className="flex  ml-10 mr-10">
          <Text className="text-xl text-gray-400 mt-7">General</Text>
          <View className="flex items-start ml-4 ">
            <View className="flex flex-col  mt-5 ">
              <View className="flex flex-row items-center justify-center">
                <FontAwesome size={22} name="user-o" />
                <Text className="text-xl ml-6">Profile</Text>
              </View>
            </View>
            <View className="flex flex-col mt-5 ">
              <View className="flex flex-row items-center justify-center">
                <FontAwesome size={22} name="lock" />
                <Text className="text-xl ml-6">Change password</Text>
              </View>
            </View>
            <View className="flex flex-col mt-5  ">
              <View className="flex flex-row items-center justify-center">
                <FontAwesome size={22} name="globe" />
                <Text className="text-xl ml-6">Set Language</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex ml-10 mr-10 ">
          <Text className="text-xl text-gray-400 mt-5">Others</Text>
          <View className="flex items-start ml-4 ">
            <View className="flex flex-col  mt-5  ">
              <View className="flex flex-row items-center justify-center">
                <FontAwesome size={22} name="question" />
                <Text className="text-xl ml-6">Help</Text>
              </View>
            </View>
            <View className="flex flex-col mt-5 ">
              <View className="flex flex-row items-center justify-center">
                <FontAwesome size={22} name="phone" />
                <Text className="text-xl ml-6">Contact Us</Text>
              </View>
            </View>
            <View className="flex flex-col mt-5  ">
              <View className="flex flex-row items-center justify-center">
                <FontAwesome size={22} name="shield" />
                <Text className="text-xl ml-6">Privacy Policy</Text>
              </View>
            </View>
            <View className="flex flex-col mt-5 ">
              <View className="flex flex-row items-center justify-center">
                <FontAwesome size={22} name="sign-out" />
                <Text className="text-xl ml-6">Logout</Text>
              </View>
            </View>
          </View>
          

        </View>
      </ImageBackground>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>

  );
}