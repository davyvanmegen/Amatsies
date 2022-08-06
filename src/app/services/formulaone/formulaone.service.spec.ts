import { TestBed } from '@angular/core/testing';

import { FormulaoneService } from './formulaone.service';

describe('FormulaoneService', () => {
  let service: FormulaoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormulaoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
