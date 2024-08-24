import {
    View,
    Text,
    ImageBackground,
    Image,
    StatusBar,
    TextInput,
  } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  
  import rootBg from "../../assets/rootbg.png";
  import cabbage from "../../assets/cabage.jpeg"
  
  export default function HomeTab() {
  
    return (
      <SafeAreaView className="w-[100vw] h-[100vh] ">
        <ImageBackground
          className="w-full h-full"
          source={rootBg}
          resizeMode="cover"
        >
          <Text className="text-4xl text-center mt-[100px]">Orders</Text>
        </ImageBackground>
        <StatusBar backgroundColor="#161622" style="light" />
      </SafeAreaView>
  
    );
  }