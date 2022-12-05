import { TextInputProps } from "react-native";
import { useTheme } from 'styled-components/native'

import { TextInputStyles } from "./styles";


export function Input({ ...rest }: TextInputProps) {

  const { COLORS } = useTheme()

  return (
    <TextInputStyles placeholderTextColor={COLORS.GRAY_300} {...rest} />   
  )
}