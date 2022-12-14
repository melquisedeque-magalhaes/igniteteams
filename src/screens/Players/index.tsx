import { useEffect, useRef, useState } from "react";
import { Alert, FlatList, TextInput } from "react-native";
import { useTheme } from "styled-components/native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Title } from "@components/Title";
import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { ButtonSelectTeam } from "@components/ButtonSelectTeam";
import { CardPlayer } from "@components/CardPlayer";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { SubTitle } from "@components/SubTitle";

import { usePlayer } from "@hooks/usePlayer";
import { useGroups } from "@hooks/useGroups";

import { AppError } from "@utils/App.Error";

import { Player } from "@typings/Player";

import { Container, Content, Footer, Form, HeaderTeams } from "./styles";
import { Loading } from "@components/Loading";

type RouteParams = {
  group: string
}

export function Players() {
  const [teamSelected, setTeamSelected] = useState('Time A')
  const [players, setPlayers] = useState<Player []>([])
  
  const [isLoading, setIsLoading] = useState(true)

  const [newPlayerName, setNewPlayerName] = useState('')

  const { addNewPlayer, getPlayerByGroupAndTeam, removePlayerByGroup } = usePlayer()

  const { deleteGroup } = useGroups()

  const { navigate } = useNavigation()

  const { COLORS } = useTheme()

  const route = useRoute()

  const { group } = route.params as RouteParams

  const inputNamePlayerRef = useRef<TextInput>(null)

  async function handleAddNewPlayer() {
    
    if(!newPlayerName.trim())
      return Alert.alert('Novo Jogador', 'Digite o nome do jogador!')

    try {
      const newPlayer: Player = {
        team: teamSelected,
        name: newPlayerName
      }

      await addNewPlayer({ group, newPlayer })

      inputNamePlayerRef?.current?.blur()

      setNewPlayerName('')

      getPlayerByTeam()

    }catch(error) {
      if(error instanceof AppError)
        return Alert.alert('Novo Jogador', error.message)

      Alert.alert('Novo Jogador', 'N??o foi poss??vel adicionar um novo jogador!')
    } 
  }

  async function getPlayerByTeam() {
    try {
      setIsLoading(true)

      const playersByTeam = await getPlayerByGroupAndTeam({ group, team: teamSelected })

      setPlayers(playersByTeam)
    }catch(err) {
      Alert.alert('Novo Jogador', 'N??o foi poss??vel carregar jogadores')
    } finally{
      setIsLoading(false)
    }
  }

  async function removePlayer(playerName: string) {
    try {
      await removePlayerByGroup({ group, playerName })

      getPlayerByTeam()
    }catch(err) {
      Alert.alert('Novo Jogador', 'N??o foi poss??vel remover o jogador!')
    }
  }

  async function handleRemovePlayer(name: string) {
    Alert.alert('Novo Jogador',`Tem certeza que deseja remover o jogador ${name}`, [
      {
        text: 'Cancelar',
        style: 'cancel'
      },
      {
        text: 'Excluir',
        onPress: async () => await removePlayer(name)
      }
    ])
  }

  async function removeGroup() {
    try {
      await deleteGroup(group)

      navigate('Groups')

    }catch(err) {
      Alert.alert('Novo Jogador', 'N??o foi poss??vel remover o Grupo!')
    }
  }

  async function handleRemoveGroup() {
    Alert.alert('Novo Jogador',`Tem certeza que deseja deletar o grupo ${group}`, [
      {
        text: 'Cancelar',
        style: 'cancel'
      },
      {
        text: 'Excluir',
        onPress: async () => await removeGroup()
      }
    ])
  }

  useEffect(() => {
    getPlayerByTeam()
  }, [teamSelected])

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
            inputRef={inputNamePlayerRef}
            placeholder="Nome do participante"
            onChangeText={setNewPlayerName}
            value={newPlayerName}
            autoCorrect={false} 
            onSubmitEditing={handleAddNewPlayer}
            returnKeyType="done"
          />
          
          <ButtonIcon 
            color={COLORS.GREEN_500} 
            icon="Plus"
            onPress={handleAddNewPlayer}
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

        {
          isLoading ? <Loading /> : (
            <FlatList 
              data={players}
              keyExtractor={item => item.name}
              renderItem={
                ({ item }) => 
                  <CardPlayer 
                    onRemove={() => handleRemovePlayer(item.name)} 
                    name={item.name} 
                  />
              }
              showsVerticalScrollIndicator={false}
              style={{
                marginTop: 16
              }}
              ListEmptyComponent={() => 
                <SubTitle>N??o ha pessoas nesse time!</SubTitle>
              }
              contentContainerStyle={{ paddingBottom: 100  }}
            />
          )
        }

        
          
      </Content>

      <Footer>
        <Button onPress={handleRemoveGroup} title="Remover turma" variant="error" />
      </Footer>
    </Container>
  )
}