import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 54px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 8px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
  margin-left: 8px;
  flex: 1;
`

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({ 
  size: 24,
  color: theme.COLORS.GRAY_200
 }))``