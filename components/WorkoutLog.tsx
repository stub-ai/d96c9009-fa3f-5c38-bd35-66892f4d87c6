import React, { useState } from 'react';

interface WorkoutLogProps {
  duration: number;
  intensity: string;
  exercises: string[];
}

const WorkoutLog: React.FC<WorkoutLogProps> = ({ duration, intensity, exercises }) => {
  const [log, setLog] = useState({ duration, intensity, exercises });
  const [logs, setLogs] = useState([{ duration, intensity, exercises }]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLog({ ...log, [event.target.name]: event.target.value });
  };

  const handleAddLog = () => {
    setLogs([...logs, log]);
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-2">Workout Log</h2>
      <label>Duration: 
        <input type="number" name="duration" value={log.duration} onChange={handleInputChange} className="text-black" />
      </label>
      <label>Intensity: 
        <input type="text" name="intensity" value={log.intensity} onChange={handleInputChange} className="text-black" />
      </label>
      <button onClick={handleAddLog}>Add Log</button>
      <h3 className="text-xl font-bold mt-4">Logs:</h3>
      {logs.map((log, index) => (
        <p key={index}>Duration: {log.duration}, Intensity: {log.intensity}, Exercises: {log.exercises.join(', ')}</p>
      ))}
    </div>
  );
};

export default WorkoutLog;