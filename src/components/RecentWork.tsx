import Wrapper from '../util/Wrapper';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';
import useScreenSize from '../util/useScreenSize';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

interface Work {
  type: string;
  title: string;
}

interface RecentWorkProps {
  props: Work[];
  handleClick: (title: string) => void;
  mdStyle: string;
}

const RecentWork: React.FC<RecentWorkProps> = ({
  props,
  handleClick,
  mdStyle,
}) => {
  const { width } = useScreenSize();

  return (
    <Wrapper name={'Recent Work'} mdStyle={mdStyle}>
      {props.map((work, index) => (
        <div className='border-t-2 pt-3 pb-2' key={index}>
          <p className='text-f-second text-xs md:text-sm'>{work.type}</p>
          <div className='flex justify-between'>
            <p className='text-lg font-medium'>{work.title}</p>
            <a
              className='px-4 border rounded-2xl border-gray-300 text-xl flex items-center'
              onClick={() => handleClick(work.title)}
            >
              {width > 767 ? (
                <MdKeyboardDoubleArrowRight className='hover:animate-arrow-move' />
              ) : (
                <MdKeyboardDoubleArrowUp className='hover:animate-arrow-upDown' />
              )}
            </a>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default RecentWork;
