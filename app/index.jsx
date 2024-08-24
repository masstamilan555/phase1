import { View, Text, ScrollView, StatusBar, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';


import rootBg from "../assets/rootbg.png";
import farmerLogo from "../assets/farmer-logo.jpg"
import bullock from "../assets/bullock.webp";


const index = () => {
  return (
    <SafeAreaView className="">
      <ImageBackground
        className="w-full h-full"
        source={rootBg}
        resizeMode="cover"
      >
        <View className="flex justify-center items-center mt-[40px]  ">
          <Image source={bullock} resizeMode="contain" className="w-40 h-40" />
        </View>

        <Text className="text-3xl text-[#83A4D4] font-bold text-center">Welcome to fresh farm</Text>

        <View className="flex items-center rounded-xl   ">
          <Image source={farmerLogo} resizeMode="contain" className="w-[80vw] h-[50vh]" />

        </View>
      
        <View className="flex items-center " >
          <TouchableOpacity onPress={()=>{
            router.push("/signin")
          }} className="w-[80vw] h-10 px-4 mt-5 bg-[#66D4E7] rounded-full">
            <View className="flex flex-row justify-end">
            <Text className=" text-2xl font-extrabold text-center mr-[60px] pt-1">Get Started</Text>
            <View className="mt-2">
            <FontAwesome size={28}  name="arrow-right" />
            </View>
            </View>
            
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  )
}

export default index