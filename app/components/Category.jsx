import { View, Text, Image } from 'react-native'
import React from 'react'

import category from "../../assets/category1.jpg"
import { Link } from 'expo-router'

const Category = () => {
  return (
    <Link href="/product">
    <View className=" w-[180px] h-[250px]  rounded-3xl border flex flex-col items-center justify-center    border-cyan-400">
      <Image source={category} resizeMode="contain" className="w-[90%]  h-[100px] border   " />
      <Text className="text-xl font-semibold  ">Vegetables</Text>
    </View>
    </Link>
  )
}

export default Category