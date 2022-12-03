import styled, { css } from "styled-components/native";

export const SubTitleText = styled.Text`${({ theme }) => css`
   text-align: center;
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_300};
`}`