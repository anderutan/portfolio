import Contact from '../components/Contact';
import Motto from '../components/Motto';
import MySkills from '../components/MySkills';

const BottomSection = () => {
  return (
    <div className='md:grid md:grid-cols-3 md:grid-rows-[200px_150px_150px] md:gap-3'>
      <MySkills
        mdStyle={'md:col-start-2 md:col-end-4 md:row-start-1 md:row-end-2'}
      />
      <Motto
        mdStyle={'md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-4'}
      />
      <Contact
        mdStyle={'md:col-start-2 md:col-end-4 md:row-start-2 md:row-end-4'}
      />
    </div>
  );
};

export default BottomSection;
