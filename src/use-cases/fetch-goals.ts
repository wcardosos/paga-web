import { api } from '@/lib/api';
import { getAuthToken } from '@/lib/auth';

export function fetchGoals(referenceMonth: string) {
  return api.get('/budgets/goals?referenceMonth=' + referenceMonth, {
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
  });
}
