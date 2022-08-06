import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormulaoneService {

  constructor() { }

  public logInConsole() {
    console.log('test');
  }
}
