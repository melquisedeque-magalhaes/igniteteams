import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { SubTitle } from "@components/SubTitle";
import { Title } from "@components/Title";

import { Container, ContainerInput, Content, Icon } from "./styles";

export function NewGroup() {
  return (
    <Container>
      <Header isShowBackButton />

      <Content>
        <Icon  />

        <Title>Nova Turma</Title>
        <SubTitle>
          crie uma turma para adicionar pessoas
        </SubTitle>

        <ContainerInput>
          <Input placeholder="Nome da turma" />
        </ContainerInput>

        <Button title="Criar" />
      </Content>
    </Container>
  )
}