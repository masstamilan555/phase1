import {
  View,
  Text,
  ImageBackground,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import rootBg from "../../assets/rootbg.png";
import category from "../../assets/category1.jpg"
import { Link, router } from "expo-router";

export default function HomeTab() {

  return (
    <SafeAreaView className="w-[100vw] h-[100vh]">
      <ImageBackground
        className="w-full h-full"
        source={rootBg}
        resizeMode="cover"
      >

        <Text className="text-2xl font-bold text-center  mt-16">Shop by Category</Text>
        
        <View className="flex items-center mt-10">
          <View className="w-[80vw] h-12 px-4 mt-3 ">
            <TextInput
              className="flex-1 text-white border  border-[#CECECE]  rounded-full shadow shadow-orange-300 pl-5 pr-5 font-psemibold text-base"

              placeholder="Search products"
              placeholderTextColor="#7B7B8B"
            />

          </View>

        </View>


        <View className="flex items-center justify-evenly  gap-5  ">
          <View className="flex  justify-between flex-row  gap-2">
            <Link href="/product">
            <View className=" w-[180px] h-[250px]  rounded-3xl border flex flex-col items-center justify-center    border-cyan-400">
              <Image source={category} resizeMode="contain" className="w-[90%]  h-[100px] border   " />
              <Text className="text-xl font-semibold  ">Vegetables</Text>
            </View>
            </Link>
            <View className=" w-[180px] h-[250px]  rounded-3xl border flex flex-col items-center justify-center    border-cyan-400">
              <Image source={category} resizeMode="contain" className="w-[90%]  h-[100px] border   " />
              <Text className="text-xl font-semibold  ">Vegetables</Text>
            </View>

          </View>
          <View className="flex  justify-between flex-row gap-2 ">
            <View className=" w-[180px] h-[250px]  rounded-3xl border flex flex-col items-center justify-center    border-cyan-400">
              <Image source={category} resizeMode="contain" className="w-[90%]  h-[100px] border   " />
              <Text className="text-xl font-semibold  ">Vegetables</Text>
            </View>
            <View className=" w-[180px] h-[250px]  rounded-3xl border flex flex-col items-center justify-center    border-cyan-400">
              <Image source={category} resizeMode="contain" className="w-[90%]  h-[100px] border   " />
              <Text className="text-xl font-semibold  ">Vegetables</Text>
            </View>

          </View>
        </View>
      </ImageBackground>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>

  );
}