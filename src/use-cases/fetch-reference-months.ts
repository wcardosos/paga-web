import { api } from '@/lib/api';
import { getAuthToken } from '@/lib/auth';

export function fetchReferenceMonths() {
  return api.get('/budgets/reference-months', {
    headers: {
      Authorization: `Bearer ${getAuthToken()}`,
    },
  });
}
