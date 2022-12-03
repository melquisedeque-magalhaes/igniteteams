import { ReactNode } from "react";
import { SubTitleText } from "./styles";

interface SubTitleProps {
  children: ReactNode
}

export function SubTitle({ children }: SubTitleProps) {
  return (
    <SubTitleText>
      {children}
    </SubTitleText>
  )
}