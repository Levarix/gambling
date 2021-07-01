import { Team } from "./team.model"

export interface Bet {
    id: string
    createdAt: Date
    firstTeam: Team
    secondTeam: Team
    matchDetails: {
        startAt: Date
        endAt: Date
    }
    betDetails: {
        firstTeamWon: number
        secondTeamWon: number
        draw: number
    }
}
