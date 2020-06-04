import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { APIService } from '../services/api.service';
import { DataService } from '../services/data.service';
import { IStandingTable, StandingTable } from '../models/standing';
import { ITeam, Team } from '../models/team';
import { IGame, Game } from '../models/game';
import { Sort } from '@angular/material';

@Component({
  selector: 'game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: IGame[];
  teams: ITeam[];
  @Input() sortBy: string;
  visibleGames: IGame[] = [];

  years = [2020, 2019]
  selectedYear: number;
  categories = ['Full Season', 'Round']
  selectedCategory = ''
  sortsBy = ['Points', 'Rank', 'Wins', 'Losses', 'Played', 'Percentage']
  selectedSortBy = '';
  rounds: Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  selectedRound: number;



  constructor(private router: Router,
              private route: ActivatedRoute,
              private apiService: APIService, 
              private dataService: DataService
  ) { }

  ngOnInit() {
    this.teams = this.route.snapshot.data['teams'].teams;
    this.games = this.route.snapshot.data['games'].games;
    this.visibleGames = this.games.slice(0);
    console.log("resolver teams:", this.teams);
    console.log("resolver games:", this.games);

    this.selectedYear = this.years[0];
    this.selectedCategory = this.categories[0];
    this.selectedSortBy = this.sortsBy[0];
    this.selectedRound = this.rounds[0];
  }

  navigateToDetail(id: number) {
    this.router.navigate(['/game/', id]);
  }

  sortGame(sort: Sort) {
    const data = this.games.slice();
    if (!sort.active || sort.direction === '') {
      this.visibleGames = data;
      return;
    }
    this.visibleGames = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
          case 'date': return compare(a.date, b.date, isAsc);
          case 'hscore': return compare(a.hscore, b.hscore, isAsc);
          case 'ascore': return compare(a.ascore, b.ascore, isAsc);
          case 'hteam': return compare(a.hteam, b.hteam, isAsc);
          case 'ateam': return compare(a.ateam, b.ateam, isAsc);
          default: return 0;
      } 
    });
  }

  onChangeObj(newObj, filterBy) {
    console.log(newObj);
    if(filterBy === 'year') {
      this.selectedYear = newObj;
    } else if(filterBy === 'category') {
      this.selectedCategory = newObj;
    } else if(filterBy === 'round') {
      this.selectedRound = newObj;
    } else if(filterBy === 'sortBy') {
      this.selectedSortBy = newObj;
    } 
    // ... do other stuff here ...
  }

  showFilter() {
    if(this.selectedCategory === 'Full Season') {
      this.dataService.getGamesByYear(this.selectedYear).subscribe((res: any) => {
        this.visibleGames = res.games;
        console.log(this.visibleGames)
      })
    } else if (this.selectedCategory === 'Round') {
      this.dataService.getGamesByYearRound(this.selectedYear, this.selectedRound).subscribe((res: any) => {
        this.visibleGames = res.games;
        console.log(this.visibleGames)
      })
    }
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

function sortByHNameAsc(g1: IGame, g2: IGame) {
  if(g1.hteam > g2.hteam) return 1
  else if(g1.hteam === g2.hteam) return 0
  else return -1
}
function sortByHScoreDesc(g1: IGame, g2: IGame) {
  return g2.hscore - g1.hscore;
}
function sortByGameTimeFromLatest(g1: IGame, g2: IGame) {
  return g2.date - g1.date;
}


