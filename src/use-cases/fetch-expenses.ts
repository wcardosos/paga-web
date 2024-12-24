import { api } from '@/lib/api';
import { getAuthToken } from '@/lib/auth';

export function fetchExpenses(referenceMonth: string) {
  return api.get('/budgets/expenses?referenceMonth=' + referenceMonth, {
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
  });
}
