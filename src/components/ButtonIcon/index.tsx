import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";

interface ButtonIconProps extends TouchableOpacityProps {
  icon: ReactNode
  backgroundColor: string
}

export function ButtonIcon({ icon:Icon, backgroundColor, ...rest }: ButtonIconProps) {
  return (
    <Container backgroundColor={backgroundColor} {...rest}>
      {Icon}
    </Container>
  )
}