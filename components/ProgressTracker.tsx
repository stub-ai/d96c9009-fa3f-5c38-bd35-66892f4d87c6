import React, { useState } from 'react';

interface ProgressTrackerProps {
  strength: number;
  endurance: number;
  weightChanges: number;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ strength, endurance, weightChanges }) => {
  const [progress, setProgress] = useState({ strength, endurance, weightChanges });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProgress({ ...progress, [event.target.name]: parseInt(event.target.value) });
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-2">Progress Tracker</h2>
      <label>Strength: 
        <input type="number" name="strength" value={progress.strength} onChange={handleInputChange} />
      </label>
      <label>Endurance: 
        <input type="number" name="endurance" value={progress.endurance} onChange={handleInputChange} />
      </label>
      <label>Weight Changes: 
        <input type="number" name="weightChanges" value={progress.weightChanges} onChange={handleInputChange} />
      </label>
    </div>
  );
};

export default ProgressTracker;