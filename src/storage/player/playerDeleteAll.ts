import { PLAYER_COLLECTION } from "@constants/storage"
import AsyncStorage from "@react-native-async-storage/async-storage"

export async function playerDeleteAll(group: string) {
  try {
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${group}`)
  } catch (error) {
    throw error
  }
}