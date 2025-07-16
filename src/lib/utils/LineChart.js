import Chart from "chart.js/auto";

export function renderLaporanLineChart(canvas) {
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  return new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul"],
      datasets: [
        {
          label: "Alih Media",
          data: [30, 45, 50, 60, 70, 90, 120],
          borderColor: "#10b981",
          backgroundColor: "rgba(16, 185, 129, 0.1)",
          tension: 0.4,
          fill: true,
          pointRadius: 3,
        },
        {
          label: "Retensi",
          data: [15, 20, 25, 30, 35, 40, 50],
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          tension: 0.4,
          fill: true,
          pointRadius: 4,
        },
        {
          label: "Pemusnahan",
          data: [5, 8, 10, 12, 15, 18, 22],
          borderColor: "#f97316",
          backgroundColor: "rgba(249, 115, 22, 0.1)",
          tension: 0.4,
          fill: true,
          pointRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: "#374151" },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${ctx.raw} arsip`,
          },
        },
      },
      scales: {
        x: {
          ticks: { color: "#4b5563" },
          grid: { display: false },
        },
        y: {
          beginAtZero: true,
          ticks: { color: "#6b7280", stepSize: 20 },
          grid: { color: "#e5e7eb" },
        },
      },
    },
  });
}
