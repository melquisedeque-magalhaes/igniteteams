import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`

export const ContainerInput = styled.View`
  width: 100%;
  margin-top: 32px;
  margin-bottom: 20px;
`

export const Content = styled.View`
  margin-top: 32px;
`

export const Footer = styled.View`
  margin-top: auto;
`