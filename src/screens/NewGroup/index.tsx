import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useGroups } from "@hooks/useGroups";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { SubTitle } from "@components/SubTitle";
import { Title } from "@components/Title";
import { AppError } from "@utils/App.Error";

import { Container, ContainerInput, Content, Icon } from "./styles";

export function NewGroup() {

  const [ groupName, setGroupName ] = useState('')

  const { addGroup } = useGroups()

  const { navigate } = useNavigation()

  async function handleAddGroup() {
    try {
      if(!groupName.trim())
        return Alert.alert('Erro campo obrigatório!', 'digite o nome do grupo')

      await addGroup(groupName)

      navigate('Players', { group: groupName })
    }catch(error) {
      if(error instanceof AppError)
        return Alert.alert('Novo Grupo', error.message)

      Alert.alert('Novo Grupo', 'error em carregar grupos')
    }
 
  }

  return (
    <Container>
      <Header isShowBackButton />

      <Content>
        <Icon />

        <Title>Nova Turma</Title>
        <SubTitle>
          crie uma turma para adicionar pessoas
        </SubTitle>

        <ContainerInput>
          <Input value={groupName} onChangeText={setGroupName} placeholder="Nome da turma" />
        </ContainerInput>

        <Button onPress={handleAddGroup} title="Criar" />
      </Content>
    </Container>
  )
}