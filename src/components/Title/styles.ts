import styled, { css } from "styled-components/native";

export const TitleText = styled.Text`${({ theme }) => css`
  text-align: center;
  font-size: ${theme.FONT_SIZE.XL}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.WHITE};
`}`