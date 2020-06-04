import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {
  MatButtonModule, 
  MatNativeDateModule, 
  MatIconModule, 
  MatSidenavModule, 
  MatListModule, 
  MatToolbarModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule
} from '@angular/material';

import { AppCommonModule } from './common/common.module';
import { APIService } from './services/api.service';
import { DataService } from './services/data.service';
import { TeamsResolver } from './services/teams-resolver.service';
import { TeamResolver } from './services/team-resolver.service';
import { StandingsResolver } from './services/standings-resolver.service';
import { GamesResolver } from './services/games-resolver.service';
import { GameResolver } from './services/game-resolver.service';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { SwaggerComponent } from './swagger/swagger.component';
import { TableDashboardComponent } from './table-dashboard/table-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamsTableComponent } from './teams-table/teams-table.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { TeamsrankTableComponent } from './teamsrank-table/teamsrank-table.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { TeamsComparisonComponent } from './teams-comparison/teams-comparison.component';
import { TipsListComponent } from './prediction/tips-list.component';
import { TipsResolver } from './services/tips-resolver.service';
// import { FooterComponent } from './commom/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    SwaggerComponent,
    TableDashboardComponent,
    TeamsTableComponent,
    TeamDetailsComponent,
    TeamsrankTableComponent,
    GameListComponent,
    GameDetailsComponent,
    TeamsComparisonComponent,
    TipsListComponent,
    // FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatNativeDateModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule, 
    MatToolbarModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    AppCommonModule
  ],
  providers: [
    APIService,
    DataService,
    TeamsResolver,
    TeamResolver,
    StandingsResolver,
    GamesResolver,
    GameResolver,
    TipsResolver
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
