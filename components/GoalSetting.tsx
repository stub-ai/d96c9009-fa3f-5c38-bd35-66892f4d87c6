import React, { useState } from 'react';

interface GoalSettingProps {
  goals: string[];
}

const GoalSetting: React.FC<GoalSettingProps> = ({ goals }) => {
  const [goal, setGoal] = useState(goals);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGoal([...goal, event.target.value]);
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-2">Goal Setting</h2>
      <label>Add Goal: 
        <input type="text" name="goal" onChange={handleInputChange} />
      </label>
      <p>Goals: {goal.join(', ')}</p>
    </div>
  );
};

export default GoalSetting;