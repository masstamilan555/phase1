import {
  View,
  Text,
  ImageBackground,
  Image,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, router } from "expo-router";

export default function HomeTab() {

  return (
    <SafeAreaView className="bg-[#E8F5E9] w-full h-full">
      
  

        <Text className="text-2xl font-extrabold text-center mt-20">Profile Management</Text>


        <View className="flex  ml-10 mr-10">
          <Text className="text-xl text-gray-400 mt-7">General</Text>
          <View className="flex items-start ml-4 ">
            <View className="flex flex-col  mt-6 ">
              <View className="flex flex-row items-center justify-center">
                <FontAwesome size={22} name="user-o" />
                <Link href="/Dashboard" className="text-xl ml-6">Personal Details</Link>
              </View>
            </View>
            <View className="flex flex-col mt-6 ">
              <View className="flex flex-row items-center justify-center">
                <FontAwesome size={22} name="lock" />
                <Text className="text-xl ml-6">Change password</Text>
              </View>
            </View>
            <View className="flex flex-col mt-6  ">
              <View className="flex flex-row items-center justify-center">
                <FontAwesome size={22} name="globe" />
                <Text className="text-xl ml-6">Set Language</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex ml-10 mr-10 ">
          <Text className="text-xl text-gray-400 mt-20">Others</Text>
          <View className="flex items-start  ml-4 ">
            <View className="flex flex-col  mt-6  ">
              <View className="flex flex-row items-center justify-center">
                <FontAwesome size={22} name="question" />
                <Text className="text-xl ml-6"> Help</Text>
              </View>
            </View>
            <View className="flex flex-col mt-6 ">
              <View className="flex flex-row items-center justify-center">
                <FontAwesome size={22} name="phone" />
                <Text className="text-xl ml-6">Contact Us</Text>
              </View>
            </View>
            <View className="flex flex-col mt-6  ">
              <View className="flex flex-row items-center justify-center">
                <FontAwesome size={22} name="shield" />
                <Text className="text-xl ml-6">Privacy Policy</Text>
              </View>
            </View>
            <View className="flex flex-col mt-6 ">
              <View  className="flex flex-row items-center justify-center">
                <FontAwesome size={22} name="sign-out" />
                <Text onPress={()=>router.replace("/signin")} className="text-xl ml-6">Logout</Text>
              </View>
            </View>
          </View>
          

        </View>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>

  );
}