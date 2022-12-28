import { PLAYER_COLLECTION } from "@constants/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Player } from "@typings/Player";
import { AppError } from "@utils/App.Error";
import { playerGetByGroup } from "./playerGetByGroup";

export async function playerCreate(newPlayer: Player, group: string) {
  try {
    const players = await playerGetByGroup(group)
    
    const playerAlreadyExist = players.find(player => player.name === newPlayer.name)
    
    if(playerAlreadyExist)
      throw new AppError('Jogador ja cadastrado!')
    
    const storage = JSON.stringify([...players, newPlayer])

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  }catch(error) {
    throw error
  }
}