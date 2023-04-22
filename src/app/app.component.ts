import {Component} from '@angular/core';
import {setTheme} from 'ngx-bootstrap/utils';
import {BsModalService} from 'ngx-bootstrap/modal';
import {ModalNewExpenseComponent} from './modal-new-expense/modal-new-expense.component';
import {ExpenseCategory} from './types';
import {StateRepositoryService} from './state-repository.service';
import {BsLocaleService} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private modalService: BsModalService,
              private bsLocaleService: BsLocaleService,
              public repo: StateRepositoryService) {
    bsLocaleService.use('ru');
    setTheme('bs5');
  }

  openNewExpenseModal(category: ExpenseCategory) {
    this.modalService.show(ModalNewExpenseComponent, {
      initialState: {category}
    });
  }
}
