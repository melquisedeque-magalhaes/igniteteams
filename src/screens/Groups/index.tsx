import { useCallback, useState } from "react";
import { Alert, FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { SubTitle } from "@components/SubTitle";
import { useGroups } from "@hooks/useGroups";
import { AppError } from '@utils/App.Error'

import * as S from "./styles";
import { Loading } from "@components/Loading";

export function Groups() {
  const [groups, setGroups] = useState<string[]>()
  const [isLoading, setIsLoading] = useState(true)

  const { navigate } = useNavigation()

  const { getAllGroups } = useGroups()

  const getGroups = useCallback(async () => {
    try {
      const data = await getAllGroups()

      setGroups(data)
    } catch(error) {
      if(error instanceof AppError)
        return Alert.alert('Grupo', error.message)

      Alert.alert('Grupo', 'error em carregar grupos')
    } finally{
      setIsLoading(false)
    }
  }, [])

  useFocusEffect(() => {
    getGroups()
  })

  function handleOpenGroup(groupName: string) {
    navigate('Players', { group: groupName })
  }

  return (
    <S.Container>
      <Header />

      <Highlight title="Turmas" subTitle="jogue com a sua turma" />

      <S.Content>
        {
          isLoading ? <Loading /> 
          : (
            <FlatList
              data={groups} 
              keyExtractor={(item) => item}
              renderItem={({ item }) => <GroupCard title={item} onPress={() => handleOpenGroup(item)} />}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => 
                <SubTitle>Você ainda não tem nenhuma turma.{'\n'}crie uma agora mesmo!</SubTitle>
              }
            />
          )
        }
      </S.Content>

      <S.Footer>
        <Button onPress={() => navigate('NewGroup')} title="Criar nova turma" />
      </S.Footer>
    </S.Container>
  )
}