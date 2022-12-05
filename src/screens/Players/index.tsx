import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { ButtonSelectTeam } from "@components/ButtonSelectTeam";
import { CardPlayer } from "@components/CardPlayer";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { SubTitle } from "@components/SubTitle";
import { Title } from "@components/Title";
import { useState } from "react";
import { FlatList } from "react-native";

import { useTheme } from "styled-components/native";
import { Container, Content, Footer, Form, HeaderTeams } from "./styles";

export function Players() {
  const [teamSelected, setTeamSelected] = useState('Time A')
  const [players, setPlayers] = useState(['Melqui'])

  const { COLORS } = useTheme()

  return (
    <Container>
      <Header isShowBackButton />

      <Content>
        <Title>Nova Turma</Title>
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
          renderItem={({ item }) => <CardPlayer />}
          showsVerticalScrollIndicator={false}
        />
          
      </Content>

      <Footer>
        <Button title="Remover turma" variant="error" />
      </Footer>
    </Container>
  )
}