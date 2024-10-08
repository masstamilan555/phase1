import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Link, router } from "expo-router";
import { signupbg } from "../../constants/image";
import { useMemo, useState } from "react";
import { RadioGroup } from "react-native-radio-buttons-group";

export default function HomeTab() {
  const [selectedId, setSelectedId] = useState();

  const radioButtons = useMemo(
    () => [
      {
        id: "1", // acts as primary key, should be unique and non-empty string
        label: "Customer",
        value: "customer",
      },
      {
        id: "2",
        label: "Farmer",
        value: "farmer",
      },
    ],
    []
  );

  return (
    <SafeAreaView className="">
      <ScrollView className="h-full">
        <Image
          className="w-full h-[35vh] "
          source={signupbg}
          resizeMode="cotain"
        />
        <View className=" -mt-5">
          <View className="flex items-center border-t  border-[#CECECE] w-full h-[76vh]  rounded-t-[30px] bg-[#E8F5E9]">
            <Text className="text-3xl text-center font-pbold m-2">
              Create Account
            </Text>
            <View className="border  border-[#CECECE] font-pregular mt-5 rounded-2xl w-[90vw]">
              <TextInput
                className="h-10 pl-5 rounded-2xl"
                placeholder="Full Name"
                placeholderTextColor="#787878"
                backgroundColor="white"
                fontSize={18}
              />
            </View>
            <View className="border font-pregular border-[#CECECE]  mt-5 rounded-2xl w-[90vw] ">
              <TextInput
                className="h-10 pl-5 rounded-2xl"
                placeholder="Email Address"
                placeholderTextColor="#787878"
                backgroundColor="white"
                fontSize={18}
              />
            </View>
            <View className="border font-pregular  border-[#CECECE]  mt-5 rounded-2xl w-[90vw] ">
              <TextInput
                className="h-10 pl-5 rounded-2xl"
                placeholder="Phone Number"
                placeholderTextColor="#787878"
                backgroundColor="white"
                fontSize={18}
              />
            </View>
            <View className="border font-pregular border-[#CECECE]  mt-5 rounded-2xl w-[90vw] ">
              <TextInput
                className="h-10 pl-5 rounded-2xl"
                placeholder="Password"
                placeholderTextColor="#787878"
                backgroundColor="white"
                fontSize={18}
              />
            </View>
            <View className="border font-pregular border-[#CECECE]  mt-5 rounded-2xl w-[90vw]">
              <TextInput
                className="h-10 pl-5 rounded-2xl"
                placeholder="Confirm Password"
                placeholderTextColor="#787878"
                backgroundColor="white"
                fontSize={18}
              />
            </View>

            <View className="mt-3 font-pmedium ">
              <RadioGroup
              
                layout="row"
                radioButtons={radioButtons}
                onPress={setSelectedId}
                selectedId={selectedId}
                
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                router.replace("/forget");
              }}
              className="w-[70vw] h-10 px-4 mt-5 bg-[#07C158] rounded-full"
            >
              <View className="">
                <Text className="text-white text-2xl pt-2 font-extrabold text-center">
                  Next
                </Text>
              </View>
            </TouchableOpacity>
            <View className="p-5 font-pregular">
              <Text className="pr-5">
                Already have an account{" "}
                <Link
                  href="/signin"
                  className="underline text-orange-500 text-lg ml-5"
                >
                  Login
                </Link>
              </Text>
            </View>
          </View>
        </View>
        <StatusBar backgroundColor="green" style="light" />
      </ScrollView>
    </SafeAreaView>
  );
}
