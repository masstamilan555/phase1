import {
  View,
  Text,
  ImageBackground,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Ordercard from "../components/ordercard";

export default function HomeTab() {
  return (
    <SafeAreaView className="w-[100vw] h-full bg-[#E8F5E9] ">
      <ScrollView>

      <Text className="text-4xl text-center mt-20">Orders Details</Text>

      <View className="w-full h-full  p-10">
        <Ordercard/>
        <Ordercard/>
        <Ordercard/>
        <Ordercard/>
        <Ordercard/>
        <Ordercard/>
        <Ordercard/>
      </View>

      <StatusBar backgroundColor="#161622" style="light" />
      </ScrollView>
    </SafeAreaView>
  );
}
