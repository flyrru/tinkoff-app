import {ChangeDetectionStrategy, Component, TrackByFunction} from '@angular/core';
import {StateRepositoryService} from '../state-repository.service';
import {Expense} from '../types';

@Component({
  selector: 'app-expenses-history',
  templateUrl: './expenses-history.component.html',
  styleUrls: ['./expenses-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpensesHistoryComponent {
  expensesTrackBy: TrackByFunction<Expense> = (index, {id}) => id;

  constructor(public repo: StateRepositoryService) {
  }
}
