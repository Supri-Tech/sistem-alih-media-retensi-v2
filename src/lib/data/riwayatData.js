export const accessLogs = [
  {
    date: "2023-11-16",
    events: [
      {
        time: "08:00 am",
        user: "Naufal Zaul Karim",
        message: "Accessed Dashboard from IP 192.168.1.101",
        status: "login",
      },
      {
        time: "08:05 am",
        user: "Jatmiko Suroso Adi",
        message: "Attempted access to Settings page (denied)",
        status: "login",
      },
    ],
  },
  {
    date: "2023-11-17",
    events: [
      {
        time: "05:00 pm",
        user: "Naufal Zaul Karim",
        message: "Logged out successfully",
        status: "logout",
      },
    ],
  },
  {
    date: "2023-11-18",
    events: [
      {
        time: "10:15 am",
        user: "Andhika Dwiky Pratama",
        message: "Accessed Admin Panel",
        status: "login",
      },
    ],
  },
  {
    date: "2023-11-19",
    events: [
      {
        time: "07:30 pm",
        user: "Jatmiko Suroso Adi",
        message: "Session timed out",
        status: "logout",
      },
    ],
  },
  {
    date: "2023-11-20",
    events: [
      {
        time: "03:42 pm",
        user: "Jatmiko Suroso Adi",
        message: "Accessed Patient Details Page for #4302",
        status: "login",
      },
    ],
  },
  {
    date: "2023-11-21",
    events: [
      {
        time: "06:00 pm",
        user: "Andhika Dwiky Pratama",
        message: "Logged out manually",
        status: "logout",
      },
    ],
  },
  {
    date: "2023-11-22",
    events: [
      {
        time: "09:00 am",
        user: "Jatmiko Suroso Adi",
        message: "Accessed Documents Archive",
        status: "login",
      },
    ],
  },
  {
    date: "2023-11-23",
    events: [
      {
        time: "08:15 am",
        user: "Naufal Zaul Karim",
        message: "Signed into system from IP 10.0.0.2",
        status: "login",
      },
    ],
  },
  {
    date: "2023-11-24",
    events: [
      {
        time: "04:00 pm",
        user: "Jatmiko Suroso Adi",
        message: "Logged out after viewing reports",
        status: "logout",
      },
    ],
  },
  {
    date: "2023-11-25",
    events: [
      {
        time: "07:45 am",
        user: "Andhika Dwiky Pratama",
        message: "Accessed statistics dashboard",
        status: "login",
      },
    ],
  },
];

export const activityUserLogs = [
  {
    date: "2023-11-17",
    events: [
      {
        time: "09:00 am",
        user: "Naufal Zaul Karim",
        message: "Created a new user account: admin_test",
        status: "success",
      },
    ],
  },
  {
    date: "2023-11-18",
    events: [
      {
        time: "11:10 am",
        user: "Jatmiko Suroso Adi",
        message: "Failed attempt to reset password",
        status: "failed",
      },
    ],
  },
  {
    date: "2023-11-19",
    events: [
      {
        time: "01:30 pm",
        user: "Andhika Dwiky Pratama",
        message: "Modified user role for Jatmiko Suroso Adi to 'Editor'",
        status: "success",
      },
    ],
  },
  {
    date: "2023-11-20",
    events: [
      {
        time: "02:50 pm",
        user: "Jatmiko Suroso Adi",
        message: "Changed email address",
        status: "success",
      },
    ],
  },
  {
    date: "2023-11-21",
    events: [
      {
        time: "05:50 pm",
        user: "Jatmiko Suroso Adi",
        message: "Changed profile picture",
        status: "success",
      },
      {
        time: "06:00 pm",
        user: "Jatmiko Suroso Adi",
        message: "Updated personal contact information",
        status: "success",
      },
    ],
  },
  {
    date: "2023-11-22",
    events: [
      {
        time: "09:40 am",
        user: "Naufal Zaul Karim",
        message: "Tried to delete root admin (denied)",
        status: "failed",
      },
    ],
  },
  {
    date: "2023-11-23",
    events: [
      {
        time: "04:30 pm",
        user: "Andhika Dwiky Pratama",
        message: "Enabled 2FA for own account",
        status: "success",
      },
    ],
  },
  {
    date: "2023-11-24",
    events: [
      {
        time: "03:00 pm",
        user: "Jatmiko Suroso Adi",
        message: "Attempted access to audit logs",
        status: "failed",
      },
    ],
  },
  {
    date: "2023-11-25",
    events: [
      {
        time: "01:15 pm",
        user: "Naufal Zaul Karim",
        message: "Approved user deletion request",
        status: "success",
      },
    ],
  },
];

