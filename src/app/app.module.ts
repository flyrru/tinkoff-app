import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CategoriesComponent} from './categories/categories.component';
import {DatesRangeComponent} from './dates-range/dates-range.component';
import {ExpensesHistoryComponent} from './expenses-history/expenses-history.component';

import localeRu from '@angular/common/locales/ru';
import {registerLocaleData} from '@angular/common';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ModalNewExpenseComponent} from './modal-new-expense/modal-new-expense.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {ruLocale} from 'ngx-bootstrap/locale';
import {defineLocale} from 'ngx-bootstrap/chronos';

registerLocaleData(localeRu)
defineLocale('ru', ruLocale);

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CategoriesComponent,
    DatesRangeComponent,
    ExpensesHistoryComponent,
    ModalNewExpenseComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
