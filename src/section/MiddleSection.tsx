import { useState } from 'react';
import RecentWork from '../components/RecentWork';

export default function MiddleSection() {
  const recentWorkList = [
    {
      type: 'Personal Project',
      title: 'Home Workout Plan',
      liveWebsite: 'https://workout-plan-andrew-tan.netlify.app/',
      github: 'https://github.com/anderutan/home-workout-plan',
    },
    {
      type: 'Frontend Mentor Challenge',
      title: 'Calculator App',
      liveWebsite: 'https://calculator-app-andrew-tan.netlify.app/',
      github: 'https://github.com/anderutan/calculator-app',
    },
  ];

  const [showWork, setShowWork] = useState('');
  function handleButtonClick(work: string) {
    setShowWork(work);
  }

  return (
    <div>
      <RecentWork props={recentWorkList} handleClick={handleButtonClick} />
    </div>
  );
}
