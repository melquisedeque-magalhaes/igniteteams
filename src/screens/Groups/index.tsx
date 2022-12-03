import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { SubTitle } from "@components/SubTitle";
import { useState } from "react";
import { FlatList } from "react-native";
import * as S from "./styles";

interface Group {
  name: string
}

export function Groups() {

  const [groups, setGroups] = useState<Group []>([{ name: 'Galerinha da Rocketseat' }])

  return (
    <S.Container>
      <Header />

      <Highlight title="Turmas" subTitle="jogue com a sua turma" />

      <S.Content>
        <FlatList
          data={groups} 
          keyExtractor={({ name }) => name}
          renderItem={({ item }) => <GroupCard title={item.name} />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => 
            <SubTitle>Você ainda não tem nenhuma turma.{'\n'}crie uma agora mesmo!</SubTitle>
          }
        />
      </S.Content>

      <S.Footer>
        <Button title="Criar nova turma" />
      </S.Footer>
    </S.Container>
  )
}