import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ITeam } from '../models/team';
import { IGame } from '../models/game';
import { Ladder } from '../models/ladder';
import { ITip } from '../models/tip';
import { IStandingTable } from '../models/standing'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getTips(year?: number, round?: number):Observable<ITip[]> {
    if(year && round) {
      return this.http.get<ITip[]>('https://api.squiggle.com.au/?q=tips;year=' + year.toString() + ';round=' + round.toString())
      .pipe(catchError(this.handleError<ITip[]>('getTipsYearRound', [])))
    } else if (year) {
      return this.http.get<ITip[]>('https://api.squiggle.com.au/?q=tips;year=' + year.toString())
      .pipe(catchError(this.handleError<ITip[]>('getTipsByYear', [])))
    } else {
      return this.http.get<ITip[]>('https://api.squiggle.com.au/?q=tips')
      .pipe(catchError(this.handleError<ITip[]>('getTips', [])))
    }
  }

  getTipsByYear(year: number):Observable<ITip[]> {
    return this.http.get<ITip[]>('https://api.squiggle.com.au/?q=tips;year=' + year.toString())
      .pipe(catchError(this.handleError<ITip[]>('getTipsByYear', [])))
  }

  getTipsByYearRound(year: number, round: number):Observable<ITip[]> {
    return this.http.get<ITip[]>('https://api.squiggle.com.au/?q=tips;year=' + year.toString() + ';round=' + round.toString())
      .pipe(catchError(this.handleError<ITip[]>('getTipsByYear', [])))
  }

  getTeams():Observable<ITeam[]> {
    return this.http.get<ITeam[]>('https://api.squiggle.com.au/?q=teams')
      .pipe(catchError(this.handleError<ITeam[]>('getTeams', [])))
  }

  getTeam(id:number):Observable<ITeam[]> {
    return this.http.get<ITeam[]>('https://api.squiggle.com.au/?q=teams;team=' + id.toString())
      .pipe(catchError(this.handleError<ITeam[]>('getTeam')))
  }

  getStandings():Observable<IStandingTable[]> {
    return this.http.get<IStandingTable[]>('https://api.squiggle.com.au/?q=standings')
      .pipe(catchError(this.handleError<IStandingTable[]>('getStandings', [])))
  }

  getGames():Observable<IGame[]> {
    return this.http.get<IGame[]>('https://api.squiggle.com.au/?q=games')
      .pipe(catchError(this.handleError<IGame[]>('getGames', [])))
  }

  getGamesByYear(year: number):Observable<IGame[]> {
    return this.http.get<IGame[]>('https://api.squiggle.com.au/?q=games;year=' + year.toString())
      .pipe(catchError(this.handleError<IGame[]>('getGames', [])))
  }

  getGame(id:number):Observable<IGame[]> {
    return this.http.get<IGame[]>('https://api.squiggle.com.au/?q=games;game=' + id.toString())
      .pipe(catchError(this.handleError<IGame[]>('getGame')))
  }
  getGamesByYearRound(year: number, round: number):Observable<ITip[]> {
    return this.http.get<ITip[]>('https://api.squiggle.com.au/?q=games;year=' + year.toString() + ';round=' + round.toString())
      .pipe(catchError(this.handleError<ITip[]>('getGamesByYearRound', [])))
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}