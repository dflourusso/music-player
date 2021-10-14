import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { theme } from "../../../constants/theme";

export const Container = styled.TouchableOpacity`
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(MaterialIcons).attrs(() => ({
  name: "replay",
  size: 28,
  color: theme.foregorund.light,
}))``;
