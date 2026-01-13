// Auth utility functions for managing user authentication state

export interface User {
  email: string;
  name?: string;
  token?: string;
}

const AUTH_KEY = 'logoipsum_user';
const AUTH_TOKEN_KEY = 'logoipsum_token';

// Save user to localStorage
export const saveUser = (user: User): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    if (user.token) {
      localStorage.setItem(AUTH_TOKEN_KEY, user.token);
    }
  }
};

// Get user from localStorage
export const getUser = (): User | null => {
  if (typeof window !== 'undefined') {
    const userStr = localStorage.getItem(AUTH_KEY);
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch (e) {
        return null;
      }
    }
  }
  return null;
};

// Check if user is logged in
export const isLoggedIn = (): boolean => {
  return getUser() !== null;
};

// Remove user from localStorage (logout)
export const logout = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(AUTH_TOKEN_KEY);
  }
};

// Get auth token
export const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  }
  return null;
};

