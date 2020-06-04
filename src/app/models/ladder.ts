export class Ladder {
  updated: string
  mean_rank: string
  sourceid: number
  swarms: string[]
  wins: string
  year: number
  source: string
  team: string
  rank: number
  round: number
  teamid: number
  percentage: string
  
  constructor(updated, mean_rank, sourceid, swarms, wins, year, source, team, rank, round, teamid, percentage) {
    this.updated = updated;
    this.mean_rank = mean_rank;
    this.sourceid = sourceid;
    this.swarms = swarms;
    this.wins = wins;
    this.year = year;
    this.source = source;
    this.team = team;
    this.rank = rank;
    this.round = round;
    this.teamid = teamid;
    this.percentage = percentage;
  }
}