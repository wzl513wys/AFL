export interface IGame {
  winnerteamid: number
  id: number
  abehinds: number
  tz: string
  hteamid: number
  date: number
  ascore: number
  venue: string
  updated: string
  complete: number
  agoals: number
  hscore: number
  round: number
  winner: string
  hteam: string
  year: number
  hgoals: number
  ateam: string
  is_final: number
  ateamid: number
  hbehinds: number
  is_grand_final: number
}

export class Game {
  winnerteamid: number
  id: number
  abehinds: number
  tz: string
  hteamid: number
  date: number
  ascore: number
  venue: string
  updated: string
  complete: number
  agoals: number
  hscore: number
  round: number
  winner: string
  hteam: string
  year: number
  hgoals: number
  ateam: string
  is_final: number
  ateamid: number
  hbehinds: number
  is_grand_final: number

  constructor(
    winnerteamid, id, abehinds, tz, hteamid, date, ascore, venue, updated, complete, agoals, hscore, round, winner, hteam, year, hgoals, ateam, is_final, ateamid, hbehinds, is_grand_final
  ) {
    this.winnerteamid = winnerteamid;
    this.id = id;
    this.abehinds = abehinds;
    this.tz = tz;
    this.hteamid = hteamid;
    this.date = date;
    this.ascore = ascore;
    this.venue = venue;
    this.updated = updated;
    this.complete = complete;
    this.agoals = agoals;
    this.hscore = hscore;
    this.round = round;
    this.winner = winner;
    this.hteam = hteam;
    this.year = year;
    this.hgoals = hgoals;
    this.ateam = ateam;
    this.is_final = is_final;
    this.ateamid = ateamid;
    this.hbehinds = hbehinds;
    this.is_grand_final = is_grand_final;
  }

}
