import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { SubTitle } from "@components/SubTitle";
import { useGroups } from "@hooks/useGroups";

import * as S from "./styles";
import { useState } from "react";

export function Groups() {
  const [groups, setGroups] = useState([])

  const { navigate } = useNavigation()

  return (
    <S.Container>
      <Header />

      <Highlight title="Turmas" subTitle="jogue com a sua turma" />

      <S.Content>
        <FlatList
          data={groups} 
          keyExtractor={({ name }) => name}
          renderItem={({ item }) => <GroupCard title={item} />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => 
            <SubTitle>Você ainda não tem nenhuma turma.{'\n'}crie uma agora mesmo!</SubTitle>
          }
        />
      </S.Content>

      <S.Footer>
        <Button onPress={() => navigate('NewGroup')} title="Criar nova turma" />
      </S.Footer>
    </S.Container>
  )
}