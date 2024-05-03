import About from '../components/About';
import Experience from '../components/Experience';

export default function TopSection() {
  return (
    <div className='md:grid grid-cols-3 gap-3'>
      <About mdStyle={'md:col-span-2'} />
      <Experience />
    </div>
  );
}
