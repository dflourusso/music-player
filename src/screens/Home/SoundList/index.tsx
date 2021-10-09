import React from "react";
import { FlatList, Text } from "react-native";
import SoundRow from "../../../components/SoundRow";
import sounds from "../../../constants/sounds";

export default function Soundlist() {
  return (
    <FlatList
      contentContainerStyle={{ padding: 32 }}
      data={sounds}
      keyExtractor={(p) => p.fileName}
      renderItem={({ item }) => <SoundRow value={item} />}
    />
  );
}
