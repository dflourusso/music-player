import React from "react";

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
        <BackIcon />
        <PlayPauseContainer>
          <PlayIcon />
          {/* <PauseIcon /> */}
        </PlayPauseContainer>
        <NextIcon />
      </Content>
    </Container>
  );
};

export default SoundControls;
