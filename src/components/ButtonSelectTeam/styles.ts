import styled, { css } from "styled-components/native";

interface ContainerProps {
  isSelected: boolean
}

export const Container = styled.TouchableOpacity<ContainerProps>`${({ isSelected, theme }) => isSelected && css`
  border: 1px solid ${theme.COLORS.GREEN_700}
`}
  height: 38px;
  width: 70px;

  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const Title = styled.Text`${({ theme }) => css`
  color: ${theme.COLORS.WHITE};
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.SM}px;
  text-transform: uppercase;
`}`