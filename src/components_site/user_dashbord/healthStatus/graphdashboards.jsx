import React from 'react';
import EEGGraph from './graph'; // Correct the import path
import { Row, Col } from 'react-bootstrap';

const EEGDashboard = () => {
  // Sample EEG data for different brainwave types
  const waveData = [
    {
      label: 'Raw Waves',
      data: [10, 20, 15, 25, 30, 22, 24, 19, 45, 39, 28, 25],
    },
    {
      label: 'Alpha Waves',
      data: [10, 20, 15, 25, 30, 22, 24, 19, 45, 39, 28, 25],
    },
    {
      label: 'Beta Waves',
      data: [15, 30, 25, 35, 40, 32, 34, 29, 55, 49, 38, 35],
    },
    {
      label: 'Delta Waves',
      data: [5, 10, 8, 12, 15, 11, 12, 9, 20, 18, 14, 12],
    },
    {
      label: 'Sigma Waves',
      data: [8, 18, 13, 22, 25, 20, 21, 17, 35, 30, 24, 21],
    },
  ];

  return (
    <div>
      <Row>
        {waveData.map((wave, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <h2>{wave.label}</h2>
            <EEGGraph label={wave.label} data={wave.data} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EEGDashboard;
