import { clientServerApi } from './clientServerApi';

export const getKasus = () => {
  return clientServerApi.get('/kasus');
};

export const createKasus = (data) => {
  return clientServerApi.post('/kasus', data);
};

export const updateKasus = (id, data) => {
  return clientServerApi.put('/kasus', id, data);
};

export const deleteKasus = (id) => {
  return clientServerApi.delete('/kasus', id);
};
