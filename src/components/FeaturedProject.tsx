import Wrapper from './Wrapper';
import { useEffect, useState } from 'react';

interface Work {
  title: string;
  liveWebsite: string;
  github: string;
  photo: string;
  intro: string;
  tag: string;
}

interface FeaturedProjectProps {
  props: Work[];
  show: string;
}

const FeaturedProject = ({ props, show }: FeaturedProjectProps) => {
  const [filteredWork, setFilteredWork] = useState(props[0]);

  useEffect(() => {
    const filtered = props.filter((prop) => prop.title.includes(show));
    setFilteredWork(filtered[0]);
  }, [props, show]);

  return (
    <div id='project'>
      <Wrapper name='Featured Project'>
        <div className='flex flex-col items-center gap-4'>
          <img
            src={filteredWork.photo}
            alt=''
            className='h-[300px] w-[300px]'
          />
          <p className='text-lg font-semibold self-start leading-none'>
            Title: {filteredWork.title}
          </p>
          <p className='self-start text-sm text-f-second -mt-2'>
            {filteredWork.intro}
          </p>
          <p className='self-start text-xs text-f-second -mt-2'>
            *{filteredWork.tag}
          </p>
          <div className='flex justify-center gap-6 my-3'>
            <a
              href={filteredWork.liveWebsite}
              target='_blank'
              className='w-20 border border-gray-300 rounded-2xl bg-white text-center'
            >
              Live
            </a>
            <a
              href={filteredWork.github}
              target='_blank'
              className='w-20 border border-gray-300 rounded-2xl bg-white text-center'
            >
              Github
            </a>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default FeaturedProject;
