import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Team } from '../models/team';
import { Game } from '../models/game';
import { Ladder } from '../models/ladder';
import { Standing, StandingTable } from '../models/standing'; 

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  public getAllTeams(): Observable<Team[]> {
    return this.http.get('https://api.squiggle.com.au/?q=teams').pipe(
      map((data: any) => data.teams.map((item: Team) => new Team(
        item.id,
        item.name,
        item.logo,
        item.abbrev
      ))));
  }

  findTeams(
    id: number, filter = '', sortOrder = 'asc',
    pageNumber = 0, pageSize = 3):  Observable<Team[]> {

    return this.http.get('/api/lessons', {
        params: new HttpParams()
            .set('od', id.toString())
            .set('filter', filter)
            .set('sortOrder', sortOrder)
            .set('pageNumber', pageNumber.toString())
            .set('pageSize', pageSize.toString())
    }).pipe(
        map(res =>  res["payload"])
    );
}

  public getTeam(id: number): Observable<Team[]> {
    return this.http.get('https://api.squiggle.com.au/?q=teams;team=' + id.toString()).pipe(
      map((data: any) => data.teams.map((item: any) => new Team(
        item.id,
        item.name,
        item.logo,
        item.abbrev
      ))));
  }

  public getGame(gameID: number): Observable<Game[]> {
    return this.http.get('https://api.squiggle.com.au/?q=games;game=' + gameID.toString()).pipe(
        map((data: any) => data.games.map((item: any) => new Game(
          item.winnerteamid,
          item.id,
          item.abehinds,
          item.tz,
          item.hteamid,
          item.date,
          item.ascore,
          item.venue,
          item.updated,
          item.complete,
          item.agoals,
          item.hscore,
          item.round,
          item.winner,
          item.hteam,
          item.year,
          item.hgoals,
          item.ateam,
          item.is_final,
          item.ateamid,
          item.hbehinds,
          item.is_grand_final,
        )))
      );
  }

  public getGamesByYear(year: number): Observable<Game[]> {
    return this.http.get('https://api.squiggle.com.au/?q=games;year=' + year.toString()).pipe(
    // return this.http.get('https://api.squiggle.com.au/?q=games;year=2020').pipe(
      map((data: any) => data.games.map((item: any) => new Game(
        item.winnerteamid,
        item.id,
        item.abehinds,
        item.tz,
        item.hteamid,
        item.date,
        item.ascore,
        item.venue,
        item.updated,
        item.complete,
        item.agoals,
        item.hscore,
        item.round,
        item.winner,
        item.hteam,
        item.year,
        item.hgoals,
        item.ateam,
        item.is_final,
        item.ateamid,
        item.hbehinds,
        item.is_grand_final,
      )))
    );
  }

  public getGamesByYearRound(year: number, round: number): Observable<Game[]> {
    'https://api.squiggle.com.au/?q=games;year=' + year.toString() + ';round=' + round.toString()
    return this.http.get('https://api.squiggle.com.au/?q=games;year=${year};round=${round}').pipe(
    // return this.http.get('https://api.squiggle.com.au/?q=games;round=1;year=2020').pipe(
      map((data: any) => data.games.map((item: any) => new Game(
        item.winnerteamid,
        item.id,
        item.abehinds,
        item.tz,
        item.hteamid,
        item.date,
        item.ascore,
        item.venue,
        item.updated,
        item.complete,
        item.agoals,
        item.hscore,
        item.round,
        item.winner,
        item.hteam,
        item.year,
        item.hgoals,
        item.ateam,
        item.is_final,
        item.ateamid,
        item.hbehinds,
        item.is_grand_final,
      )))
    );
  }

  public getGamesByYearCompletedPercent(year: number, percent: any): Observable<Game[]> {
    return this.http.get('https://api.squiggle.com.au/?q=games;year=' + year.toString() + ';complete=' + percent.toString()).pipe(
      map((data: any) => data.games.map((item: any) => new Game(
        item.winnerteamid,
        item.id,
        item.abehinds,
        item.tz,
        item.hteamid,
        item.date,
        item.ascore,
        item.venue,
        item.updated,
        item.complete,
        item.agoals,
        item.hscore,
        item.round,
        item.winner,
        item.hteam,
        item.year,
        item.hgoals,
        item.ateam,
        item.is_final,
        item.ateamid,
        item.hbehinds,
        item.is_grand_final,
      )))
    );
  }

  public getCompletedGames(year: number): Observable<Game[]> {
    return this.http.get('https://api.squiggle.com.au/?q=games;year=' + year.toString() + ';complete=100').pipe(
      map((data: any) => data.games.map((item: any) => new Game(
        item.winnerteamid,
        item.id,
        item.abehinds,
        item.tz,
        item.hteamid,
        item.date,
        item.ascore,
        item.venue,
        item.updated,
        item.complete,
        item.agoals,
        item.hscore,
        item.round,
        item.winner,
        item.hteam,
        item.year,
        item.hgoals,
        item.ateam,
        item.is_final,
        item.ateamid,
        item.hbehinds,
        item.is_grand_final,
      )))
    );
  }

  public getPredictedLaddersByYear(year: number): Observable<Ladder[]> {
    return this.http.get('https://api.squiggle.com.au/?q=ladder;year=' + year.toString()).pipe(
      map((data: any) => data.ladder.map((item: any) => new Ladder(
        item.updated,
        item.mean_rank,
        item.sourceid,
        item.swarms,
        item.wins,
        item.year,
        item.source,
        item.team,
        item.rank,
        item.round,
        item.teamid,
        item.percentage.toFixed(2)
    ))));
  }

  public getPredictedLaddersAfterRound(year: number, round: number): Observable<Ladder[]> {
    return this.http.get('https://api.squiggle.com.au/?q=ladder;year=' + year.toString()+ ';round=' + round.toString()).pipe(
      map((data: any) => data.ladder.map((item: any) => new Ladder(
        item.updated,
        item.mean_rank,
        item.sourceid,
        item.swarms,
        item.wins,
        item.year,
        item.source,
        item.team,
        item.rank,
        item.round,
        item.teamid,
        item.percentage.toFixed(2)
    ))));
  }

  public getStandings(): Observable<StandingTable[]> {
    return this.http.get('https://api.squiggle.com.au/?q=standings').pipe(
      map((data: any) => data.standings.map((item: any) => new Standing(
        item.id,
        item.pts,
        item.behinds_for,
        item.played,
        item.goals_for,
        item.rank,
        item.name,
        item.losses,
        item.against,
        item.draws,
        item.percentage.toFixed(2),
        item.goals_against,
        item.dfor,
        item.behinds_against,
        item.wins,
    ))));
  }
}
