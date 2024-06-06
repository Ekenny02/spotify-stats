import { View, Text, SafeAreaView } from "react-native";
import * as SecureStore from 'expo-secure-store';

export default function Profile({navigation}: any) {
    return (
        <SafeAreaView className='flex-1 justify-center items-center'>
            <Text>Profile Screen</Text>
        </SafeAreaView>
    );
}