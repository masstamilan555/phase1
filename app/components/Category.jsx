import { View, Text, Image } from 'react-native'
import React from 'react'

import { Link } from 'expo-router'

const Category = (prop) => {
  
  return (
    <Link href="/product">
    <View className=" w-[180px] h-[180px] rounded-3xl border flex flex-col items-center justify-center  border-[#A9A5A5]">
      <Image source={prop.img} resizeMode="contain" className="w-full  h-[100px] border   " />
      <Text className="text-xl font-semibold  ">{prop.name}</Text>
    </View>
    </Link>
  )
}

export default Category




