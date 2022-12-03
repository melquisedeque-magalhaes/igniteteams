import { ReactNode } from "react"
import { TitleText } from "./styles"

interface TitleProps {
  children: ReactNode
}

export function Title({ children }: TitleProps) {
  return (
    <TitleText>
      {children}
    </TitleText>
  )
}