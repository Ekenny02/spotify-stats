import {Text, SafeAreaView, Image, Pressable} from "react-native";
import {useEffect, useState} from "react";
import GetData from "../../api/GetData";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../../state/user/profileSlice";
import { RootState } from "../../state/store";

/* Tab Displaying User Information */
export default function Profile() {
  const user = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    GetData({
      extension: "v1/me",
      method: "GET",
    }).then((data) => {
      data["profile_picture"] = data["images"][0];

      const scaleFactor = 100 / data["profile_picture"]["width"];

      data["profile_picture"]["width"] *= scaleFactor;
      data["profile_picture"]["height"] *= scaleFactor;

      dispatch(
        updateProfile({
          profile_picture: data["profile_picture"],
          name: data["display_name"],
        })
      );
    });
  }, []);

  return (
    <SafeAreaView
      id="profile-tab"
      className="flex-1 justify-center items-center">
      <Image
        id="picture"
        className="rounded-full"
        source={user["profile_picture"]}
      />
      <Text
        id="name"
        className="font-bold text-xl">
        {user["name"]}
      </Text>
    </SafeAreaView>
  );
}
