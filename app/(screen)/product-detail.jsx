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
  import tomato from "../../assets/Tomato.jpeg"
  
  import category from "../../assets/category1.jpg"
  import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from "expo-router";
  
  
  export default function HomeTab() {
    const { setOptions } = useNavigation();

    // Hide the header
    setOptions({
      headerShown: false,
    });
  
  
    return (
      <SafeAreaView className="w-[100vw] h-[100vh] flex flex-col align-center">
        <ImageBackground
          className="w-full h-full"
          source={rootBg}
          resizeMode="cover"
        >
          <View className="flex flex-col items-center mt-20">
          <View className="border border-gray-200 shadow-2xl shadow-gray-700 rounded-full" >
            <Image source={tomato} className="w-[280px] h-[280px] rounded-full" />
          </View>
  
          <Text className="bg-"><Text> -</Text> 10 <Text>+</Text></Text>
  
          <View >
            <Text className="text-black text-xl font-semibold">Description:</Text>
            <Text className="text-gray-600 text-center">
              Fresh, vine-ripened tomatoes delivered
              straight from local farmers to your doorstep.
              Enjoy the vibrant taste and rich nutrition of
              farm-to-table produce.
            </Text>
  
  
          </View>
          <View>
            <View className="flex flex-row"><FontAwesome size={22} name="map-marker" />
            <Text className="font-semibold"> Pollachi</Text></View>
  
            <Text>Posted on : <Text className="text-red-500">1 day before</Text></Text>
            <Text>Quantity : <Text>10 Kg</Text></Text>
            <Text>Price : <Text>₹40 per Kg</Text></Text>
          </View>
          <View className="flex flex-row gap-2 mt-48  ">
            <Text className="bg-[#66D4E7] p-3 text-center text-2xl font-bold w-[150px] h-[50px] rounded-2xl">Buy Now</Text>
            <Text className="bg-[#66D4E7] w-[150px] h-[50px] rounded-2xl">icon</Text>
          </View>
  
  
       
          </View>
  
          </ImageBackground>
        <StatusBar backgroundColor="#161622" style="light" />
      </SafeAreaView>
  
    );
  }