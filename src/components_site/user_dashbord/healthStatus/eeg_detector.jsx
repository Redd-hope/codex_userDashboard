import React, { useState, useEffect } from 'react';
import './EEGDetector.css';

const EEGDetector = (set_data) => {
  const [eegDetected, setEEGDetected] = useState(false);

  // Simulate EEG detection after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setEEGDetected(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
        <header className="app-header">
            <div className="app-header-navigation">
                <div className="tabs">
                    <a href="/HealthReview" className="active">HealthReview</a>
                    <a href="Detector">
                        Detector
                    </a>

                </div>
            </div>
            <div className="app-header-actions">
                <button className="user-profile">
                    <span>{set_data.profil_name}</span>
                    <span>
                        <img src={set_data.profil_pic} />
                    </span>
                </button>
                <div className="app-header-actions-buttons">
                    <button className="icon-button large">
                        <i className="ph-magnifying-glass" />
                    </button>
                    <button className="icon-button large">
                        <i className="ph-bell" />
                    </button>
                </div>
            </div>
            <div className="app-header-mobile">
                <button className="icon-button large">
                    <i className="ph-list" />
                </button>
            </div>
        </header>
        <span className="app-body">
        <div className="eeg-detector">
      <div className={`animation ${eegDetected ? 'animate' : ''}`}>
        EEG Detected!
      </div>
    </div>

        </span>
    </div>

  );
};

export default EEGDetector;
