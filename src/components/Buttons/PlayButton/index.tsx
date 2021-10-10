import React from "react";
import {
  Container, Icon
} from "./styles";

type SoundControlsType = {
  onPress?: () => void
}

const PlayButton: React.FC<SoundControlsType> = ({onPress = () => {}}) => {
  return (
        <Container onPress={onPress}>
          <Icon />
        </Container>
  );
};

export default PlayButton;
