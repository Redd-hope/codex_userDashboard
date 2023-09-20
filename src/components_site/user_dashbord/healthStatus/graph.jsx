// EEGGraph.js

import React from 'react';
import { Line } from 'react-chartjs';
import './eegGraph.css';

const EEGGraph = ({ label, data }) => {
  const chartData = {
    labels: ['0s', '1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '10s', '11s'],
    datasets: [
      {
        label: label,
        data: data,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amplitude',
        },
      },
    },
  };

  return (
    <span className="eeg-graph-container" style={{ width: '40vw' , margin:'auto',display: 'flex', flexWrap: 'wrap',flexBasis: '50%', padding: '16px' }}>
      <Line data={chartData} options={options} />
    </span>
  );
};

export default EEGGraph;
