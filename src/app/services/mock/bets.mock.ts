import { BetResponse } from "src/app/models/bet-response.model"
import { TEAMS_MOCK } from "./teams.mock"

export const LATEST_BETS_MOCK: BetResponse[] = [
    {
        id: "123",
        matchDetails: {
            startAt: new Date(2021, 7, 10, 18, 0, 0),
            endAt: new Date(2021, 7, 10, 20, 0, 0),
        },
        betDetails: {
            firstTeamWon: 2.4,
            secondTeamWon: 4.5,
            draw: 3.2,
        },
        createdAt: new Date(),
        firstTeamId: TEAMS_MOCK[0].id,
        secondTeamId: TEAMS_MOCK[1].id,
    },
    {
        id: "436",
        matchDetails: {
            startAt: new Date(2021, 7, 10, 21, 0, 0),
            endAt: new Date(2021, 7, 10, 23, 0, 0),
        },
        betDetails: {
            firstTeamWon: 1.4,
            secondTeamWon: 3.5,
            draw: 2.1,
        },
        createdAt: new Date(),
        firstTeamId: TEAMS_MOCK[2].id,
        secondTeamId: TEAMS_MOCK[3].id,
    },
    {
        id: "345",
        matchDetails: {
            startAt: new Date(2021, 7, 12, 14, 0, 0),
            endAt: new Date(2021, 7, 12, 16, 0, 0),
        },
        betDetails: {
            firstTeamWon: 4.2,
            secondTeamWon: 2,
            draw: 1.3,
        },
        createdAt: new Date(),
        firstTeamId: TEAMS_MOCK[2].id,
        secondTeamId: TEAMS_MOCK[4].id,
    },
]
