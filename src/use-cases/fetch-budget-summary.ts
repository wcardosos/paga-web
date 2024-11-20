import { api } from '@/lib/api';

export function fetchBudgetSummary(referenceMonth: string) {
  return api.get('/budgets/summary?referenceMonth=' + referenceMonth);
}
