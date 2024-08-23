import { View, Text, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">

    <ScrollView
      contentContainerStyle={{
        height: "100%",
      }}
    >
      <View className="w-full flex justify-center items-center h-full px-4">
       

       

        <View className="relative mt-5">
          <Text className="text-3xl text-white font-bold text-center">
            Discover Endless{"\n"}
            Possibilities with{" "}
            <Text className="text-secondary-200">Aora</Text>
          </Text>

        </View>

        <Text onPress={()=>{
            router.push("/signin")
        }} className="text-sm font-pregular text-black mt-7 text-center">
          Where Creativity Meets Innovation: Embark on a Journey of Limitless
          Exploration with Aora
        </Text>

       
      </View>
    </ScrollView>

    <StatusBar backgroundColor="#161622" style="light" />
  </SafeAreaView>
  )
}

export default index