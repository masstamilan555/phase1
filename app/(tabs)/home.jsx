import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    StatusBar,
    TextInput,
  } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  
  import rootBg from "../../assets/Rootbg.png";
  import bullock from "../../assets/bullock.webp";
  import { useState } from "react";
  import FontAwesome from '@expo/vector-icons/FontAwesome';
  
  export default function HomeTab() {
    const [text, settext] = useState("");
  
    return (
      <SafeAreaView className="">
        <ImageBackground
          className="w-full h-full"
          source={rootBg}
          resizeMode="cover"
        >
          <View className="flex justify-center items-center mt-[40px]">
            <Image source={bullock} resizeMode="contain" className="w-40 h-40" />
          </View>
  
          <Text className="text-4xl font-bold text-center">Create Account</Text>
          <View className="flex items-center">
            <View className="w-[80vw] h-12 px-4 mt-5 shadow-2xl shadow-black ">
              <TextInput
                className="flex-1 text-white border border-[#CECECE]  rounded-full  pl-5 pr-5 font-psemibold text-base"
                value={text}
                placeholder="Enter Email"
                placeholderTextColor="#7B7B8B"
              />
            </View>
          </View>
          <View className="flex items-center" >
            <TouchableOpacity className="w-[80vw] h-10 px-4 mt-5 bg-[#66D4E7] rounded-full">
              <View className="flex flex-row justify-end">
              <Text className="text-center text-2xl pt-2 font-extrabold pr-[100px]">NEXT </Text>
              <View className="mt-2">
              <FontAwesome size={28} name="arrow-right" />
              </View>
              </View>
              
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <StatusBar backgroundColor="#161622" style="light" />
      </SafeAreaView>
    );
  }
  