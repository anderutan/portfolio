import Wrapper from '../util/Wrapper';
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss } from 'react-icons/si';

interface MySkillsProp {
  mdStyle: string;
}

const MySkills: React.FC<MySkillsProp> = ({ mdStyle }) => {
  const array = Array.from({ length: 2 });
  const iconClass = 'inline h-16';
  const skillSets = [
    {
      language: 'HTML',
      icon: <FaHtml5 className={iconClass} />,
      color: 'text-orange-500',
    },
    {
      language: 'CSS',
      icon: <FaCss3Alt className={iconClass} />,
      color: 'text-blue-600',
    },
    {
      language: 'JavaScript',
      icon: <SiJavascript className={iconClass} />,
      color: 'text-yellow-500',
    },
    {
      language: 'React',
      icon: <FaReact className={iconClass} />,
      color: 'text-blue-400',
    },
    {
      language: 'Github',
      icon: <FaGithub className={iconClass} />,
      color: 'text-violet-400',
    },
    {
      language: 'Figma',
      icon: <FaFigma className={iconClass} />,
      color: 'text-pink-500',
    },
    {
      language: 'TailwindCSS',
      icon: <SiTailwindcss className={iconClass} />,
      color: 'text-blue-500',
    },
  ];
  return (
    <Wrapper name='My Skills' mdStyle={mdStyle}>
      {/* https://www.uibun.dev/blog/tailwindcss-infinite-carousel */}
      <div className='overflow-hidden whitespace-nowrap [mask-image:_linear-gradient(to_right,_transparent_0,_white_50px,white_calc(100%-50px),_transparent_100%)] py-5'>
        {array.map((_, index) => (
          <div
            className='animate-slide-left-infinite group-hover:animation-pause inline-block w-max'
            key={index}
          >
            {skillSets.map((skill, index) => (
              <div
                className={`${skill.color} mx-6 inline text-3xl font-bold`}
                key={index}
              >
                {skill.icon} {skill.language}
              </div>
            ))}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default MySkills;
