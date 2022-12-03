import { Button } from "@components/Button";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { SubTitle } from "@components/SubTitle";
import { Title } from "@components/Title";
import { Plus } from "phosphor-react-native";

import { useTheme } from "styled-components/native";
import { Container, ContainerInput, Content, Footer } from "./styles";

export function Players() {

  const { COLORS } = useTheme()

  return (
    <Container>
      <Header isShowBackButton />

      <Content>
        <Title>Nova Turma</Title>
        <SubTitle>
          adicione a galera e separe os times
        </SubTitle>

        <ContainerInput>
          <Input 
            placeholder="Nome do participante"
            iconColor={COLORS.GRAY_700}
            icon={
              <Plus color={COLORS.GREEN_500} 
                size={24} 
              />
            }  
          />
        </ContainerInput>
          
      </Content>

      <Footer>
        <Button title="Remover turma" variant="error" />
      </Footer>
    </Container>
  )
}