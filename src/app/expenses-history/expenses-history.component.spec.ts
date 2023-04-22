import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesHistoryComponent } from './expenses-history.component';

describe('ExpensesHistoryComponent', () => {
  let component: ExpensesHistoryComponent;
  let fixture: ComponentFixture<ExpensesHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
