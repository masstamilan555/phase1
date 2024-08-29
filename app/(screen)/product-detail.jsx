import {
  View,
  Text,
  Image,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

export default function HomeTab() {
  const navigation = useNavigation();
   const {params} =useRoute()
   const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const [count , setCount] = useState(1)

  const decrementCount = ()=>{
    setCount(count-1)
  }
  const incrementCount = ()=>{
    setCount(count+1)
  }
   
  // Use useEffect to set the options after the component mounts
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://farmerapp-6yifrbej.b4a.run/api/product/${params}`
        );
        setProduct(data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [params]);

  if (loading) {
    return (
      <SafeAreaView className="w-full h-full bg-[#E8F5E9] flex items-center justify-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="w-full h-full bg-[#E8F5E9] flex flex-col items-center">
      <Text className="text-3xl font-extrabold text-center mt-10">Product Detail</Text>
      <View className="flex flex-col items-center h-[100px] mt-10">
        <View className="bg-[#A5D6A7] p-20 pt-10 pb-10 rounded-2xl shadow-xl shadow-black">
          <View className=" shadow-2xl shadow-black rounded-full">
            <Image source={{ uri: product.image }} className="w-[200px] h-[200px] rounded-full" />
          </View>
          <Text className="text-3xl font-bold text-center mt-5">{product.name}</Text>
        </View>

        <View className="ml-[220px] mt-[-18px]">
          <Text className="bg-[#07C158] text-3xl w-16 h-7 rounded-full flex flex-col ">
            <Text onPress={decrementCount} className="text-2xl text-center"> -</Text>
             <Text>{count}</Text>
             <Text onPress={incrementCount} className="text-2xl text-center">+</Text>
          </Text>
        </View>

        <View className="m-5 mt-0">
          <Text className="text-gray-700 text-xl font-semibold ml-[-20px]">Description:</Text>
          <Text className="text-gray-600 text-start tracking-wide mt-2">
            Fresh, vine-ripened tomatoes delivered straight from local farmers
            to your doorstep. Enjoy the vibrant taste and rich nutrition of
            farm-to-table produce.
          </Text>
        </View>
        <View className="flex ml-[-170px]">
          <View className="flex flex-row">
            <FontAwesome size={22} name="map-marker" />
            <Text className="font-semibold text-lg"> Pollachi</Text>
          </View>

          <Text className="text-lg">
            Posted on : <Text className="text-red-500">1 day before</Text>
          </Text>
          <Text className="text-lg">
            Available : <Text>{product.quantity} Kg</Text>
          </Text>
          <Text className="text-lg mt-2 p-1">
            Price : <Text className="text-green-600 font-semibold text-4xl ">₹{product.price} </Text><Text>per Kg</Text>
          </Text>
        </View>
        <View className="flex flex-row gap-2 mt-10">
          <Text className="bg-[#07C158] p-3 text-center text-white text-2xl font-bold w-[150px] h-[50px] rounded-2xl">
            Buy Now
          </Text>
          <Text className="bg-[#07C158] w-[150px] h-[50px] text-center rounded-2xl">
            <FontAwesome size={50} color="white" name="comments" />
          </Text>
        </View>
      </View>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}