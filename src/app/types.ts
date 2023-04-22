export interface Expense {
  id: number;
  date: Date;
  comment?: string;
  sum: string;
  category: ExpenseCategory;
}

export interface ExpenseCategory {
  id: number;
  name: string;
}

export interface ExpensesHistoryFilters {
  dates?: DatesRange;
  categoriesIds?: number[];
}

export type DatesRange = [Date|null, Date|null];
