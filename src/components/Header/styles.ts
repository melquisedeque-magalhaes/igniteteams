import styled from "styled-components/native";
import { CaretLeft } from "phosphor-react-native"

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`

export const ArrowLeftButton = styled.TouchableOpacity`
  flex: 1;
`

export const ArrowLeftIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE
}))`

`