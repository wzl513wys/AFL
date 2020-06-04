import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SwaggerComponent } from './swagger/swagger.component';
import { TableDashboardComponent } from './table-dashboard/table-dashboard.component';
// import { TeamsComponent } from './teams/teams.component';
import { TeamsTableComponent } from './teams-table/teams-table.component'
import { TeamsrankTableComponent } from './teamsrank-table/teamsrank-table.component'
import { TeamDetailsComponent } from './team-details/team-details.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { TeamsComparisonComponent } from './teams-comparison/teams-comparison.component';
import { TeamsResolver } from './services/teams-resolver.service';
import { TeamResolver } from './services/team-resolver.service';
import { StandingsResolver } from './services/standings-resolver.service';
import { GamesResolver } from './services/games-resolver.service';
import { GameResolver } from './services/game-resolver.service';
import { TipsListComponent } from './prediction/tips-list.component';
import { TipsResolver } from './services/tips-resolver.service';

const routes: Routes = [
  { path: 'swagger', component: SwaggerComponent},
  // { path: '', component: TableDashboardComponent},
  { path: '', component: TeamsTableComponent},
  { path: 'teamranks', component: TeamsrankTableComponent, resolve: {teams: TeamsResolver, standings: StandingsResolver}},
  { path: 'team-detail/:id', component: TeamDetailsComponent, resolve: {team: TeamResolver} },
  { path: 'games', component: GameListComponent, resolve: {games: GamesResolver, teams: TeamsResolver} },
  { path: 'game/:id', component: GameDetailsComponent, resolve: {game: GameResolver, teams: TeamsResolver} },
  { path: 'prediction', component: TipsListComponent, resolve: {tips: TipsResolver, teams: TeamsResolver, games: GamesResolver} },
  { path: 'team-comparison', component: TeamsComparisonComponent, resolve: {teams: TeamsResolver, standings: StandingsResolver} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
