import { PLAYER_COLLECTION } from "@constants/storage"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Player } from "@typings/Player"

export async function playerGetByGroup(group: string) {
  try{
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`)

    const players: Player[] = storage ? JSON.parse(storage) : []

    return players
  }catch(error) {
    throw error
  }
}