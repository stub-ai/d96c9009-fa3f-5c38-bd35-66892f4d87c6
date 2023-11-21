import React, { useState } from 'react';

interface UserProfileProps {
  age: number;
  weight: number;
  height: number;
  fitnessGoals: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ age, weight, height, fitnessGoals }) => {
  const [profile, setProfile] = useState({ age, weight, height, fitnessGoals });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [event.target.name]: event.target.value });
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-2">User Profile</h2>
      <label>Age: 
        <input type="number" name="age" value={profile.age} onChange={handleInputChange} className="text-black" />
      </label>
      <label>Weight: 
        <input type="number" name="weight" value={profile.weight} onChange={handleInputChange} className="text-black" />
      </label>
      <label>Height: 
        <input type="number" name="height" value={profile.height} onChange={handleInputChange} className="text-black" />
      </label>
      <label>Fitness Goals: 
        <input type="text" name="fitnessGoals" value={profile.fitnessGoals} onChange={handleInputChange} className="text-black" />
      </label>
    </div>
  );
};

export default UserProfile;