import { View, Text, ScrollView, StatusBar, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { getstarted } from '../constants/image';


const index = () => {
  return (
    <SafeAreaView className="">
      <ImageBackground
        className="w-full h-full"
        source={getstarted}
        resizeMode="cover"
      >

        <Text className="text-3xl mt-10 text-white font-bold text-center font-pbold">Welcome To Fresh Farm</Text>



        <View className="flex items-center justify-end " >
          <TouchableOpacity onPress={() => {
            router.push("/signin")
          }} className="w-[60vw] h-10 px-4 mt-[80vh] bg-[#07C158] rounded-full">
            <View className="flex flex-row justify-end">
              <Text className=" text-2xl font-extrabold text-center mr-[20px] pt-1 text-white font-pbold">Get Started</Text>
              <View className="p-3 pr-0 flex flex-row">
                <FontAwesome size={18} name="chevron-right" />
                <FontAwesome size={18} name="chevron-right" />
              </View>
            </View>

          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar backgroundColor="green" style="light" />
    </SafeAreaView>
  )
}

export default index