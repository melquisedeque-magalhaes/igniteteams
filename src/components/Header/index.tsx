import { ArrowLeftButton, ArrowLeftIcon, Container, Logo } from "./styles"

import LogoImg from '@assets/logo.png'


interface ButtonProps {
  isShowBackButton?: boolean
}

export function Header({ isShowBackButton = false }: ButtonProps) {
  return (
    <Container>
      {
        isShowBackButton && (
          <ArrowLeftButton>
            <ArrowLeftIcon />
          </ArrowLeftButton>
        )
      }
     
      <Logo source={LogoImg} />
    </Container>
  )
}