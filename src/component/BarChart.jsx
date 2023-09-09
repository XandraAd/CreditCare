/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { mockPayments, mockDataInvoices} from '../data'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Payments',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'payment received',
      data: mockDataInvoices.map((item=>item.cost)),
      backgroundColor: '#0BC5EA',
    },
    {
      label: 'payment made',
      data: mockPayments.map((item=>item.cost) ),
      
      backgroundColor: '#ED8936',
    },
  ],
};

function BarChart() {
  return <Bar options={options} data={data} />;
}

export default BarChart;
