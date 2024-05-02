import { useRef, useState } from 'react';
import RecentWork from '../components/RecentWork';
import FeaturedProject from '../components/FeaturedProject';
import homeWPPhoto from '/Home_Workout_Plan_ShowCase.png';
import calculatorAppPhoto from '/Calculator_App_ShowCase.png';

export default function MiddleSection() {
  const ref = useRef(null);
  const recentWorkList = [
    {
      type: 'Personal Project',
      title: 'Home Workout Plan',
      liveWebsite: 'https://workout-plan-andrew-tan.netlify.app/',
      github: 'https://github.com/anderutan/home-workout-plan',
      photo: homeWPPhoto,
      intro: 'Personal workout program with own created database.',
      tag: 'React, Tailwind CSS',
    },
    {
      type: 'Frontend Mentor Challenge',
      title: 'Calculator App',
      liveWebsite: 'https://calculator-app-andrew-tan.netlify.app/',
      github: 'https://github.com/anderutan/calculator-app',
      photo: calculatorAppPhoto,
      intro: 'A simple calculator app with three color theme.',
      tag: 'React, Tailwind CSS',
    },
  ];

  const [showWork, setShowWork] = useState('');
  function handleButtonClick(work: string) {
    setShowWork(work);
    // Scroll to -- https://medium.com/@taraparakj75/scroll-to-an-element-on-click-in-react-2be0fdd21129#:~:text=Scrolling%20the%20element%20on%20click,clicked%20on%20the%20ref%20object.
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div ref={ref}>
      <FeaturedProject props={recentWorkList} show={showWork} />
      <RecentWork props={recentWorkList} handleClick={handleButtonClick} />
    </div>
  );
}
