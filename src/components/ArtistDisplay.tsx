import {useEffect, useState} from "react";
import {View, Text, Image} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

export default function ArtistDisplay(props: any) {
  const [artist, setArtist] = useState<any>({});

  useEffect(() => {
    props.artist["image_url"] = props.artist["images"][0]["url"];
    setArtist(props.artist);
  }, []);

  return (
    <View
      id={"item-" + props.position}
      className="items-center m-2">
      <Image
        className="rounded-full"
        id="picture"
        source={{uri: artist["image_url"], height: 150, width: 150}}
      />
      <Text
        id="name"
        className="text-xl font-extrabold">
        {artist["name"]}
      </Text>
    </View>
  );
}
