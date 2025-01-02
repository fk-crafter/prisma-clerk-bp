"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { UserButton } from "@clerk/nextjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardPage() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Earnings ($)",
        data: [1200, 1900, 3000, 5000, 2400, 3600, 4200],
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.2)",
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#ffffff",
        },
      },
      title: {
        display: true,
        text: "Earnings Over Time",
        color: "#ffffff",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#ffffff",
        },
      },
      y: {
        ticks: {
          color: "#ffffff",
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-8 pb-16 relative">
      <div className="absolute top-4 right-4">
        <UserButton afterSignOutUrl="/" />
      </div>

      <h1 className="text-4xl font-bold text-white mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-200">Earnings</h2>
          <p className="text-3xl font-semibold text-green-400 mt-2">$15,000</p>
          <p className="text-sm text-gray-400">Compared to last month: +20%</p>
        </div>

        <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-200">New Users</h2>
          <p className="text-3xl font-semibold text-blue-400 mt-2">250</p>
          <p className="text-sm text-gray-400">Compared to last month: +12%</p>
        </div>

        <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-200">Statistics</h2>
          <p className="text-3xl font-semibold text-yellow-400 mt-2">
            Growth: 15%
          </p>
          <p className="text-sm text-gray-400">Compared to last month: +5%</p>
        </div>
      </div>

      <div className="w-full max-w-6xl mt-12">
        <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-200 mb-4">
            Earnings Over Time
          </h2>
          <Line data={data} options={options} />
        </div>
      </div>

      <footer className="mt-16 text-gray-400 text-sm">
        © 2025 Your Dashboard. All rights reserved.
      </footer>
    </div>
  );
}
