import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 56px;
  border-radius: 6px;
  padding-left: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700 };
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`

export const TextInputStyles = styled.TextInput`${({ theme }) => css`
  background-color: transparent;
  color: ${theme.COLORS.WHITE};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;
`}`