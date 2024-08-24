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
  
  import rootBg from "../../assets/rootbg.png";
  import tomato from "../../assets/Tomato.jpeg"
  import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from "expo-router";
  
  
  export default function HomeTab() {
    const { setOptions } = useNavigation();

    // Hide the header
    setOptions({
      headerShown: false,
    });
  
    return (
      
      <SafeAreaView className="w-[100vw] h-[100vh]">
        <ScrollView>
        <ImageBackground
          className="w-[100vw] h-auto"
          source={rootBg}
          resizeMode="cover"
        >
  
          
          <View className="flex items-center mt-20">
            <View className="w-[80vw] h-12 px-4 mt-3  border flex flex-row items-center   border-[#CECECE]  rounded-full shadow shadow-blue-200 pl-5 pr-5 font-psemibold ">
            <FontAwesome size={22} name="search" />
              <TextInput
                className="flex-1 ml-10 text-black text-base"
  
                placeholder="Search products"
                placeholderTextColor="#7B7B8B"
              />
  
            </View>
  
          </View>
  
          <View className="flex flex-col items-center mt-10 ">
            <View className="bg-gray-300 w-[90vw] h-[100px] p-3 flex flex-row justify-between mb-1 rounded-2xl ">
              <View>
                <Text className="text-black text-2xl font-extrabold ">Tomato</Text>
                <Text className="text-[#FF0000] text-xl">Quantity:100kg</Text>
                <Text className="text-[#0E6507] text-xl">Price : ₹70 <Text className="text-black text-lg">per(KG)</Text></Text>
              </View>
              <View>
                <Image source={tomato} className="w-[20vw] h-[10vh] rounded-full"/>
              </View>
            </View>
            <View className="bg-gray-300 w-[90vw] h-[100px] p-3 flex flex-row justify-between mb-1 rounded-2xl">
              <View>
                <Text className="text-black text-2xl font-extrabold ">Tomato</Text>
                <Text className="text-[#FF0000] text-xl">Quantity:100kg</Text>
                <Text className="text-[#0E6507] text-xl">Price : ₹70 <Text className="text-black text-lg">per(KG)</Text></Text>
              </View>
              <View>
                <Image source={tomato} className="w-[20vw] h-[10vh] rounded-full"/>
              </View>
            </View>
            <View className="bg-gray-300 w-[90vw] h-[100px] p-3 flex flex-row justify-between mb-1 rounded-2xl">
              <View>
                <Text className="text-black text-2xl font-extrabold ">Tomato</Text>
                <Text className="text-[#FF0000] text-xl">Quantity:100kg</Text>
                <Text className="text-[#0E6507] text-xl">Price : ₹70 <Text className="text-black text-lg">per(KG)</Text></Text>
              </View>
              <View>
                <Image source={tomato} className="w-[20vw] h-[10vh] rounded-full"/>
              </View>
            </View>
            <View className="bg-gray-300 w-[90vw] h-[100px] p-3 flex flex-row justify-between mb-1 rounded-2xl">
              <View>
                <Text className="text-black text-2xl font-extrabold ">Tomato</Text>
                <Text className="text-[#FF0000] text-xl">Quantity:100kg</Text>
                <Text className="text-[#0E6507] text-xl">Price : ₹70 <Text className="text-black text-lg">per(KG)</Text></Text>
              </View>
              <View>
                <Image source={tomato} className="w-[20vw] h-[10vh] rounded-full"/>
              </View>
            </View>
            <View className="bg-gray-300 w-[90vw] h-[100px] p-3 flex flex-row justify-between mb-1 rounded-2xl">
              <View>
                <Text className="text-black text-2xl font-extrabold ">Tomato</Text>
                <Text className="text-[#FF0000] text-xl">Quantity:100kg</Text>
                <Text className="text-[#0E6507] text-xl">Price : ₹70 <Text className="text-black text-lg">per(KG)</Text></Text>
              </View>
              <View>
                <Image source={tomato} className="w-[20vw] h-[10vh] rounded-full"/>
              </View>
            </View>
            <View className="bg-gray-300 w-[90vw] h-[100px] p-3 flex flex-row justify-between mb-1 rounded-2xl">
              <View>
                <Text className="text-black text-2xl font-extrabold ">Tomato</Text>
                <Text className="text-[#FF0000] text-xl">Quantity:100kg</Text>
                <Text className="text-[#0E6507] text-xl">Price : ₹70 <Text className="text-black text-lg">per(KG)</Text></Text>
              </View>
              <View>
                <Image source={tomato} className="w-[20vw] h-[10vh] rounded-full"/>
              </View>
            </View>
            <View className="bg-gray-300 w-[90vw] h-[100px] p-3 flex flex-row justify-between mb-1 rounded-2xl">
              <View>
                <Text className="text-black text-2xl font-extrabold ">Tomato</Text>
                <Text className="text-[#FF0000] text-xl">Quantity:100kg</Text>
                <Text className="text-[#0E6507] text-xl">Price : ₹70 <Text className="text-black text-lg">per(KG)</Text></Text>
              </View>
              <View>
                <Image source={tomato} className="w-[20vw] h-[10vh] rounded-full"/>
              </View>
            </View>
            <View className="bg-gray-300 w-[90vw] h-[100px] p-3 flex flex-row justify-between mb-1 rounded-2xl">
              <View>
                <Text className="text-black text-2xl font-extrabold ">Tomato</Text>
                <Text className="text-[#FF0000] text-xl">Quantity:100kg</Text>
                <Text className="text-[#0E6507] text-xl">Price : ₹70 <Text className="text-black text-lg">per(KG)</Text></Text>
              </View>
              <View>
                <Image source={tomato} className="w-[20vw] h-[10vh] rounded-full"/>
              </View>
            </View>
            
          </View>
  
  
         
        </ImageBackground>
        <StatusBar backgroundColor="#161622" style="light" />
      </ScrollView>
      </SafeAreaView>
  
    );
  }