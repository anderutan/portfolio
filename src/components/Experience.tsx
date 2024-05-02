import resumePDF from '../../public/Resume_Tan_Wee_Kiat.pdf';
import Wrapper from './Wrapper';

export default function Experience() {
  const experienceList = [
    {
      position: 'E-commerce & Operation Manager',
      company: 'AST IT Sales & Services',
      year: '04/2021 - Present',
    },
    {
      position: 'Digital Marketing Executive',
      company: 'Econsave Cash & Carry Sdn Bhd',
      year: '07/2019 - 03/2021',
    },
    {
      position: 'Electronic Item Import Purchaser',
      company: 'Econsave Cash & Carry Sdn Bhd',
      year: '08/2018 - 12/2018',
    },
  ];
  return (
    <Wrapper name={'Experience'}>
      {experienceList.map((experience, index) => (
        <div
          key={index}
          className={`py-4 border-b-2 ${index === 0 ? 'pt-0' : ''}`}
        >
          <p className='mb-1 text-sm'>{experience.position}</p>
          <div className='text-xs text-f-second flex justify-between'>
            <p>{experience.company}</p>
            <p>{experience.year}</p>
          </div>
        </div>
      ))}
      <div className='mt-7 mb-3 flex items-center justify-center'>
        <a
          className='rounded-3xl relative h-[50px] w-40 overflow-hidden border border-f-second bg-white px-3 text-f-main shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-btn-main before:transition-all before:duration-500 hover:text-f-main hover:shadow-btn-main hover:before:left-0 hover:before:w-full flex items-center justify-center font-medium text-sm'
          href={resumePDF}
          target='_blank'
        >
          <span className='relative z-10'>My Resume</span>
        </a>
      </div>
    </Wrapper>
  );
}
