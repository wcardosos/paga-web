import { api } from '@/lib/api';
import { getAuthToken } from '@/lib/auth';

export function fetchBudgetSummary(referenceMonth: string) {
  return api.get('/budgets/summary?referenceMonth=' + referenceMonth, {
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
  });
}
