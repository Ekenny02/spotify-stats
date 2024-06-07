import {Pressable, SafeAreaView, Text, View} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import React, { useEffect } from "react";
import {useAuthRequest, makeRedirectUri} from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import * as SecureStore from 'expo-secure-store';

WebBrowser.maybeCompleteAuthSession();

const CLIENT_ID = SecureStore.getItem('client_id');
const CLIENT_SECRET = SecureStore.getItem('client_secret');

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
};

export default function Home({navigation}: any) {

  const REDIRECT_URI = makeRedirectUri({
    scheme: "spotifyStats",
  });

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: CLIENT_ID,
      scopes: ['user-read-email', 'user-read-private', 'user-top-read'],
      usePKCE: false,
      redirectUri: REDIRECT_URI,
      extraParams: {show_dialog: 'true'}
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;

      const getAccessToken = async () => {
        try {
          const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': `Basic ${btoa(CLIENT_ID + ':' + CLIENT_SECRET)}`,
            },
            body: new URLSearchParams({
              grant_type: 'authorization_code',
              code: code,
              redirect_uri: REDIRECT_URI
            }).toString(),
          });

          if (!tokenResponse.ok) {
            const errorData = await tokenResponse.json();
            console.log(errorData);
            return;
          }

          const tokenData = await tokenResponse.json();

          await SecureStore.setItemAsync('access_token', tokenData.access_token)
          
          navigation.navigate('Profile');
        } catch (error) {
          console.error('Error fetching token:', error);
        }
      };

      getAccessToken();
    }
  }, [response]);

  return (
    <SafeAreaView className="flex-1">
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
    </SafeAreaView>
  );
}
