import { clientServerApi } from './clientServerApi';

export const getRiwayat = () => {
  return clientServerApi.get('/riwayat');
};

// export const createRiwayat = (data) => {
//   return clientServerApi.post('/riwayat', data);
// };

// export const updateRiwayat = (id, data) => {
//   return clientServerApi.put('/riwayat', id, data);
// };

// export const deleteRiwayat = (id) => {
//   return clientServerApi.delete('/riwayat', id);
// };
