import { UsersThree } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const ContainerInput = styled.View`
  width: 100%;
  margin-top: 32px;
  margin-bottom: 20px;
`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_500,
  size: 56,
}))``