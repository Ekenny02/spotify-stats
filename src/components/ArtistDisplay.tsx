import {useEffect, useState} from "react";
import {View, Text, Image} from "react-native";
import {useSelector} from "react-redux";
import {RootState} from "../state/store";

/* Artist Information Card Component */
export default function ArtistDisplay(props: any) {
  const artist = useSelector((state: any) => state.artists.artists[props.position]);
  const topSongs = useSelector((state: any) => state.artists.artists[props.position]["top_songs"]);

  return (
    <View
      id={`item-${props.position + 1}`}
      className="mx-3 my-5 flex-row">
      {artist && topSongs && (
        <>
          <View className="items-center w-[40%]">
            <Text className="absolute left-0 text-base font-bold">{props.position + 1}.</Text>
            <Image
              className="rounded-full"
              id="picture"
              source={artist["images"] && artist["images"][0] && {uri: artist["images"][0]["url"], height: 100, width: 100}}
            />
            <Text
              id="name"
              className="text-base font-extrabold">
              {artist["name"]}
            </Text>
          </View>
          <View className="w-[60%] pl-1">
            <Text className="text-base font-bold">Top Songs:</Text>
            {topSongs &&
              topSongs.map((song: any, position: number) => (
                <Text
                  numberOfLines={1}
                  key={position}>
                  {position + 1}. {song["song_name"]}
                </Text>
              ))}
          </View>
        </>
      )}
    </View>
  );
}
