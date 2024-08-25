import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignInBG from "../../assets/signinbg.jpg";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link } from "expo-router";
import { router } from "expo-router";

export default function Tab() {
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        className="w-full h-full"
        source={SignInBG}
        resizeMode="cover"
      >
        <View className="pt-[40vh]">
          <View>
            <Text className="text-2xl font-extrabold pl-5">Email</Text>
          </View>
          <View className="border-2 border-[#7aebeb] mt-5 rounded-2xl  mx-10">
            <TextInput
              className="h-10 pl-5"
              placeholder="Enter Mail ID"
            />
          </View>
          <View>
            <Text className="text-2xl font-extrabold mt-5 pl-5">Password</Text>
          </View>
          <View className="border-2 border-[#7aebeb] mt-5 rounded-2xl  mx-10">
            <TextInput
              className="h-10 pl-5"
              placeholder="Enter Password"
            />
          </View>
          <View>
            <Text className="underline font-bold mt-5 pl-[240px] text-black">
              Forgot Password?
            </Text>
          </View>

          <View className="flex items-center mt-[100px]">
            <TouchableOpacity
              onPress={() => {
                router.replace("/home");
              }}
              className="w-[80vw] h-10 px-4 mt-5 bg-[#66D4E7] rounded-full"
            >
              <View className="flex flex-row justify-end">
                <Text className="text-2xl pt-2 font-extrabold text-center pr-[110px]">
                  LOGIN
                </Text>
              </View>
            </TouchableOpacity>
            <View className="p-5">
              <Text className="pr-5">
                Don't have an account{" "}
                <Link
                  href="/signup"
                  className="underline text-orange-500 text-lg ml-5"
                >
                  sign up
                </Link>
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
