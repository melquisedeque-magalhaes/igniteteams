import { groupCreate } from "@storage/group/groupCreate"
import { groupsGetAll } from "@storage/group/groupsGetAll"
import { AppError } from "@utils/App.Error"

export function useGroups() {

  async function addGroup(newGroup: string) {
    try {
      const groups = await groupsGetAll()

      const groupsAlreadyExists = groups.includes(newGroup)

      if(groupsAlreadyExists) {
        throw new AppError('Já existe um grupo com esse nome cadastrado!')
      }

      await groupCreate(newGroup)
    }catch(error) {
      throw error
    }
  }

  async function getAllGroups() {
    try {
      const data = await groupsGetAll()

      return data
    }catch (error) {
      throw error
    }
  }

  return { addGroup, getAllGroups }
}