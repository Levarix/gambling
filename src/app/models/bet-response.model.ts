
export interface BetResponse {
  id: string
  createdAt: Date
  firstTeamId: string
  secondTeamId: string
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
