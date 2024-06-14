import {useEffect, useState} from "react";
import {View, Text, Image} from "react-native";

export default function ArtistDisplay(props: any) {
  const [artist, setArtist] = useState<any>({});

  useEffect(() => {
    setArtist(props.artist);
  }, []);

  return (
    <View
      id={"item-" + props.position}
      className="mx-3 my-5 flex-row">
      <View className="items-center w-[40%]">
      <Text className="absolute left-0 text-lg font-bold">{props.position}.</Text>
        <Image
          className="rounded-full"
          id="picture"
          source={artist["images"] && artist["images"][0] && {uri: artist["images"][0]["url"], height: 100, width: 100}}
        />
        <Text
          id="name"
          className="text-xl font-extrabold">
          {artist["name"]}
        </Text>
      </View>
      <View className="w-[60%]">
      <Text className="text-lg font-bold">Top Songs:</Text>
        {artist["top_songs"] && artist["top_songs"].map((song: any, position: number) => 
        <Text numberOfLines={1} key={position}>{position + 1}. {song['song_name']}</Text>
        )}
      </View>
    </View>
  );
}
