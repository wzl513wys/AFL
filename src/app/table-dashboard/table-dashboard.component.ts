import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team';
import { Game } from '../models/game';
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-table-dashboard',
  templateUrl: './table-dashboard.component.html',
  styleUrls: ['./table-dashboard.component.css']
})
export class TableDashboardComponent implements OnInit {

  teams: Team[];
  games: Game[];

  constructor(private apiService: APIService) {
  }

  ngOnInit() {
    this.getAllTeams();
    this.getGames();
  }

  getAllTeams(): void {
    this.apiService.getAllTeams().subscribe(temp => { this.teams = temp; });
  }

  getGames(): void {
    this.apiService.getGamesByYearRound(2019, 1).subscribe(temp => { this.games = temp; });
  }
}
