import {Expense, ExpenseCategory} from '../types';

export const categoriesData: ExpenseCategory[] = [
  {
    id: 1,
    name: 'Кафе/рестораны'
  },
  {
    id: 2,
    name: 'Продукты'
  },
  {
    id: 3,
    name: 'Транспорт'
  },
  {
    id: 4,
    name: 'Без категории'
  }
];

export const expensesData: Expense[] = [
  {
    id: 1,
    date: new Date('2023-03-21T10:00'),
    sum: '300.00',
    comment: 'Кофе по пути на работу',
    category: {
      id: 1,
      name: 'Кафе/рестораны'
    }
  },
  {
    id: 2,
    date: new Date('2023-03-21T19:05'),
    sum: '79.50',
    comment: 'На самокате домой',
    category: {
      id: 3,
      name: 'Транспорт'
    }
  },
  {
    id: 3,
    date: new Date('2023-03-24T15:55'),
    sum: '100.00',
    comment: 'Одолжил Саньку сотку',
    category: {
      id: 4,
      name: 'Без категории'
    }
  },
  {
    id: 4,
    date: new Date('2023-04-21T20:05'),
    sum: '2034.55',
    category: {
      id: 2,
      name: 'Продукты'
    }
  },
  {
    id: 5,
    date: new Date('2023-04-23T17:39'),
    sum: '941.90',
    comment: 'Такси до ресторана',
    category: {
      id: 3,
      name: 'Транспорт'
    }
  },
  {
    id: 6,
    date: new Date('2023-04-23T22:01'),
    sum: '8842.00',
    comment: 'Хорошо посидели',
    category: {
      id: 1,
      name: 'Кафе/рестораны'
    }
  },
];
