import { useNavigation } from "@react-navigation/native"

import { ArrowLeftButton, ArrowLeftIcon, Container, Logo } from "./styles"

import LogoImg from '@assets/logo.png'


interface ButtonProps {
  isShowBackButton?: boolean
}

export function Header({ isShowBackButton = false }: ButtonProps) {
  const { navigate } = useNavigation()

  function handleGoBack() {
    navigate('Groups')
  }

  return (
    <Container>
      {
        isShowBackButton && (
          <ArrowLeftButton onPress={handleGoBack}>
            <ArrowLeftIcon />
          </ArrowLeftButton>
        )
      }
     
      <Logo source={LogoImg} />
    </Container>
  )
}