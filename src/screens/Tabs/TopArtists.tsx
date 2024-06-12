import {useEffect, useState} from "react";
import {Text, SafeAreaView, View} from "react-native";
import GetData from "../../api/GetData";
import ArtistDisplay from "../../components/ArtistDisplay";

export default function TopArtists() {
  const [topArtists, setTopArtists] = useState<Array<any>>([]);

  useEffect(() => {
    GetData({
      extension: "v1/me/top/artists",
      method: "GET",
      url_search_params: new URLSearchParams({
        'limit': '6'})
    }).then((data) => {
      // console.log(Object.keys(data["items"][0]));
      setTopArtists(data["items"]);
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <View className="flex-row flex-wrap">
        {topArtists.map((artist, i) => (
          <ArtistDisplay key={i} artist={artist}></ArtistDisplay>
        ))}
      </View>
    </SafeAreaView>
  );
}
