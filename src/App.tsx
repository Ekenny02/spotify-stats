import {Text, View} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import LoginButton from "./components/LoginButton";
import React from "react";

export default function App() {

  return (
    <View className='flex-1'>
      <View className='flex-1 justify-center items-center gap-4' >
        <Entypo
          name="spotify"
          size={70}
          color='#1d4ed8'
        />
        <Text className='font-bold text-3xl'>Spotify Stats</Text>
      </View>
      <View className='flex-1 justify-center items-center'>
        <LoginButton buttonText='Sign In'></LoginButton>
        <LoginButton buttonText='Sign In With Google'></LoginButton>
        <LoginButton buttonText='Sign In With Apple'></LoginButton>
      </View>
    </View>
  );
}
