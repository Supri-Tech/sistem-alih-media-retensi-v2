import { clientServerApi } from './clientServerApi';

export const getPasien = () => {
  return clientServerApi.get('/pasien');
};

export const createPasien = (data) => {
  return clientServerApi.post('/pasien', data);
};

export const updatePasien = (id, data) => {
  return clientServerApi.put('/pasien', id, data);
};

export const deletePasien = (id) => {
  return clientServerApi.delete('/pasien', id);
};
