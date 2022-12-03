import { ButtonIcon } from "@components/ButtonIcon";
import { Plus } from "phosphor-react-native";
import { ReactNode } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from 'styled-components/native'

import { Container, TextInputStyles } from "./styles";

interface InputProps extends TextInputProps {
  icon?: ReactNode
  iconColor?: string
}

export function Input({ icon, iconColor, ...rest }: InputProps) {

  const { COLORS } = useTheme()

  return (
    <Container>
      <TextInputStyles placeholderTextColor={COLORS.GRAY_300} {...rest} />
      {
        icon && (
          <ButtonIcon 
            backgroundColor={iconColor || COLORS.GRAY_700} 
            icon={icon}
          />
        )
      }    
    </Container>
  )
}