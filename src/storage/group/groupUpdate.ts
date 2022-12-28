import { GROUP_COLLECTION } from "@constants/storage"
import AsyncStorage from "@react-native-async-storage/async-storage"

export async function groupUpdate(groups: string[]) {
  try {
    const storage = JSON.stringify(groups)

    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  }catch(err) {
    throw err
  }
}