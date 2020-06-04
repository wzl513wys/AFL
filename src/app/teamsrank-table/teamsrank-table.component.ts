import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { APIService } from '../services/api.service';
import { DataService } from '../services/data.service';
import { IStandingTable, StandingTable } from '../models/standing';
import { ITeam, Team } from '../models/team';

@Component({
  selector: 'app-teamsrank',
  templateUrl: './teamsrank-table.component.html',
  styleUrls: ['./teamsrank-table.component.css']
})
export class TeamsrankTableComponent implements OnInit {
  years = [2020, 2019]
  standings: IStandingTable[];
  teams: ITeam[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private apiService: APIService, 
              private dataService: DataService
  ) { }

  ngOnInit() {
    this.teams = this.route.snapshot.data['teams'].teams;
    this.standings = this.route.snapshot.data['standings'].standings;
    
    console.log("resolver teams:", this.teams);
    console.log("resolver standings:", this.standings);
  }
  // getStandings(){
  //   this.apiService.getStandings().subscribe(res =>{
  //     this.standings = res;
  //   });
  // }

  // getTeams() {
  //   this.apiService.getAllTeams().subscribe(res => { 
  //     this.teams = res; 
  //   });
  // }

  // getTeamRank() {
  //   this.apiService.getStandings().subscribe((res: any[]) => {
  //     this.teamsrank = res;
  //     for(let i = 0; i < this.teamsrank.length; i++) {
  //       this.apiService.getTeam(this.teamsrank[i].id).subscribe((res: any)=>{
  //         this.teamsrank[i].team = res[0];
  //       }) 
  //     }
  //     console.log("teamsrank", this.teamsrank);
  //   })  
  // }

  navigateToDetail(id: number) {
    this.router.navigate(['/team-detail/', id]);
  }

}
