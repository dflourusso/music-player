import React from "react";
import styled from "styled-components/native";
import { theme } from "../../constants/theme";

export const Container = styled.View`
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Title = styled.Text`
  color: ${theme.foregorund.primary};
  padding-bottom: 4px;
`;

export const Subtitle = styled.Text`
  color: ${theme.foregorund.secondary};
`;

export const Cover = styled.Image`
  border-radius: 6px;
  width: 40px;
  height: 40px;
  margin-right: 16;
`;
