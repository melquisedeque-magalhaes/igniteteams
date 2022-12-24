import { useState } from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components/native";

import { Title } from "@components/Title";
import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { ButtonSelectTeam } from "@components/ButtonSelectTeam";
import { CardPlayer } from "@components/CardPlayer";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { SubTitle } from "@components/SubTitle";

import { Container, Content, Footer, Form, HeaderTeams } from "./styles";
import { useRoute } from "@react-navigation/native";

type RouteParams = {
  group: string
}

export function Players() {
  const [teamSelected, setTeamSelected] = useState('Time A')
  const [players, setPlayers] = useState([])

  const { COLORS } = useTheme()

  const route = useRoute()

  const { group } = route.params as RouteParams

  return (
    <Container>
      <Header isShowBackButton />

      <Content>
        <Title>{group}</Title>
        <SubTitle>
          adicione a galera e separe os times
        </SubTitle>

        <Form>
          <Input 
            placeholder="Nome do participante"
            autoCorrect={false} 
          />
          <ButtonIcon 
            color={COLORS.GREEN_500} 
            icon="Plus"
          />
        </Form>

        <HeaderTeams>
          <FlatList 
            data={['Time A', 'Time B']}
            keyExtractor={item => item}
            renderItem={({ item }) => <ButtonSelectTeam isSelected={teamSelected === item}  onPress={() => setTeamSelected(item)} title={item} />}
            horizontal
          />
          
          <SubTitle>{players.length}</SubTitle>
        </HeaderTeams>

        <FlatList 
          data={players}
          keyExtractor={item => item}
          renderItem={({ item }) => <CardPlayer onRemove={() => {}} name={item} />}
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: 16
          }}
          ListEmptyComponent={() => 
            <SubTitle>Não ha pessoas nesse time!</SubTitle>
          }
          contentContainerStyle={{ paddingBottom: 100  }}
        />
          
      </Content>

      <Footer>
        <Button title="Remover turma" variant="error" />
      </Footer>
    </Container>
  )
}