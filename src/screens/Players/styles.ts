import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`

export const Form = styled.View`
  width: 100%;
  margin-top: 32px;
  margin-bottom: 20px;

  flex-direction: row;
  justify-content: space-between;

  border-radius: 6px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700 };
`

export const Content = styled.View`
  margin-top: 32px;
`

export const HeaderTeams = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const CounterTitle = styled.Text`
  
`

export const Footer = styled.View`
  margin-top: auto;
`