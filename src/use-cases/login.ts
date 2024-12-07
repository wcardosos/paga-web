import { api } from '@/lib/api';

export function login(username: string, password: string) {
  return api.post('/auth/login', { username, password });
}
