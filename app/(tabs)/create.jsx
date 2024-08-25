import {
  View,
  Text,
  ImageBackground,
  Image,
  StatusBar,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function HomeTab() {

  return (
    <SafeAreaView className="w-[100vw] h-full bg-[#EFF5BE] ">
      
        <Text className="text-4xl text-center mt-[100px]">Create</Text>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>

  );
}