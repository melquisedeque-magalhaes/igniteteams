import styled, { css } from "styled-components/native";

interface ButtonContainerProps {
  variant: 'primary' | 'error'
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  background-color: 
    ${({ theme, variant }) => variant === 'primary' ? theme.COLORS.GREEN_500 : theme.COLORS.RED_DARK};
  height: 56px;

  align-items: center;
  justify-content: center;
  border-radius: 6px;
`

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`