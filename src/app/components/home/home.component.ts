import { Component, OnInit } from '@angular/core';
import { FormulaoneService } from 'src/app/services/formulaone/formulaone.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly formulaoneService: FormulaoneService,
  ) { }

  ngOnInit(): void {
    this.formulaoneService.logInConsole();
  }
}
