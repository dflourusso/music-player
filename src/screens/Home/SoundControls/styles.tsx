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

export const ProgressContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 32px;
`;

export const ProgressLeft = styled.Text`
  position: absolute;
  left: 0;
  color: ${theme.foregorund.secondary};
  font-size: 18px;
`;

export const ProgressRight = styled.Text`
  position: absolute;
  right: 0;
  color: ${theme.foregorund.secondary};
  font-size: 18px;
`;
