import {
  View,
  Text,
  StatusBar,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


import Category from "../components/Category";
import { fruit, vegtable, nut, cereals } from "../../constants/image";


export default function HomeTab() {

  return (
    <SafeAreaView className="w-[100vw] h-full bg-[#E8F5E9]">


      <Text className="text-2xl font-bold text-center  mt-16">Shop by Category</Text>

      <View className="flex items-center mt-5">
        <View className="w-[100vw] h-12 px-4 mt-3 ">
          <TextInput
            className="flex-1 text-white border bg-white  border-[#CECECE]  rounded-full shadow shadow-black pl-5 pr-5 font-psemibold text-base"

            placeholder="Search products"
            placeholderTextColor="#7B7B8B"
          />

        </View>

      </View>


      <View className="flex items-center mt-10">
        <View className="flex items-center  gap-10 w-[100vw] ">
          <View className="flex  justify-center flex-row gap-2">


           <View >
           <Category className="mr-10" img={vegtable} name="Vegetable" />
           </View>
            <View>
            <Category img={fruit} name="Fruit" />
            </View>



          </View>
          <View className="flex  justify-center flex-row gap-2 ">

            <View>

            <Category img={nut} name="Nuts" />
            </View>
            <View>
            <Category img={cereals} name="Cereals" />

            </View>



          </View>
        </View>
      </View>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>

  );
}

