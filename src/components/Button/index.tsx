import { TouchableOpacityProps } from "react-native"
import { ButtonContainer, ButtonText } from "./style"

interface ButtonProps extends TouchableOpacityProps{
  title: string,
  variant?: 'primary' | 'error'
}

export function Button({ title, variant = 'primary', ...rest }: ButtonProps) {
  return(
    <ButtonContainer variant={variant} {...rest}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  )
}