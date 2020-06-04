import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../models/team';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {

  teams: Team[];

  constructor(private apiService: APIService, private router: Router) { }

  ngOnInit() {
    this.apiService.getAllTeams().subscribe((res: any[])=>{
      this.teams= res;
      console.log("teams", this.teams);
    })  
  }

  navigateToDetail(id: number) {
    this.router.navigate(['/team-detail/', id]);
  }

}
