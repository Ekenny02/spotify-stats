import {Pressable, Text, View} from "react-native";

export default function LoginButton(props: any) {
  return (
    <View className='w-4/5 m-1'>
      <Pressable
        className="rounded-full bg-blue-700 p-3 items-center"
        onPress={() => console.log(`${props.buttonText} Button Clicked`)}>
        <Text className="font-bold text-lg text-white">{props.buttonText}</Text>
      </Pressable>
    </View>
  );
}
