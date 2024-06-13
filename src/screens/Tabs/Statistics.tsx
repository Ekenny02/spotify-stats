import {useEffect, useState} from "react";
import {Text, SafeAreaView, View, FlatList} from "react-native";
import GetData from "../../api/GetData";
import ArtistDisplay from "../../components/ArtistDisplay";
import { FlashList } from "@shopify/flash-list";

export default function Statistics() {
  const [topArtists, setTopArtists] = useState<Array<any>>([]);

  useEffect(() => {
    GetData({
      extension: "v1/me/top/artists",
      method: "GET",
      url_search_params: new URLSearchParams({
        limit: "20",
      }),
    }).then((data) => {
      console.log(Object.keys(data["items"][0]));
      setTopArtists(data["items"]);
    });
  }, []);

  return (
    <SafeAreaView
      id="statistics-tab"
      className="flex-1 justify-center items-center">
      <View id="header" className="h-[5%]">
        <Text id="title" className="text-2xl font-bold">Top Artists</Text>
      </View>
      <View className="w-full h-[95%]">
      {topArtists && (
        <FlashList
          id="items"
          showsVerticalScrollIndicator={false}
          data={topArtists}
          estimatedItemSize={20}
          renderItem={({item, index}) => (
            <ArtistDisplay
              key={index}
              artist={item}
              position={index + 1}></ArtistDisplay>
          )}
        />)}
      </View>
    </SafeAreaView>
  );
}
