import { Team } from './team'

export interface IStandingTable {
  team?: Team
  id: number
  name: string
  rank: number
  pts: number
  behinds_for: number
  played: number
  goals_for: number 
  losses: number
  against: number
  draws: number
  percentage: number
  goals_against: number
  dfor: number
  behinds_against: number
  wins: number
}

export class Standing {
  id: number
  pts: number
  behinds_for: number
  played: number
  goals_for: number
  rank: number
  name: string
  losses: number
  against: number
  draws: number
  percentage: number
  goals_against: number
  dfor: number
  behinds_against: number
  wins: number
  
  constructor(id, pts, behinds_for, played, goals_for, rank, name, losses, against, draws, percentage, goals_against, dfor, behinds_against, wins) {
    this.id = id;
    this.pts = pts;
    this.behinds_for = behinds_for;
    this.played = played;
    this.goals_for = goals_for;
    this.rank = rank;
    this.name = name;
    this.losses = losses;
    this.against = against;
    this.draws = draws;
    this.percentage = percentage;
    this.goals_against = goals_against;
    this.dfor = dfor;
    this.behinds_against = behinds_against;
    this.wins = wins;
  }
}

export class StandingTable {
  team: Team
  id: number
  name: string
  rank: number
  pts: number
  behinds_for: number
  played: number
  goals_for: number 
  losses: number
  against: number
  draws: number
  percentage: number
  goals_against: number
  dfor: number
  behinds_against: number
  wins: number
  
  constructor(id, pts, behinds_for, played, goals_for, rank, name, losses, against, draws, percentage, goals_against, dfor, behinds_against, wins) {
    // this.team.id = id;
    // this.team.name = name;
    this.id = id;
    this.name = name;
    this.pts = pts;
    this.behinds_for = behinds_for;
    this.played = played;
    this.goals_for = goals_for;
    this.rank = rank;
    this.losses = losses;
    this.against = against;
    this.draws = draws;
    this.percentage = percentage;
    this.goals_against = goals_against;
    this.dfor = dfor;
    this.behinds_against = behinds_against;
    this.wins = wins;
  }
}