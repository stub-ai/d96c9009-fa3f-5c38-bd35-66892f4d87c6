import React, { useState } from 'react';

interface ProgressTrackerProps {
  strength: number;
  endurance: number;
  weightChanges: number;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ strength, endurance, weightChanges }) => {
  return (
    <div>
      <h2>Progress Tracker</h2>
      <p>Strength: {strength}</p>
      <p>Endurance: {endurance}</p>
      <p>Weight Changes: {weightChanges}</p>
    </div>
  );
};

export default ProgressTracker;