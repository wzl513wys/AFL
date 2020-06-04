import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ITeam, Team } from '../models/team';
import { Game } from '../models/game';
import { StandingTable } from '../models/standing';
import { APIService } from '../services/api.service';


@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  year: number = 2019;
  // currTeamID;
  currTeam: ITeam;
  standings: StandingTable[];
  completedGames: Game[];
  scheduledGames: Game[];
  teamVenuesWinGames: Game[] = [];
  venuesWins: Array<String> = [];
  teams: Team[];

  constructor(private apiService: APIService, 
              private route:ActivatedRoute, 
              private router: Router,
              private location:Location) { }

  ngOnInit() {
    // this.route.data.forEach((data) => {
    //   this.currTeam = data['team'].teams[0];
    // })
    this.currTeam = this.route.snapshot.data['team'].teams[0];
    console.log("resolve currTeam: ", this.currTeam);
    // this.getTeamDetail();
    this.getStandings();
    this.getScheduledGames();
    this.getCompletedGames();
    // this.getTeamVenuesWin();
    this.getTeams();
  }

  // getTeamDetail(){
  //   this.currTeamID = this.route.snapshot.paramMap.get('id');
  //   console.log(this.currTeamID);
  //   this.apiService.getTeam(this.currTeamID).subscribe((res: any)=>{
  //     this.currTeam = res[0];
  //     console.log("currTeam", res[0]);
  //   });  
  // }

  getStandings(){
    this.apiService.getStandings().subscribe(res =>{
      this.standings = res;
      console.log(this.standings);
    });
  }
  
  getCompletedGames() {
    this.apiService.getCompletedGames(this.year).subscribe(res =>{
      this.completedGames = res;
      console.log("completedGames", this.completedGames);
      for(let game of this.completedGames) {
        if(game.ateamid === this.currTeam.id || game.hteamid === this.currTeam.id) {
          console.log("this team played: ", game);
        }
      }

      this.getTeamVenuesWin();
    });
  }

  getScheduledGames() {
    this.apiService.getGamesByYearCompletedPercent(this.year, '!100').subscribe(res =>{
      this.scheduledGames = res;
      console.log("allGames", this.scheduledGames);
      for(let game of this.scheduledGames) {
        if(game.ateamid === this.currTeam.id || game.hteamid === this.currTeam.id) {
          console.log("scheduled games: ", game);
        }
      }
    });
  }

  getTeamVenuesWin() {
    for(let game of this.completedGames) {
      if(game.ateamid === this.currTeam.id || game.hteamid === this.currTeam.id) {
        if(game.winner === this.currTeam.name) {
          this.teamVenuesWinGames.push(game);
          this.venuesWins.push(game.venue);
        }
      }
    }
    console.log("Venues win: ", this.venuesWins);
  }
  
  getTeams() {
    this.apiService.getAllTeams().subscribe(res => { 
      this.teams = res; 
    });
  }

  goBack(): void{
    this.location.back();
  }

  navigateToTeam(id: number) {
    this.router.navigate(['/team-detail/', id]);
  }

}
