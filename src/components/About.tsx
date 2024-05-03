import photo from '/Photo_Tan_Wee_Kiat.jpg';
import { IoLogoReact } from 'react-icons/io5';
import { SiTailwindcss } from 'react-icons/si';
import Wrapper from '../util/Wrapper';

interface AboutProps {
  mdStyle: string;
}

const About: React.FC<AboutProps> = ({ mdStyle }) => {
  return (
    <Wrapper name={'About'} mdStyle={mdStyle}>
      <img
        src={photo}
        alt=''
        className='rounded-full h-28 w-28 object-cover object-top mb-5'
      />
      <p className='text-lg md:text-2xl md:mt-10'>
        Skilled in{' '}
        <span className='inline-flex items-baseline font-bold text-[#087EA4]'>
          <IoLogoReact className='mr-1 self-center' /> ReactJS
        </span>{' '}
        and{' '}
        <span className='inline-flex items-baseline font-bold text-[#38BDF8]'>
          <SiTailwindcss className='mr-1 self-center' /> Tailwind CSS
        </span>{' '}
        , I'm a frontend developer in Klang, Selangor, driven to build beautiful
        and functional web applications.
      </p>
    </Wrapper>
  );
};

export default About;
