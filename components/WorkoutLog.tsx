import React from 'react';

interface WorkoutLogProps {
  duration: number;
  intensity: string;
  exercises: string[];
}

const WorkoutLog: React.FC<WorkoutLogProps> = ({ duration, intensity, exercises }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-2">Workout Log</h2>
      <p>Duration: {duration}</p>
      <p>Intensity: {intensity}</p>
      <p>Exercises: {exercises.join(', ')}</p>
    </div>
  );
};

export default WorkoutLog;