import {
  accessLogs,
  activityUserLogs,
  transactionLogs,
  dataPasienLogs,
  users
} from '$data/riwayatData.js';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  const { slug } = params;

  const logsMap = {
    akses: accessLogs,
    aktivitas: activityUserLogs,
    transaksi: transactionLogs,
    pasien: dataPasienLogs
  };

  const content = logsMap[slug] ?? [];
  const allUsers = users;

  return {
    slug,
    content,
    users: allUsers
  };
}
