import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import { DataService } from './data.service';

@Injectable()
export class TeamsResolver implements Resolve<any> {

  constructor(private dataService: DataService) {
  }

  resolve() {
    return this.dataService.getTeams();
  }
}