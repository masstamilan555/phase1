import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";



const AuthLayout = () => {


  return (
    <>
      <Stack>
        <Stack.Screen
          name="product"
          options={{
            headerShown: false,
          }}
        />
        
        <Stack.Screen
          name="product-detail"
          options={{
            headerShown: false,
          }}
        />
        
        
      </Stack>

      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default AuthLayout;