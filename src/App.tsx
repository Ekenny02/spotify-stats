import {Pressable, Text, View} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import {useAuthRequest, makeRedirectUri} from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";

const CLIENT_ID = "bdacb3e3d4b34645a75f8b7a6243920d";
const CLIENT_SECRET = "0662a8fc0972473c838d296fbf35496a";

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};

export default function App() {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: CLIENT_ID,
      scopes: ["user-read-email", "user-read-private"],
      usePKCE: false,
      redirectUri: "exp://192.168.4.22:8081/callback",
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === "success") {
      const {code} = response.params;
      console.log(code);
    }
  }, [response]);

  return (
    <View className="flex-1">
      <View className="flex-1 justify-center items-center gap-4">
        <Entypo
          name="spotify"
          size={70}
          color="#1d4ed8"
        />
        <Text className="font-bold text-3xl">Spotify Stats</Text>
      </View>
      <View className="flex-1 justify-center items-center">
        <Pressable
          disabled={!request}
          onPress={() => promptAsync()}
          className="rounded-full bg-blue-700 w-4/5 p-3 items-center">
          <Text className="font-bold text-lg text-white">Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
}
