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
      
  

        <Text className="text-2xl font-pbold text-center mt-10">Profile Management</Text>


        <View className="flex  ml-10 mr-10">
          <Text className="text-xl text-gray-400 mt-16 font-pmedium">General</Text>
          <View className="flex items-start ml-4 ">
            <View className="flex flex-col  mt-6 ">
              <View className="flex flex-row items-center justify-center">
                <FontAwesome size={22} name="user-o" />
                <Link href="/Dashboard" className="text-lg font-pregular ml-6">Personal Details</Link>
              </View>
            </View>
            <View className="flex flex-col mt-6 ">
              <View className="flex flex-row items-center justify-center">
                <FontAwesome size={22} name="lock" />
                <Text className="text-lg ml-6 font-pregular">Change password</Text>
              </View>
            </View>
            <View className="flex flex-col mt-6  ">
              <View className="flex flex-row items-center justify-center">
                <FontAwesome size={22} name="globe" />
                <Text className="text-lg ml-6 font-pregular">Set Language</Text>
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
                <Text className="text-lg ml-6 font-pregular"> Help</Text>
              </View>
            </View>
            <View className="flex flex-col mt-6 ">
              <View className="flex flex-row items-center justify-center">
                <FontAwesome size={22} name="phone" />
                <Text className="text-lg ml-6 font-pregular">Contact Us</Text>
              </View>
            </View>
            <View className="flex flex-col mt-6  ">
              <View className="flex flex-row items-center justify-center">
                <FontAwesome size={22} name="shield" />
                <Text className="text-lg ml-6 font-pregular">Privacy Policy</Text>
              </View>
            </View>
            <View className="flex flex-col mt-6 ">
              <View  className="flex flex-row items-center justify-center">
                <FontAwesome size={22} name="sign-out" />
                <Text onPress={()=>router.replace("/signin")} className="text-lg ml-6 font-pregular">Logout</Text>
              </View>
            </View>
          </View>
          

        </View>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>

  );
}