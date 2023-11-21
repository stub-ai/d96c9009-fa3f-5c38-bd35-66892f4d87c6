import React, { useState } from 'react';

interface WorkoutLogProps {
  duration: number;
  intensity: string;
  exercises: string[];
}

const WorkoutLog: React.FC<WorkoutLogProps> = ({ duration, intensity, exercises }) => {
  const [log, setLog] = useState({ duration, intensity, exercises });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLog({ ...log, [event.target.name]: event.target.value });
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-2">Workout Log</h2>
      <label>Duration: 
        <input type="number" name="duration" value={log.duration} onChange={handleInputChange} />
      </label>
      <label>Intensity: 
        <input type="text" name="intensity" value={log.intensity} onChange={handleInputChange} />
      </label>
      <p>Exercises: {log.exercises.join(', ')}</p>
    </div>
  );
};

export default WorkoutLog;