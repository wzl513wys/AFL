import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import { DataService } from './data.service';

@Injectable()
export class StandingsResolver implements Resolve<any> {
  
  constructor(private dataService: DataService) {
  }

  resolve() {
    return this.dataService.getStandings();
  }
}