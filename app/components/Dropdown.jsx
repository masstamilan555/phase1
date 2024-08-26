// DropdownWithSearch.jsx
import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { styled } from 'nativewind';

export default function DropdownWithSearch() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Orange', value: 'orange' },
    { label: 'Mango', value: 'mango' },
    { label: 'Pineapple', value: 'pineapple' },
  ]);

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-[#EFF5BE]">
      <View className="w-[80vw]">
        <Text className="text-2xl font-bold mb-5 text-center">Select a Fruit</Text>
        <StyledDropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          searchable={true}
          searchPlaceholder="Search for a fruit"
          placeholder="Select a fruit"
          listMode="MODAL" // This will display the dropdown in a modal format.
          style={{ backgroundColor: '#F2E7B2' }} // Custom style for dropdown
          searchContainerStyle={{
            borderBottomColor: "#C0C0C0"
          }}
          searchTextInputStyle={{
            color: "#000"
          }}
          placeholderStyle={{
            color: "#7B7B8B",
            fontWeight: "bold"
          }}
          textStyle={{
            color: "#000"
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const StyledDropDownPicker = styled(DropDownPicker);
