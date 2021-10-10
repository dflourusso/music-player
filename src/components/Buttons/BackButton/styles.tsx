import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { theme } from "../../../constants/theme";

export const Container = styled.TouchableOpacity`
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Ionicons).attrs(() => ({
  name: "play-skip-back-sharp",
  size: 24,
  color: theme.foregorund.secondary,
}))`
`;