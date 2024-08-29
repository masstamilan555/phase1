import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { useNavigation } from "expo-router";
import { forgetbg } from "../../constants/image";
import { StatusBar } from "expo-status-bar";

export default function Forget() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [timer, setTimer] = useState(59);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setIsDisabled(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1 && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && otp[index] === "") {
      if (index !== 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleRestart = () => {
    setIsDisabled(true);
    setTimer(59);
  };

  return (
    <SafeAreaView>
      <ScrollView className="h-full">
        <Image
          className="w-full h-[35vh] "
          source={forgetbg}
          resizeMode="cover"
        />
        <View className="">
          <View className="h-[100vh] pt-10 bg-[#E8F5E9] rounded-2xl -mt-2">
            <Text className="text-2xl font-extrabold underline text-center">
              Verify Email
            </Text>

            <View className="p-5">
              <Text className="pr-5 text-xl text-black ">
                Code sent to{" "}
                <Link
                  href="https://mail.google.com/mail/u/0/#inbox"
                  className="underline text-[#FF7700] text-lg ml-5"
                >
                  bpj4510@gmail.com
                </Link>
              </Text>
            </View>

            <View className="flex flex-row justify-between items-center border-full p-10 pt-5">
              {otp.map((item, index) => (
                <TextInput
                  className="text-2xl border-full items-center  text-center border rounded-2xl w-12 border-green-400 h-[50]"
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  value={item}
                  onChangeText={(text) => handleChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  keyboardType="number-pad"
                  keyboardAppearance="dark"
                  maxLength={1}
                  autoFocus={index === 0}
                />
              ))}
            </View>

            <View className=" pl-[125] flex flex-row">
              <Text className="pr-1 text-2xl font-bold">Try again in </Text>
              <Text className=" text-2xl underline text-green-500">{`${Math.floor(
                timer / 60
              )}:${timer % 60 < 10 ? `0${timer % 60}` : timer % 60}`}</Text>
            </View>

            <View className="flex items-center mt-10">
              <Text
                onPress={handleRestart}
                className={`${
                  isDisabled ? "text-gray-500" : "text-black"
                }  text-2xl font-extrabold`}
                disabled={isDisabled} // Disable the button when the timer is running
              >
                Resend
              </Text>
            </View>

            <View className="flex items-center mt-5">
              <TouchableOpacity className="w-[75vw] h-10 px-4 bg-[#07C158] rounded-xl">
                <View className="">
                  <Text className="text-2xl p-1 text-white font-extrabold text-center">
                    Verify
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
