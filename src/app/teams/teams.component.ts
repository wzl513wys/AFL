import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
// import {MatTableDataSource} from '@angular/material/table';
import {DataSource} from '@angular/cdk/collections';
import {Observable, merge, fromEvent } from 'rxjs';
import {debounceTime, distinctUntilChanged, startWith, tap, delay} from 'rxjs/operators';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Team } from '../models/team';
import { Game } from '../models/game';
import { APIService } from '../services/api.service';
import { TeamsDataSource } from './teams.datasource';


@Component({
  selector: 'teams-list',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit, AfterViewInit {
  team: Team;

  teams: Team[];
  games: Game[];
  dataSource: TeamsDataSource;
  displayedColumns: string[] = ['id', 'name'];
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('input', {static: false}) input: ElementRef;

  constructor(private route: ActivatedRoute, private apiService: APIService,) {
    // this.getAllTeams();
    // this.getGames();
    // console.log("teams", this.teams);
    // this.dataSource = new TeamDataSource(this.apiService)
  }

  ngOnInit() {
    this.team = this.route.snapshot.data["team"];
    this.getAllTeams();
    this.getGames();
    this.dataSource = new TeamsDataSource(this.apiService)
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    fromEvent(this.input.nativeElement,'keyup')
        .pipe(
            debounceTime(150),
            distinctUntilChanged(),
            tap(() => {
                this.paginator.pageIndex = 0;

                this.loadTeamsPage();
            })
        )
        .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
    .pipe(
        tap(() => this.loadTeamsPage())
    )
    .subscribe();

}

  getAllTeams() {
    this.apiService.getAllTeams().subscribe(temp => { 
      this.teams = temp;
    });
  }

  getGames(): void {
    this.apiService.getGamesByYearRound(2019, 1).subscribe(temp => { this.games = temp; });
  }

  loadTeamsPage() {
      this.dataSource.loadTeams(
          this.team.id,
          this.input.nativeElement.value,
          this.sort.direction,
          this.paginator.pageIndex,
          this.paginator.pageSize);
  }

}

export class TeamDataSource extends DataSource<any> {
  constructor(private apiService: APIService) {
    super();
  }
  connect(): Observable<Team[]> {
    return this.apiService.getAllTeams();
  }
  disconnect() {}
}