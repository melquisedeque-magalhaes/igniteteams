import { groupCreate } from "@storage/group/groupCreate"
import { groupsGetAll } from "@storage/group/groupsGetAll"
import { groupUpdate } from "@storage/group/groupUpdate"
import { playerDeleteAll } from "@storage/player/playerDeleteAll"
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

  async function deleteGroup(groupDeleted: string) {
    try {
      const groups = await groupsGetAll()

      const filterGroups = groups.filter(group => group !== groupDeleted)

      await groupUpdate(filterGroups)
      await playerDeleteAll(groupDeleted)
    }catch (error) {
      throw error
    }
  }

  return { addGroup, getAllGroups, deleteGroup }
}