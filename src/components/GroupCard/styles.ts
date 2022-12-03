import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { UsersThree } from 'phosphor-react-native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 96px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  padding: 24px;

  margin-bottom: 12px;
`

export const Title = styled.Text`${({ theme }) => css`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.LG}px;
  color: ${theme.COLORS.GRAY_100};`
}`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_500,
  size: 32,
  weight: "fill"
}))`
  margin-right: 20px;
`