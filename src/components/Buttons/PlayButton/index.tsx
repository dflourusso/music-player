import React from "react";
import { Container, Icon } from "./styles";

type SoundControlsType = {
  onPress?: () => void;
  disabled?: boolean;
};

const PlayButton: React.FC<SoundControlsType> = ({
  onPress = () => {},
  disabled = false,
}) => {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Icon />
    </Container>
  );
};

export default PlayButton;
