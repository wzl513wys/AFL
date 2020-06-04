import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { APIService } from '../services/api.service';
import { DataService } from '../services/data.service';
import { IStandingTable, StandingTable } from '../models/standing';
import { ITeam, Team } from '../models/team';

@Component({
  selector: 'teams-comparison',
  templateUrl: './teams-comparison.component.html',
  styleUrls: ['./teams-comparison.component.css']
})
export class TeamsComparisonComponent implements OnInit {
  standings: IStandingTable[];
  teams: ITeam[];
  teamsname = [];
  selectedTeam1: ITeam;
  selectedTeam2: ITeam;
  team1Rank: IStandingTable;
  team2Rank: IStandingTable;

  title = "Team Comparison";
  devices = 'one two three'.split(' ');
  selectedDevice = 'two';
  
  deviceObjects = [{name: 1}, {name: 2}, {name: 3}];
  selectedDeviceObj = this.deviceObjects[1];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private apiService: APIService, 
              private dataService: DataService
  ) { console.clear(); }
  
  ngOnInit(){
    this.teams = this.route.snapshot.data['teams'].teams;
    this.standings = this.route.snapshot.data['standings'].standings;
    for (let t of this.teams) {
      this.teamsname.push(t.name);
    }
    this.selectedTeam1 = this.teams[0];
    this.selectedTeam2 = this.teams[1];
    for(let r of this.standings) {
      if(this.selectedTeam1.id == r.id) {
        this.team1Rank = r;
      }
      if(this.selectedTeam2.id == r.id) {
        this.team2Rank = r;
      }
    }

    console.log("team1Rank", this.team1Rank);
  }

  onChangeObj(newObj, index) {
    console.log(newObj);
    if (index == 1) {
      this.selectedTeam1 = newObj;
      for(let r of this.standings) {
        if(this.selectedTeam1.id == r.id) {
          this.team1Rank = r;
        }
      }
      console.log("team1Rank", this.team1Rank);
    } else if (index == 2) {
      this.selectedTeam2 = newObj;
      for(let r of this.standings) {
        if(this.selectedTeam2.id == r.id) {
          this.team2Rank = r;
        }
      }
    }
    // ... do other stuff here ...
  }


}