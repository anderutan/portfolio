import Wrapper from '../util/Wrapper';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
  mdStyle: string;
}

const FeaturedProject = ({ props, show, mdStyle }: FeaturedProjectProps) => {
  const [filteredWork, setFilteredWork] = useState(props[0]);

  useEffect(() => {
    const filtered = props.filter((prop) => prop.title.includes(show));
    setFilteredWork(filtered[0]);
  }, [props, show]);

  return (
    <div id='project' className={mdStyle}>
      <Wrapper name='Featured Project' mdStyle=''>
        <div className='flex flex-col items-center mb-2 gap-6 md:flex-row'>
          <motion.div whileHover={{ scale: 1.2, margin: 30 }}>
            <img
              src={filteredWork.photo}
              alt=''
              className='h-[300px] w-[300px] rounded-xl shadow-xl'
            />
          </motion.div>
          <div className='flex flex-col items-center gap-4 md:place-self-start'>
            <p className='text-lg font-semibold self-start leading-none md:text-xl'>
              Title: {filteredWork.title}
            </p>
            <p className='self-start text-sm text-f-second -mt-2 md:text-base'>
              {filteredWork.intro}
            </p>
            <p className='self-start text-xs text-f-second -mt-2 md:text-sm'>
              *{filteredWork.tag}
            </p>
            <div className='flex justify-center gap-6 my-3'>
              <a
                href={filteredWork.liveWebsite}
                target='_blank'
                className='w-20 border border-gray-300 rounded-2xl bg-white text-center hover:bg-btn-main md:w-24 md:py-2'
              >
                Live
              </a>
              <a
                href={filteredWork.github}
                target='_blank'
                className='w-20 border border-gray-300 rounded-2xl bg-white text-center hover:bg-btn-main md:w-24 md:py-2'
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default FeaturedProject;
