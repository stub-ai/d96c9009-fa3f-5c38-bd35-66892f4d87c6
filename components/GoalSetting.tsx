import React, { useState } from 'react';

interface GoalSettingProps {
  goals: string[];
}

const GoalSetting: React.FC<GoalSettingProps> = ({ goals }) => {
  return (
    <div>
      <h2>Goal Setting</h2>
      <p>Goals: {goals.join(', ')}</p>
    </div>
  );
};

export default GoalSetting;