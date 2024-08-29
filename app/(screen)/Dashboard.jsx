import { View, Text, ScrollView, StatusBar, ImageBackground, Image, TextInput, TouchableOpacity, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { frame1 } from '../../constants/image';



const forget = () => {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <SafeAreaView className="bg-[#E8F5E9] h-full w-full" >
            <ScrollView>


                <View className="flex items-center mt-5">
                    <Text className="text-2xl font-extrabold">Dashboard</Text>
                </View>
                <View className=" items-center  rounded-full mt-5">
                    <Image source={frame1} className="w-[100px] h-[100px] rounded-full" />
                </View>
                <View className="flex items-center mt-3">
                    <Text className="text-3xl font-extrabold">Vinothmani</Text>
                </View>
                <View className="flex items-center ">
                    <Text >ID:4568225</Text>
                </View>
                <View className="flex flex-row mt-10 justify-evenly   ">
                    <View className="border  items-center bg-white border-gray-200 shadow-2xl w-[170px] h-[100px] rounded-xl">
                        <View className="pt-3" ><FontAwesome color="green" size={28} name="clipboard" /></View>
                        <Text className="text-xl font-semibold ">Products</Text>
                        <Text className="font-light">listed</Text>
                    </View>
                    <View className="border items-center  bg-white border-gray-200 shadow-2xl  w-[170px] rounded-xl">
                        <View className="pt-2"><FontAwesome color="green" size={34} name="check-circle" /></View>
                        <Text className="text-xl font-semibold">Orders</Text>
                        <Text className="font-light">completed</Text>
                    </View>
                </View>
                <View className="m-5">
                    <Text className="font-extrabold text-2xl">Recent Activity</Text>
                </View>
                <View className="  flex-row  justify-start border items-center  bg-white border-white h-[60]">
                    <View className="pl-7">
                        <FontAwesome size={22} name="shopping-cart" />
                    </View>
                    <View className="pl-[60] flex-none h-[70] w-[250] pt-3">
                        <Text className="flex-none text-xl font-bold">Last Order </Text>
                        <Text className="text-[#595959]">order #155656 placed</Text>

                    </View>
                    <View className="pl-[50]  ">
                        <FontAwesome size={22} name='arrow-right' />
                    </View>
                </View>
                <View className=" flex-row  justify-start  items-center  bg-white h-[60]">
                    <View className="pl-7">
                        <FontAwesome size={22} name="shopping-cart" />
                    </View>
                    <View className="pl-[60] flex-none h-[70] w-[250] pt-3">
                        <Text className="flex-none text-xl  font-bold">Message</Text>
                        <Text className="text-[#595959]">New message from john </Text>

                    </View>
                    <View className="pl-[50]  ">
                        <FontAwesome size={22} name='arrow-right' />
                    </View>
                </View>

                <View className="mt-8">
                    <Text className="font-extrabold text-2xl pl-5">Review and feedback</Text>
                </View>
                <View className="flex flex-row mt-3 justify-evenly  ">
                    <View className="border  items-center bg-white border-gray-200 shadow-2xl w-[150px]  rounded">
                        <View className="pt-2" ><Image source={frame1} className="w-[100] h-[100]" /></View>
                        <Text className="text-1xl font-extrabold">Good quality</Text>
                        <Text className="text-xs">Loved the quick response</Text>
                        <Text className="pt-3">Rating : 5 start</Text>
                    </View>
                    <View className="border items-center  bg-white border-gray-200 shadow-2xl  w-[150px] rounded">
                        <View className="pt-2"><Image source={frame1} className="w-[100] h-[100]" /></View>
                        <Text className="text-1xl font-extrabold">Freash and organic</Text>
                        <Text className="text-xs">Friendly farmer</Text>
                        <Text className="pt-3">Rating : 5 star</Text>
                    </View>
                </View>

            </ScrollView>

        </SafeAreaView>
    )
}

export default forget