import { api } from '@/lib/api';

export function fetchGoals(referenceMonth: string) {
  return api.get('/budgets/goals?referenceMonth=' + referenceMonth);
}
