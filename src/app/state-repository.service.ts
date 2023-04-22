import {createStore, select, setProps, withProps} from '@ngneat/elf';
import {Injectable, OnDestroy} from '@angular/core';
import {
  addEntities,
  entitiesPropsFactory,
  getAllEntities,
  getAllEntitiesApply,
  selectAllEntities, setEntities, updateEntities
} from '@ngneat/elf-entities';
import {categoriesData, expensesData} from './mock-data';
import {Expense, ExpenseCategory, ExpensesHistoryFilters} from './types';
import {isBetweenDates} from './utils';
import {EntitiesRef} from '@ngneat/elf-entities/src/lib/entity.state';
import {combineLatest, map, Observable} from 'rxjs';
import * as currency from 'currency.js';

const {expensesEntitiesRef, withExpensesEntities} = entitiesPropsFactory('expenses');
const {categoriesEntitiesRef, withCategoriesEntities} = entitiesPropsFactory('categories');

interface AppProps {
  filters: ExpensesHistoryFilters;
}
@Injectable({
  providedIn: 'root'
})
export class StateRepositoryService implements OnDestroy {
  private readonly store = createStore(
    {name: 'app'},
    withProps<AppProps>({
      filters: {}
    }),
    withExpensesEntities<Expense>({initialValue: expensesData}),
    withCategoriesEntities<ExpenseCategory>({initialValue: categoriesData})
  );

  filters$ = this.store.pipe(select(state => state.filters));

  allExpenses$= this.store.pipe(selectAllEntities({ref: expensesEntitiesRef}));
  filteredExpenses$: Observable<Expense[]> = combineLatest([
    this.filters$,
    this.allExpenses$
  ]).pipe(
    map(([{categoriesIds, dates}, allExpenses]) => {
      return allExpenses
        .filter(entity => {
          const categoryPassed = !categoriesIds || categoriesIds.includes(entity.category.id);
          const datePassed = !dates || isBetweenDates(entity.date, dates);
          return categoryPassed && datePassed;
        })
        .sort((a, b) => b.date.valueOf() - a.date.valueOf())
    })
  )

  categories$= this.store.pipe(selectAllEntities({ref: categoriesEntitiesRef}));
  setExpenses(expenses: Expense[]) {
    this.store.update(setEntities(expenses, {ref: expensesEntitiesRef}));
  }

  setCategories(categories: ExpenseCategory[]) {
    this.store.update(setEntities(categories, {ref: categoriesEntitiesRef}));
  }

  createExpense(expense: Expense) {
    const id= this.getNewId(expensesEntitiesRef);
    const sum = currency(expense.sum).format({separator: ' ', precision: 2, symbol: '', decimal: '.'}).toString();
    this.store.update(addEntities({...expense, id, sum}, {ref: expensesEntitiesRef}));
  }

  createCategory(category: ExpenseCategory) {
    const id= this.getNewId(categoriesEntitiesRef);
    this.store.update(addEntities({...category, id}, {ref: categoriesEntitiesRef}));
  }

  getCategories() {
    return this.store.query(getAllEntities({ref: categoriesEntitiesRef}));
  }

  setFilterCategories(categoriesIds: number[]) {
    const filters: ExpensesHistoryFilters = {
      categoriesIds
    }
    this.store.update(setProps({filters}));
  }

  ngOnDestroy() {
    this.store.destroy();
  }

  resetStore() {
    this.store.reset();
  }

  private getNewId(ref: EntitiesRef) {
    const expenses = this.store.query(getAllEntities({ref})) as {id: number}[];
    const maxId = expenses.reduce((max, {id}) => id > max ? id : max, 0);
    return maxId + 1;
  }
}
