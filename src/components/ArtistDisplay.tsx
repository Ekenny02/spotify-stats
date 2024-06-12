import {useEffect, useState} from "react";
import {View, Text, Image} from "react-native";

export default function ArtistDisplay(props: any) {
  const [artist, setArtist] = useState<any>({});

  useEffect(() => {
    props.artist["image_url"] = props.artist["images"][0]['url'];
    setArtist(props.artist);
  }, []);

  return (
    <View className="flex-col w-1/2 items-center">
      <Image
        className="rounded-full"
        source={{uri: artist["image_url"], height: 100, width: 100}}
      />
      <Text>{artist["name"]}</Text>
    </View>
  );
}
