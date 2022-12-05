import styled, { css } from "styled-components/native";

export const TextInputStyles = styled.TextInput`${({ theme }) => css`
  height: 56px;
  border-radius: 6px;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700 };
  
  color: ${theme.COLORS.WHITE};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;
`}`