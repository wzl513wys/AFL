import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import { Observable, BehaviorSubject, of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { APIService } from '../services/api.service';
import { Team } from '../models/team';


export class TeamsDataSource implements DataSource<Team> {

    private teamsSubject = new BehaviorSubject<Team[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();

    constructor(private apiService: APIService) {}

    connect(collectionViewer: CollectionViewer): Observable<Team[]> {
      return this.teamsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
      this.teamsSubject.complete();
      this.teamsSubject.complete();
    }

    getAllTeams() {
      this.apiService.getAllTeams().subscribe(temp => this.teamsSubject.next(temp));
    }

    loadTeams(id: number, filter:string, sortDirection:string, pageIndex:number, pageSize:number) {
      this.loadingSubject.next(true);
      this.apiService.findTeams(id, filter,sortDirection,  pageIndex, pageSize).pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      ).subscribe(teams => this.teamsSubject.next(teams));
    }
}