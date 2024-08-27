import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, router } from "expo-router";
import { signupbg } from "../../constants/image";

export default function HomeTab() {
  return (
    <SafeAreaView className="">
      <ImageBackground
        className="w-full h-full"
        source={signupbg}
        resizeMode="cover"
      >
        <View className=" mt-[30vh]">
          <View className="flex items-center border-2 border-[#CECECE] w-full h-[70vh] rounded-[40px] bg-[#E8F5E9]">
            <Text className="text-3xl text-center font-bold m-2">
              Create Account
            </Text>
            <View className="border  border-[#CECECE]  mt-5 rounded-2xl w-[90vw]">
              <TextInput
                className="h-10 pl-5 rounded-2xl"
                placeholder="Full Name"
                placeholderTextColor="black"
                backgroundColor="white"
                fontSize={18}
              />
            </View>
            <View className="border  border-[#CECECE]  mt-5 rounded-2xl w-[90vw] ">
              <TextInput
                className="h-10 pl-5 rounded-2xl"
                placeholder="Email Address"
                placeholderTextColor="black"
                backgroundColor="white"
                fontSize={18}

              />
            </View>
            <View className="border  border-[#CECECE]  mt-5 rounded-2xl w-[90vw] ">
              <TextInput
                className="h-10 pl-5 rounded-2xl"
                placeholder="Phone Number"
                placeholderTextColor="black"
                backgroundColor="white"
                fontSize={18}

              />
            </View>
            <View className="border  border-[#CECECE]  mt-5 rounded-2xl w-[90vw] ">
              <TextInput
                className="h-10 pl-5 rounded-2xl"
                placeholder="Password"
                placeholderTextColor="black"
                backgroundColor="white"
                fontSize={18}

              />
            </View>
            <View className="border  border-[#CECECE]  mt-5 rounded-2xl w-[90vw]">
              <TextInput
                className="h-10 pl-5 rounded-2xl"
                placeholder="Confirm Password"
                placeholderTextColor="black"
                backgroundColor="white"
                fontSize={18}

              />
            </View>
            <Text className="text-3xl">Farmer or Customer beta</Text>
            <TouchableOpacity
              onPress={() => {
                router.replace("/home");
              }}
              className="w-[80vw] h-10 px-4 mt-5 bg-[#07C158] rounded-full"
            >
              <View className="flex flex-row justify-end">
                <Text className="text-2xl pt-2 font-extrabold text-center pr-[110px]">
                  Signup
                </Text>
              </View>
            </TouchableOpacity>
            <View className="p-5">
              <Text className="pr-5">
                Already have an account{" "}
                <Link
                  href="/signup"
                  className="underline text-orange-500 text-lg ml-5"
                >
                  Login
                </Link>
              </Text>
            </View>
          </View>
          
        </View>
      </ImageBackground>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
