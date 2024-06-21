import {Text, SafeAreaView, Image, Pressable} from "react-native";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../../state/store";
import { getProfile } from "../../state/user/profileSlice";

/* Tab Displaying User Information */
export default function Profile() {
  const user = useSelector((state: RootState) => state.profile);
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
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
