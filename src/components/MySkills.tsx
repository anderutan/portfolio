import Wrapper from './Wrapper';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';

const MySkills = () => {
  const skillSets = [
    {
      language: 'HTML',
      icon: <FaHtml5 />,
      color: 'text-orange-400',
    },
    {
      language: 'CSS',
      icon: <FaCss3Alt />,
      color: 'text-blue-400',
    },
    {
      language: 'JavaScript',
      icon: <IoLogoJavascript />,
      color: 'text-yellow-400',
    },
  ];
  return (
    <Wrapper name='My Skills'>
      <div className='flex gap-5 overflow-hidden'>
        {skillSets.map((skill) => (
          <div
            className={`flex items-center text-f-second text-3xl font-semibold ${skill.color}`}
          >
            {skill.icon}
            <p className='ml-1'>{skill.language}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default MySkills;
