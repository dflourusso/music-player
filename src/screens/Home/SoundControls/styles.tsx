import styled from "styled-components/native";
import { theme } from "../../../constants/theme";

export const Container = styled.View`
  background-color: ${theme.background.primary};
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
