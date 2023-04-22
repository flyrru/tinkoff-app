import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ExpenseCategory} from '../types';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {StateRepositoryService} from '../state-repository.service';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-modal-new-expense',
  templateUrl: './modal-new-expense.component.html',
  styleUrls: ['./modal-new-expense.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalNewExpenseComponent {
  readonly datePickerConfig: Partial<BsDatepickerConfig> = {
    initCurrentTime: true,
    showTodayButton: true,
    dateInputFormat: 'DD.MM.YYYY',
    maxDate: new Date,
    todayButtonLabel: 'Сейчас'
  }

  category!: ExpenseCategory;

  sumModel!: string;
  dateModel = new Date();
  commentModel?: string;

  constructor(public bsModalRef: BsModalRef,
              public repo: StateRepositoryService) {
  }

  onSubmit() {
    this.repo.createExpense({
      id: 0,
      category: this.category,
      date: this.dateModel,
      sum: this.sumModel
    });
    this.bsModalRef.hide();
  }
}
