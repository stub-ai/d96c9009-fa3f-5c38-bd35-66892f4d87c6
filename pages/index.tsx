import Image from 'next/image'
import UserProfile from '../components/UserProfile'
import WorkoutLog from '../components/WorkoutLog'
import GoalSetting from '../components/GoalSetting'
import ProgressTracker from '../components/ProgressTracker'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <UserProfile age={25} weight={70} height={180} fitnessGoals="Lose weight" />
      <WorkoutLog duration={60} intensity="High" exercises={["Push ups", "Squats", "Lunges"]} />
      <GoalSetting goals={["Lose weight", "Build muscle"]} />
      <ProgressTracker strength={80} endurance={70} weightChanges={-5} />
    </main>
  )
}