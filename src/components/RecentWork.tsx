import Wrapper from './Wrapper';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

interface Work {
  type: string;
  title: string;
  liveWebsite: string;
  github: string;
}

interface RecentWorkProps {
  props: Work[];
  handleClick: (title: string) => void;
}

const RecentWork: React.FC<RecentWorkProps> = ({ props, handleClick }) => {
  return (
    <Wrapper name={'Recent Work'}>
      {props.map((work, index) => (
        <div className='border-t-2 pt-3 pb-2' key={index}>
          <p className='text-f-second text-xs'>{work.type}</p>
          <div className='flex justify-between'>
            <p className='text-lg font-medium'>{work.title}</p>
            <button
              className='px-4 border rounded-2xl border-gray-300 text-xl'
              onClick={() => handleClick(work.title)}
            >
              <MdKeyboardDoubleArrowRight className='hover:animate-arrow-move' />
            </button>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default RecentWork;
