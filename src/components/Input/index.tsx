import { RefObject } from "react";
import { TextInput, TextInputProps } from "react-native";
import { useTheme } from 'styled-components/native'

import { TextInputStyles } from "./styles";

interface InputProps extends TextInputProps {
  inputRef?: RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: InputProps) {

  const { COLORS } = useTheme()

  return (
    <TextInputStyles ref={inputRef} placeholderTextColor={COLORS.GRAY_300} {...rest} />   
  )
}