export const transactionLogs = [
  {
    date: "2023-11-18",
    events: [
      {
        time: "09:45 am",
        user: "Naufal Zaul Karim",
        message: "Exported report: Monthly Summary - October 2023",
        status: "active",
      },
    ],
  },
  {
    date: "2023-11-19",
    events: [
      {
        time: "01:00 pm",
        user: "Jatmiko Suroso Adi",
        message: "Viewed retention form history",
        status: "inactive",
      },
    ],
  },
  {
    date: "2023-11-20",
    events: [
      {
        time: "02:15 pm",
        user: "Andhika Dwiky Pratama",
        message: "Submitted retention form #R-2023-1102",
        status: "active",
      },
      {
        time: "02:20 pm",
        user: "Andhika Dwiky Pratama",
        message: "Printed confirmation slip for form #R-2023-1102",
        status: "active",
      },
    ],
  },
  {
    date: "2023-11-21",
    events: [
      {
        time: "10:00 am",
        user: "Jatmiko Suroso Adi",
        message: "Viewed document transaction list",
        status: "inactive",
      },
    ],
  },
  {
    date: "2023-11-22",
    events: [
      {
        time: "11:00 am",
        user: "Jatmiko Suroso Adi",
        message: "Deleted archived document batch #A456",
        status: "active",
      },
    ],
  },
  {
    date: "2023-11-23",
    events: [
      {
        time: "04:20 pm",
        user: "Naufal Zaul Karim",
        message: "Cancelled form submission",
        status: "inactive",
      },
    ],
  },
  {
    date: "2023-11-24",
    events: [
      {
        time: "12:30 pm",
        user: "Andhika Dwiky Pratama",
        message: "Downloaded transaction summary",
        status: "active",
      },
    ],
  },
  {
    date: "2023-11-25",
    events: [
      {
        time: "03:10 pm",
        user: "Jatmiko Suroso Adi",
        message: "Viewed archived form #D-1001",
        status: "inactive",
      },
    ],
  },
];

export const dataPasienLogs = [
  {
    date: "2023-11-17",
    events: [
      {
        time: "08:30 am",
        user: "Andhika Dwiky Pratama",
        message: "Added new patient record: Jane Smith (#4012)",
        status: "success",
      },
    ],
  },
  {
    date: "2023-11-18",
    events: [
      {
        time: "02:00 pm",
        user: "Jatmiko Suroso Adi",
        message: "Failed to update patient insurance info",
        status: "failed",
      },
    ],
  },
  {
    date: "2023-11-19",
    events: [
      {
        time: "03:40 pm",
        user: "Naufal Zaul Karim",
        message: "Edited allergy info for patient #3125",
        status: "success",
      },
      {
        time: "03:55 pm",
        user: "Naufal Zaul Karim",
        message: "Viewed lab results of patient #3125",
        status: "success",
      },
    ],
  },
  {
    date: "2023-11-20",
    events: [
      {
        time: "09:30 am",
        user: "Jatmiko Suroso Adi",
        message: "Attempted to access inactive patient record",
        status: "failed",
      },
    ],
  },
  {
    date: "2023-11-21",
    events: [
      {
        time: "10:10 am",
        user: "Jatmiko Suroso Adi",
        message: "Deleted record of inactive patient #3108",
        status: "success",
      },
    ],
  },
  {
    date: "2023-11-22",
    events: [
      {
        time: "01:45 pm",
        user: "Andhika Dwiky Pratama",
        message: "Added medical history to patient #4033",
        status: "success",
      },
    ],
  },
  {
    date: "2023-11-23",
    events: [
      {
        time: "03:20 pm",
        user: "Naufal Zaul Karim",
        message: "Attempted to delete locked patient #3101",
        status: "failed",
      },
    ],
  },
  {
    date: "2023-11-24",
    events: [
      {
        time: "11:00 am",
        user: "Jatmiko Suroso Adi",
        message: "Updated contact info for patient #3102",
        status: "success",
      },
    ],
  },
  {
    date: "2023-11-25",
    events: [
      {
        time: "04:00 pm",
        user: "Andhika Dwiky Pratama",
        message: "Viewed visit history of patient #3125",
        status: "success",
      },
    ],
  },
];

export const users = ["Naufal Zaul Karim", "Andhika Dwiky Pratama", "Jatmiko Suroso Adi"];

export const linkHistories = [
  {
    title: "Data Pasien",
    description: "Perubahan pada informasi data pasien.",
    href: "/riwayat/pasien",
    icon: "mdi:clipboard-text",
  },
  {
    title: "Transaksi Dokumen",
    description: "Lacak perubahan dan perpindahan dokumen.",
    href: "/riwayat/transaksi",
    icon: "mdi:cloud-upload-outline",
  },
  {
    title: "Akses Masuk / Keluar",
    description: "Login dan logout pengguna sistem.",
    href: "/riwayat/akses",
    icon: "mdi:login-variant",
  },
  {
    title: "Aktivitas Pengguna",
    description: "Tindakan pengguna dalam sistem aplikasi.",
    href: "/riwayat/aktivitas",
    icon: "mdi:history",
  },
];