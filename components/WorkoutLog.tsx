import React, { useState } from 'react';

interface WorkoutLogProps {
  duration: number;
  intensity: string;
  exercises: string[];
}

const WorkoutLog: React.FC<WorkoutLogProps> = ({ duration, intensity, exercises }) => {
  return (
    <div>
      <h2>Workout Log</h2>
      <p>Duration: {duration}</p>
      <p>Intensity: {intensity}</p>
      <p>Exercises: {exercises.join(', ')}</p>
    </div>
  );
};

export default WorkoutLog;