import { useState } from "react";
import { Alert } from "react-native";

import { useGroups } from "@hooks/useGroups";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { SubTitle } from "@components/SubTitle";
import { Title } from "@components/Title";

import { Container, ContainerInput, Content, Icon } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {

  const [ groupName, setGroupName ] = useState('')

  const { addGroup } = useGroups()

  const { navigate } = useNavigation()

  function handleAddGroup() {
    if(!groupName.trim())
      return Alert.alert('Erro campo obrigatório!', 'digite o nome do grupo')
    

      addGroup(groupName)
      Alert.alert('Grupo adicionado com sucesso!')

      navigate('Players', { group: groupName })
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