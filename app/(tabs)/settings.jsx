import {
  View,
  Text,
  ImageBackground,
  Image,
  StatusBar,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import rootBg from "../../assets/Rootbg.png";
import cabbage from "../../assets/images/cabage.jpeg"

export default function HomeTab() {

  return (
    <SafeAreaView className="w-[100vw] h-[100vh]">
      <ImageBackground
        className="w-full h-full"
        source={rootBg}
        resizeMode="cover"
      >
                <Text className="text-3xl font-extrabold  ml-16 mt-20">Search</Text>

          <View className="flex items-center">
          <View className="w-[80vw] h-12 px-4 mt-3 ">
            <TextInput
              className="flex-1 text-white border  border-[#CECECE]  rounded-full shadow shadow-orange-300 pl-5 pr-5 font-psemibold text-base"
              
              placeholder="Enter Email"
              placeholderTextColor="#7B7B8B"
            />

          </View>
                       
        </View>
        <Text className="text-2xl font-bold text-center  mt-2">Shop by Category</Text>


       <View className="flex items-center gap-5  ">
       <View className="flex  justify-between flex-row  gap-2">
          <View className=" w-[170px] h-[220px]  rounded-3xl border flex flex-col items-center   border-cyan-400">
            <Image source={cabbage} resizeMode="contain" className="w-[150px]"/>
            <Text className="text-xl font-semibold bg-gray-200 ">Vegetables</Text>
          </View>
          <View className=" w-[170px] h-[220px] rounded-3xl border flex flex-col items-center  border-cyan-400">
          <Image source={cabbage} resizeMode="contain" className="w-[150px] "/>
          <Text className="text-xl font-semibold bg-gray-200 ">Vegetables</Text>
          </View>
          
         
        </View>
       <View className="flex  justify-between flex-row gap-2 ">
          <View className=" w-[170px] h-[220px] rounded-3xl border flex flex-col items-center  border-cyan-400">
          <Image source={cabbage} resizeMode="contain" className="w-[150px]"/>
          <Text className="text-xl font-semibold bg-gray-200 ">Vegetables</Text>
          </View>
          <View className=" w-[170px] h-[220px] rounded-3xl border flex flex-col items-center  border-cyan-400">
          <Image source={cabbage} resizeMode="contain" className="w-[150px]"/>
          <Text className="text-xl font-semibold bg-gray-200 ">Vegetables</Text>
          </View>
          
         
        </View>
       </View>
      </ImageBackground>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>

  );
}