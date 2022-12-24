import { GROUP_COLLECTION } from "@constants/storage"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { groupsGetAll } from "./groupsGetAll"

export async function groupCreate(newGroup: string) {
  try {
    const storageGroups = await groupsGetAll()

    const storage = JSON.stringify([...storageGroups, newGroup])

    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  }catch (error) {
    throw error
  }
}