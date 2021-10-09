import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { theme } from "../../../constants/theme";

export const Container = styled.View`
  background-color: ${theme.background.primaryDark};
  padding: 40px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ProgressText = styled.Text`
  color: ${theme.foregorund.secondary};
  margin-bottom: 32px;
  font-size: 18px;
  align-self: center;
`;

export const PlayPauseContainer = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border-width: 1px;
  border-color: ${theme.foregorund.secondary};
  justify-content: center;
  align-items: center;
`;

export const PlayIcon = styled(Ionicons).attrs(() => ({
  name: "ios-play-sharp",
  size: 40,
  color: theme.foregorund.primary,
}))`
  left: 4px;
`;

export const PauseIcon = styled(Ionicons).attrs(() => ({
  name: "ios-pause-sharp",
  size: 40,
  color: theme.foregorund.primary,
}))``;

export const BackIcon = styled(Ionicons).attrs(() => ({
  name: "play-skip-back-sharp",
  size: 24,
  color: theme.foregorund.secondary,
}))``;

export const NextIcon = styled(Ionicons).attrs(() => ({
  name: "play-skip-forward-sharp",
  size: 24,
  color: theme.foregorund.secondary,
}))``;
