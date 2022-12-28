import { playerCreate } from "@storage/player/playerCreate";
import { playerGetByGroup } from "@storage/player/playerGetByGroup";
import { playerUpdate } from "@storage/player/playerUpdate";
import { Player } from "@typings/Player";

interface addNewPlayerProps {
  newPlayer: Player
  group: string
}

interface getPlayerByGroupAndTeamProps {
  group: string
  team: string
}

interface removePlayerByGroupProps {
  playerName: string
  group: string
}

export function usePlayer() {
  async function addNewPlayer({ group, newPlayer }: addNewPlayerProps) {
    try {
      await playerCreate(newPlayer, group)
    }catch(error) {
      throw error
    }
  }

  async function getPlayerByGroup(group: string) {
    try {
      const players = await playerGetByGroup(group)

      return players
    }catch(error) {
      throw error
    }
  }

  async function getPlayerByGroupAndTeam({ group, team }: getPlayerByGroupAndTeamProps) {
    try {
      const players = await playerGetByGroup(group)

      const playerByTeam = players.filter(player => player.team === team)

      return playerByTeam
    }catch(error) {
      throw error
    }
  }

  async function removePlayerByGroup({ group, playerName }: removePlayerByGroupProps) {
    try {
      const players = await playerGetByGroup(group)

      const playerFilterByName = players.filter(player => player.name !== playerName)

      await playerUpdate({ group, players: playerFilterByName })
    }catch(error) {
      throw error
    }
  }

  return {
    addNewPlayer,
    getPlayerByGroup,
    getPlayerByGroupAndTeam,
    removePlayerByGroup
  }
}