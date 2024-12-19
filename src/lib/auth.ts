export enum AUTH_KEYS {
  AUTH_TOKEN = 'paga:authToken',
}
export function getAuthToken() {
  return localStorage.getItem(AUTH_KEYS.AUTH_TOKEN);
}

export function setAuthToken(token: string) {
  localStorage.setItem(AUTH_KEYS.AUTH_TOKEN, token);
}

export function isAuthenticated() {
  return localStorage.getItem(AUTH_KEYS.AUTH_TOKEN) !== null;
}

export function logout() {
  localStorage.removeItem(AUTH_KEYS.AUTH_TOKEN);
}
