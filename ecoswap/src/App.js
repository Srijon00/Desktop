import React, { useState } from 'react';
import './App.css';
const recyclingCenters = [
  { id: 1, name: 'Recycle Center 1', openingHours: '8:30 AM - 5:00 PM'},
  { id: 2, name: 'Recycle Center 2', openingHours: '9:45 AM - 6:00 PM'},
  { id: 3, name: 'Recycle Center 3', openingHours: '10:30 AM - 4:00 PM'},
  { id: 4, name: 'Recycle Center 4', openingHours: '8:30 AM - 4:30 PM'},
  { id: 5, name: 'Recycle Center 5', openingHours: '8:30 AM - 5:30 PM'},
  { id: 6, name: 'Recycle Center 6', openingHours: '9:30 AM - 6:30 PM'},
];

function App() {
  const [alerts, setAlerts] = useState([]);

  const addAlert = (center) => {
    const newAlerts = [...alerts, center];
    setAlerts(newAlerts);
    alert(`Alert set for ${center.name}`);
  };

  const removeAlert = (center) => {
    const newAlerts = alerts.filter((c) => c.id !== center.id);
    setAlerts(newAlerts);

    alert(`Alert removed for ${center.name}`);
  };

  return (
    <div className="App">
      <h1>Recycling Center Alerts</h1>
      <div className="recycling-centers">
        {recyclingCenters.map((center) => (
          <div key={center.id} className="center-card">
            <h2>{center.name}</h2>
            <p>Opening Hours: {center.openingHours}</p>
            {alerts.find((alert) => alert.id === center.id) ? (
              <button onClick={() => removeAlert(center)}>Remove Alert</button>
            ) : (
              <button onClick={() => addAlert(center)}>Set Alert</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
