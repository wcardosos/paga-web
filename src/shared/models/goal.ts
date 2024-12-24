import { Category } from './category';

export interface Goal {
  category: Category;
  amount: number;
  currentAmount: number;
  progress: number;
}
