import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const signin = () => {
  return (
    <SafeAreaView>
        <View className="h-full w-full bg-white">
        <Text onPress={()=>
            router.replace("/home")
        } className=" text-3xl text-black ">Sign in</Text>
        <Text className="text-black">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut soluta officia fuga perferendis dolorem? At harum quasi id optio quia earum a maxime, ut neque repudiandae laudantium. Tenetur, dolorum ut!
        </Text>
        </View>
    </SafeAreaView> )
}

export default signin