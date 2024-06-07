import {Text, SafeAreaView, Pressable, Image} from "react-native";
import {useEffect, useState} from "react";
import GetData from "../api/GetData";

export default function Profile({navigation}: any) {
  const [profileInformation, setProfileInformation] = useState<any>({});

  useEffect(() => {
    GetData({
      extension: "v1/me",
      method: "GET",
    }).then((data) => {
      data["profile_picture"] = data["images"][0];

      delete data["images"];

      const scaleFactor = 100 / data["profile_picture"]["width"];

      data["profile_picture"]["width"] *= scaleFactor;
      data["profile_picture"]["height"] *= scaleFactor;

      setProfileInformation(data);
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Image
        className="rounded-full"
        source={profileInformation["profile_picture"]}
      />
      <Text className="font-bold text-xl">{profileInformation["display_name"]}</Text>
    </SafeAreaView>
  );
}
