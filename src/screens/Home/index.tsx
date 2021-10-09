import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import Soundlist from "./SoundList";
import { Container } from "./styles";

export default function App() {
  return (
    <Container>
      <StatusBar style="light" />
      <Soundlist />
    </Container>
  );
}