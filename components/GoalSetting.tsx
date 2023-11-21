import React from 'react';

interface GoalSettingProps {
  goals: string[];
}

const GoalSetting: React.FC<GoalSettingProps> = ({ goals }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-2">Goal Setting</h2>
      <p>Goals: {goals.join(', ')}</p>
    </div>
  );
};

export default GoalSetting;