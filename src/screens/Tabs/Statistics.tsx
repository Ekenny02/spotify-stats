import {useCallback, useEffect, useState} from "react";
import {Text, SafeAreaView, View, FlatList} from "react-native";
import GetData from "../../api/GetData";
import ArtistDisplay from "../../components/ArtistDisplay";
import {FlashList} from "@shopify/flash-list";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../../state/store";
import { addArtists, addTopSongs } from "../../state/user/ArtistsSlice";

/* Tab Displaying Top Artists and Songs */
export default function Statistics() {

  const artistData = useSelector((state: RootState) => state.artists);
  const dispatch: any = useDispatch();

  useEffect(() => {
    async function processData() {

      await dispatch(addArtists(50));

      for (let i = 0; i < 50; i++) {
        dispatch(addTopSongs(i));
      }
    }

    processData();
  }, []);

  const renderItem = useCallback(({ index }) => (
    <ArtistDisplay position={index} />
  ), []);

  return (
    <SafeAreaView
      id="statistics-tab"
      className="flex-1 justify-center items-center">
      <View
        id="header"
        className="h-[5%]">
        <Text
          id="title"
          className="text-2xl font-bold">
          Top Artists
        </Text>
      </View>
      <View className="w-full h-[95%]">
        {artistData && (
          <FlashList
            id="items"
            showsVerticalScrollIndicator={false}
            data={artistData.artists}
            estimatedItemSize={200}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
