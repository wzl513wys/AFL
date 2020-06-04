import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { DataService } from '../services/data.service';
import { IStandingTable, StandingTable } from '../models/standing';
import { ITeam, Team } from '../models/team';
import { IGame, Game } from '../models/game';
import { Sort } from '@angular/material';
import { ITip } from '../models/tip';

@Component({
  selector: 'tips-list',
  templateUrl: './tips-list.component.html',
  styleUrls: ['./tips-list.component.css']
})
export class TipsListComponent implements OnInit {
  tips: ITip[];
  games: IGame[];
  teams: ITeam[];
  @Input() sortBy: string;
  visibleTips: ITip[] = [];
  selectedTeam: ITeam;

  constructor(private router: Router,
              private route: ActivatedRoute, 
              private dataService: DataService
  ) { }

  ngOnInit() {
    this.tips = this.route.snapshot.data['tips'].tips;
    this.teams = this.route.snapshot.data['teams'].teams;
    this.games = this.route.snapshot.data['games'].games;
    this.selectedTeam = this.teams[0];
    this.visibleTips = this.tips.slice(0);
    console.log("resolver tips:", this.tips);
  }

  sortTips(sort: Sort) {
    const data = this.tips.slice();
    if (!sort.active || sort.direction === '') {
      this.visibleTips = data;
      return;
    }
    this.visibleTips = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
          case 'date': return compare(a.date, b.date, isAsc);
          case 'updated': return compare(a.updated, b.updated, isAsc);
          case 'tip': return compare(a.tip, b.tip, isAsc);
          case 'round': return compare(a.round, b.round, isAsc);
          case 'margin': return compare(a.margin, b.margin, isAsc);
          case 'bits': return compare(a.bits, b.bits, isAsc);
          case 'confidence': return compare(a.confidence, b.confidence, isAsc);
          case 'hteam': return compare(a.hteam, b.hteam, isAsc);
          case 'ateam': return compare(a.ateam, b.ateam, isAsc);
          default: return 0;
      } 
    });
  }

  onChangeObj(newObj, filterBy) {
    console.log(newObj);
    if(filterBy === 'team') {
      this.selectedTeam = newObj;
    }
    // ... do other stuff here ...
  }

  showFilter() {
    this.visibleTips = [];
    for(let t of this.tips) {
      if(t.ateamid == this.selectedTeam.id || t.hteamid == this.selectedTeam.id) {
        this.visibleTips.push(t);
      } 
    }

    console.log("after showFilter: ", this.visibleTips);
  }

  // navigateToDetail(id: number) {
  //   this.router.navigate(['/game/', id]);
  // }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
