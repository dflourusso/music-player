import React from "react";
import { View } from "react-native";
import { Sound } from "../../constants/sounds";
import { Container, Cover, Subtitle, Title } from "./styles";

type SoundRow = {
  value: Sound;
};

const SoundRow: React.FC<SoundRow> = ({ value }) => {
  return (
    <Container>
      <Cover source={require("../../../assets/cover.jpeg")} />
      <View>
        <Title>{value.title}</Title>
        <Subtitle>{value.author}</Subtitle>
      </View>
    </Container>
  );
};

export default SoundRow;
