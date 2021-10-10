import React from "react";
import BackButton from '../../../components/Buttons/BackButton';
import NextButton from '../../../components/Buttons/NextButton';
import PauseButton from '../../../components/Buttons/PauseButton';
import PlayButton from '../../../components/Buttons/PlayButton';

import {
  Container,
  Content,
  BackIcon,
  NextIcon,
  PauseIcon,
  PlayIcon,
  PlayPauseContainer,
  ProgressText,
} from "./styles";

const SoundControls: React.FC = () => {
  return (
    <Container>
      <ProgressText>02:36</ProgressText>
      <Content>
        <BackButton />
        <PlayButton />
        {/* <PauseButton /> */}
        <NextButton />
      </Content>
    </Container>
  );
};

export default SoundControls;
