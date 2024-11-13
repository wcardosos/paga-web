import { api } from '@/lib/api';

export function fetchReferenceMonths() {
  return api.get('/budgets/reference-months');
}
