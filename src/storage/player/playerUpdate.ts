import { PLAYER_COLLECTION } from "@constants/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Player } from "@typings/Player";

interface playerUpdateProps {
  group: string
  players: Player[]
}

export async function playerUpdate({ group, players }: playerUpdateProps) {
  try {
    const storage = JSON.stringify(players)

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  }catch(err) {
    throw err
  }
}