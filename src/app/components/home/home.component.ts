import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormulaoneService } from 'src/app/services/formulaone/formulaone.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public standings: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(
    private readonly formulaoneService: FormulaoneService,
  ) { }

  ngOnInit(): void {
    this.formulaoneService.getDriverStandings('2022').subscribe((res) => {
      debugger;
      console.log(res.MRData.StandingsTable.StandingsLists[0].DriverStandings);
      this.standings.next(res.MRData.StandingsTable.StandingsLists[0].DriverStandings);
    });
  }
}
