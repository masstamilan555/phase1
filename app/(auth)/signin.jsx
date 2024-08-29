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

import { Link, router } from "expo-router";
import { signinbg } from "../../constants/image";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeTab() {
  return (
    <SafeAreaView className="">
      <ScrollView className="h-full">
        <Image
          className="w-full  h-[35vh]"
          source={signinbg}
          resizeMode="cover"
        />
        <View className="-mt-4">
          <View className="flex items-center border-2 border-[#CECECE] w-full h-[70vh] rounded-[40px] bg-[#E8F5E9]">
            <Text className="text-3xl text-center font-bold m-2">
              Login Account
            </Text>

            <View className="mt-5 rounded-full w-[90vw] ">
              <Text className="text-2xl font-bold ">Email</Text>
              <TextInput
                className="h-[7vh] pl-5 shadow-lg border mt-2  border-[#CECECE] shadow-black rounded-full"
                placeholder="Enter Your Email"
                placeholderTextColor="black"
                backgroundColor="white"
                fontSize={18}
              />
            </View>

            <View className="mt-10 rounded-full w-[90vw]  ">
              <Text className="text-2xl font-bold ">Password</Text>
              <TextInput
                className="h-[7vh] pl-5 shadow-lg border mt-2  border-[#CECECE] shadow-black rounded-full"
                placeholder="Enter Your Password"
                placeholderTextColor="black"
                backgroundColor="white"
                fontSize={18}
              />
            </View>
            
              <Link href="/forget" className="ml-[60vw] mt-2 underline font-bold">Forgot Password ?</Link>
            

            <TouchableOpacity
              onPress={() => {
                router.replace("/home");
              }}
              className="w-[45vw] h-10 px-4 mt-20 bg-[#07C158] rounded-full"
            >
              <Text className="text-2xl font-extrabold text-center p-1">
                Login
              </Text>
            </TouchableOpacity>
            <View className="p-5 mt-10">
              <Text className="pr-5">
                Don't have an account{" "}
                <Link
                  href="/signup"
                  className="underline text-orange-500 text-lg "
                >
                  Signup
                </Link>
              </Text>
            </View>
          </View>
        </View>
        <StatusBar backgroundColor="#161622" style="light" />
      </ScrollView>
    </SafeAreaView>
  );
}
