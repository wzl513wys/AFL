import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ITeam, Team } from '../models/team';
import { IGame, Game } from '../models/game';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  year: number = 2019;
  games: Game[];
  currGame: IGame;
  teams: ITeam[];

  constructor(private apiService: APIService, 
    private route:ActivatedRoute, 
    private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.currGame = this.route.snapshot.data['game'].games[0];
    this.teams = this.route.snapshot.data['teams'].teams;
    console.log("resolver game: ", this.currGame);
    console.log("resolver teams: ", this.teams);
    // this.getGameDetail();
    // this.getTeams();
  }

  getGames() {
    this.apiService.getGamesByYear(this.year).subscribe(res =>{
      this.games = res;
    });
  }

  getGameDetail(){
    console.log(this.currGame.id);
    this.apiService.getGame(this.currGame.id).subscribe((res: any)=>{
      this.currGame = res[0];
      console.log("currGame", res[0]);
    });  
  }

  getTeams() {
    this.apiService.getAllTeams().subscribe(res => { 
      this.teams = res; 
      console.log("this.teams", this.teams);
    });
  }

  goBack(): void{
    this.location.back();
  }

}
