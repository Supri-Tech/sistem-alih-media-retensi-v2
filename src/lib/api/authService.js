import { clientServerApi } from './clientServerApi';

export const login = async (credentials) => {
  return clientServerApi.post('/auth/login', credentials);
}
export const register = async (credentials) => {
  return clientServerApi.post('/auth/register', credentials);
}