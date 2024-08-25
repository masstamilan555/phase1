import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Category from "../components/Category";

export default function HomeTab() {

  return (
    <SafeAreaView className="w-[100vw] h-full bg-[#EFF5BE]">
   

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
           <Category />
           <Category/>

         

          </View>
          <View className="flex  justify-between flex-row gap-2 ">
          
           <Category/>
           <Category/>

          </View>
        </View>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>

  );
}