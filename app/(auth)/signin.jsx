import { View, Text, ImageBackground ,Image, TextInput,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RootBG from "../../assets/rootbg.png"
import logo from "../../assets/bullock.webp"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import { router } from 'expo-router';

export default function Tab() {
  return (
    <SafeAreaView className="flex-1 ">
         
         <ImageBackground source={RootBG} className="flex-1"  >
         <View className="flex justify-center items-center mt-[60px]">
          <Image source={logo} resizeMode="contain" className="w-40 h-40" />
        </View>
          <View className="mt-[100]">
            <Text className="text-2xl font-extrabold "style={{paddingLeft:20}}>Email</Text>
            
          </View>
          <View className="border-[#7aebeb] mt-5 " style={{borderRadius:20,borderWidth:3,marginHorizontal:40}}>
          <TextInput className="h-10"style={{paddingLeft:20}} placeholder='Enter  Mail ID       '/>
          </View>
          <View>
            <Text className="text-2xl font-extrabold mt-5"style={{paddingLeft:20}}>Password</Text>
            
          </View>
          <View className="border-[#7aebeb] mt-5" style={{borderRadius:20,borderWidth:3,marginHorizontal:40}}>
          <TextInput className="h-10"style={{paddingLeft:20}} placeholder='Enter  Password     '/>
          
          </View>
          <View>
            <Text className="underline font-bold mt-5"style={{paddingLeft:240, color:"black"}}>Forgot Password ?</Text>
          </View>

          <View className="flex items-center mt-[100px]" >
          <TouchableOpacity onPress={()=>{
            router.replace("/home")
          }} className="w-[80vw] h-10 px-4 mt-5 bg-[#66D4E7] rounded-full">
            <View className="flex flex-row justify-end">
            <Text className=" text-2xl pt-2 font-extrabold text-center pr-[110px] ">LOGIN</Text>
            
            </View>
            
          </TouchableOpacity>
          <View className="p-5" >
            <Text className="pr-5"> Don't have an account  <Link href="/signup" className="underline text-orange-500 text-lg ml-5">sign up</Link>
            </Text>
            
          </View>
        </View>
         </ImageBackground>
  </SafeAreaView>       
  );
}