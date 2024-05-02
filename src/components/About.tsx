import photo from '/Photo_Tan_Wee_Kiat.jpg';
import { IoLogoReact } from 'react-icons/io5';
import { SiTailwindcss } from 'react-icons/si';
import Wrapper from './Wrapper';

export default function About() {
  return (
    <Wrapper name={'About'}>
      <img
        src={photo}
        alt=''
        className='rounded-full h-28 w-28 object-cover object-top mb-5'
      />
      <p className='text-lg'>
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
}
