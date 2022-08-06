import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaoneComponent } from './formulaone.component';

describe('FormulaoneComponent', () => {
  let component: FormulaoneComponent;
  let fixture: ComponentFixture<FormulaoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
