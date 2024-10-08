
import {
  View,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import Item from "../components/Item";
import axios from "axios";

export default function HomeTab() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://farmerapp-6yifrbej.b4a.run/api/product"
        );
        setProducts(data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <SafeAreaView className="w-full h-full bg-[#E8F5E9]">
      <ScrollView>
        <Text className="text-3xl font-pbold text-center mt-10">Vegetables</Text>
        <View className="flex items-center mt-5  ">
          <View className="w-[85vw] h-10 px-4 mt-3 flex flex-row items-center bg-white rounded-full pl-5 pr-5 font-semibold ">
            <FontAwesome size={22} name="search" />
            <TextInput
              className="flex-1 ml-10 text-black  text-2xl"
              placeholder="Search products"
              placeholderTextColor="#7B7B8B"
              
            />
          </View>
        </View>

        <View className="flex flex-col-reverse items-center mt-10 ">
          {loading ? (
            <ActivityIndicator size="large" color="#07C158" />
          ) : (
            products.map((product) => (
              <Item
                key={product._id}
                name={product.name}
                url={product.image}
                quantity={product.quantity}
                price={product.price}
                productId={product._id}
              />
            ))
          )}
        </View>

        <StatusBar backgroundColor="#161622" style="light" />
      </ScrollView>
    </SafeAreaView>
  );
}