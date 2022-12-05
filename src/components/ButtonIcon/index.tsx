import { TouchableOpacityProps } from "react-native";
import * as IconsPhosphor from 'phosphor-react-native'

import { Icon } from "@components/Icon";
import { Container } from "./styles";

interface ButtonIconProps extends TouchableOpacityProps {
  icon: keyof typeof IconsPhosphor
  color: string
}

export function ButtonIcon({ icon, color, ...rest }: ButtonIconProps) {
  return (
    <Container {...rest}>
      <Icon name={icon} color={color} />
    </Container>
  )
}