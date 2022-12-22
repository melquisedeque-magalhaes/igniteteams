import { ArrowLeftButton, ArrowLeftIcon, Container, Logo } from "./styles"

import LogoImg from '@assets/logo.png'
import { useNavigation } from "@react-navigation/native"


interface ButtonProps {
  isShowBackButton?: boolean
}

export function Header({ isShowBackButton = false }: ButtonProps) {
  const { goBack } = useNavigation()

  return (
    <Container>
      {
        isShowBackButton && (
          <ArrowLeftButton onPress={goBack}>
            <ArrowLeftIcon />
          </ArrowLeftButton>
        )
      }
     
      <Logo source={LogoImg} />
    </Container>
  )
}