import Slider from "@react-native-community/slider";
import React, { useCallback } from "react";
import BackButton from "../../../components/Buttons/BackButton";
import NextButton from "../../../components/Buttons/NextButton";
import PauseButton from "../../../components/Buttons/PauseButton";
import PlayButton from "../../../components/Buttons/PlayButton";
import { theme } from "../../../constants/theme";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { playerActions } from "../../../store/ducks/player";
import { millisToMinutesAndSeconds } from "../../../utils/time";
import {
  Container,
  Content,
  ProgressContainer,
  ProgressLeft,
  ProgressRight,
} from "./styles";

const SoundControls: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentPlayingSoundId = useAppSelector(
    (state) => state.playerReducer.currentPlayingSound?.id
  );
  const progress = useAppSelector((state) => state.playerReducer.soundProgress);

  const pause = useCallback(() => {
    dispatch(playerActions.pause());
  }, [dispatch]);

  const play = useCallback(() => {
    dispatch(playerActions.play());
  }, [dispatch]);

  const back = useCallback(() => {
    dispatch(playerActions.back());
  }, [dispatch]);

  const next = useCallback(() => {
    dispatch(playerActions.next());
  }, [dispatch]);

  const setPosition = useCallback(
    (millis: number) => {
      dispatch(playerActions.setPosition(millis));
      play();
    },
    [dispatch]
  );

  return (
    <Container>
      <ProgressContainer>
        <ProgressLeft>
          {millisToMinutesAndSeconds(progress?.positionMillis ?? 0)}
        </ProgressLeft>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          value={progress?.positionMillis ?? 0}
          maximumValue={progress?.durationMillis ?? 0}
          minimumTrackTintColor={theme.foregorund.secondary}
          maximumTrackTintColor={theme.foregorund.secondary}
          thumbTintColor={theme.foregorund.primary}
          onSlidingStart={pause}
          onSlidingComplete={setPosition}
        />
        <ProgressRight>
          {millisToMinutesAndSeconds(progress?.durationMillis ?? 0)}
        </ProgressRight>
      </ProgressContainer>
      <Content>
        <BackButton onPress={back} />
        {progress?.isPlaying ? (
          <PauseButton onPress={pause} />
        ) : (
          <PlayButton onPress={play} disabled={!currentPlayingSoundId} />
        )}
        <NextButton onPress={next} />
      </Content>
    </Container>
  );
};

export default SoundControls;
