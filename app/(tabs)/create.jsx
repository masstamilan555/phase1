import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  TextInput,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { styled } from "nativewind";

export default function FormWithDropdown() {
  // Fruits
  const [openFruit, setOpenFruit] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [fruitItems, setFruitItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Orange", value: "orange" },
    { label: "Mango", value: "mango" },
    { label: "Pineapple", value: "pineapple" },
  ]);

  // Description and other fields
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  // Categories
  const [openCategory, setOpenCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryItems, setCategoryItems] = useState([
    { label: "Vegetables", value: "vegetables" },
    { label: "Cereals", value: "cereals" },
    { label: "Fruits", value: "fruits" },
    { label: "Nuts", value: "nuts" },
  ]);

  // URL
  const fruitUrlMap = {
    apple: "https://example.com/apple-image.jpg",
    banana: "https://tse2.mm.bing.net/th?id=OIP.e0sWrj5_vKBwSW-2fepjRgHaFB&pid=Api&P=0&h=180",
    orange: "https://example.com/orange-image.jpg",
    mango: "https://example.com/mango-image.jpg",
    pineapple: "https://example.com/pineapple-image.jpg",
  };

  const handleSubmit = async () => {
    if (!selectedFruit || !selectedCategory) {
      Alert.alert("Error", "Please select both a fruit and a category");
      return;
    }
    const url = fruitUrlMap[selectedFruit];

    const requestData = {
      name: selectedFruit,
      category: selectedCategory,
      image: url,
      description: description,
      quantity: parseInt(quantity),
      price:parseFloat( price),
    };
    try {
      const { data } = await axios.post(
        `https://farmerapp-6yifrbej.b4a.run/api/product`,requestData
      );
      console.log(data);
      
    } catch (error) {
      console.error(error);
     
    }
    
  };

  return (
    <SafeAreaView className="flex-1 bg-[#E8F5E9] p-5">
      <View>
        <View className="w-full">
          <Text className="text-2xl font-bold mb-5 text-center">
            Add a New Product
          </Text>

          {/* Category */}
          <Text className="text-lg font-medium">Category</Text>
          <StyledDropDownPicker
            open={openCategory}
            value={selectedCategory}
            items={categoryItems}
            setOpen={setOpenCategory}
            setValue={setSelectedCategory}
            setItems={setCategoryItems}
            searchable={true}
            searchPlaceholder="Search for a category"
            placeholder="Select a category"
            style={{
              backgroundColor: "#D9D9D9",
              zIndex: 10, // Ensures dropdown is on top
            }}
            containerStyle={{
              marginBottom: 20,
            }}
            placeholderStyle={{
              color: "#7B7B8B",
              fontWeight: "bold",
            }}
            textStyle={{
              color: "#000",
            }}
          />

          <Text className="text-lg font-medium">Product Name</Text>
          {/* Fruit */}
          <StyledDropDownPicker
            open={openFruit}
            value={selectedFruit}
            items={fruitItems}
            setOpen={setOpenFruit}
            setValue={setSelectedFruit}
            setItems={setFruitItems}
            searchable={true}
            searchPlaceholder="Search for a fruit"
            placeholder="Select a fruit"
            style={{
              backgroundColor: "#D9D9D9",
              zIndex: 10, // Ensures dropdown is on top
            }}
            containerStyle={{
              marginBottom: 20,
            }}
            placeholderStyle={{
              color: "#7B7B8B",
              fontWeight: "bold",
            }}
            textStyle={{
              color: "#000",
            }}
          />

          <Text className="text-lg font-medium">Description</Text>
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Enter description"
            multiline={true}
            className="bg-white p-4 rounded-lg mb-5 text-black text-lg"
            style={{
              height: 100,
              textAlignVertical: "top",
              backgroundColor: "#D9D9D9",
              padding: 10,
            }}
          />

          <Text className="text-lg font-medium">Quantity</Text>
          <TextInput
            value={quantity}
            onChangeText={setQuantity}
            placeholder="Enter Your Stock Availability (Kg)"
            className="bg-white p-4 rounded-lg mb-5 text-black text-lg"
            keyboardType="numeric"
            style={{
              height: 50,
              textAlignVertical: "top",
              backgroundColor: "#D9D9D9",
              padding: 10,
            }}
          />

          <Text className="text-lg font-medium">Price</Text>
          <TextInput
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
            placeholder="Enter Your Price ₹"
            className="bg-white p-4 rounded-lg mb-5 text-black text-lg"
            style={{
              height: 50,
              textAlignVertical: "top",
              backgroundColor: "#D9D9D9",
              padding: 3,
            }}
          />

          <Text className="text-lg font-medium">Add Media: Beta</Text>

          <TouchableOpacity
            onPress={handleSubmit}
            className="bg-[#07C158] p-4 mt-10 rounded-full"
          >
            <Text className="text-xl font-bold text-center text-white">
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const StyledDropDownPicker = styled(DropDownPicker);
