import React from 'react';

interface UserProfileProps {
  age: number;
  weight: number;
  height: number;
  fitnessGoals: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ age, weight, height, fitnessGoals }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-2">User Profile</h2>
      <p>Age: {age}</p>
      <p>Weight: {weight}</p>
      <p>Height: {height}</p>
      <p>Fitness Goals: {fitnessGoals}</p>
    </div>
  );
};

export default UserProfile;