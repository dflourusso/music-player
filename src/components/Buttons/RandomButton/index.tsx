import React, { useState } from "react";
import { theme } from "../../../constants/theme";
import { Container, Icon } from "./styles";

type SoundControlsType = {
  onPress?: () => void;
  selected?: boolean;
};

const RandomButton: React.FC<SoundControlsType> = ({
  onPress = () => {},
  selected,
}) => {
  return (
    <Container onPress={onPress}>
      <Icon
        color={selected ? theme.foregorund.lightBlue : theme.foregorund.light}
      />
    </Container>
  );
};

export default RandomButton;
