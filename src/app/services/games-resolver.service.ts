import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import { DataService } from './data.service';

@Injectable()
export class GamesResolver implements Resolve<any> {
  year: number = 2019;
  
  constructor(private dataService: DataService) {
  }

  resolve() {
    return this.dataService.getGamesByYear(this.year);
  }
}