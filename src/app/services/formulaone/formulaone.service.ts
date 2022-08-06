import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormulaoneService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  public getDriverStandings(year: string): Observable<any> {
    return this.http.get(`https://ergast.com/api/f1/${year}/driverStandings.json`);
  }
}
