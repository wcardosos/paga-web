import { Category } from './category';

export interface Expense {
  description: string;
  category: Category;
  amount: number;
  status: 'paid' | 'unpaid' | 'separated';
  dueDay: number;
}
