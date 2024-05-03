import artWork from '/artWork.jpg';
import { motion } from 'framer-motion';

interface MottoProps {
  mdStyle: string;
}

const Motto: React.FC<MottoProps> = ({ mdStyle }) => {
  return (
    <motion.div
      className={`px-6 py-4 my-3 md:my-0 rounded-lg h-[350px] md:h-full relative flex flex-col justify-between ${mdStyle}`}
      style={{
        backgroundImage: `url(${artWork})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      whileHover={{ scale: 1.1, margin: 10 }}
    >
      <div>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='px-3 py-1 bg-btn-main inline-block text-sm rounded-xl mb-8 tracking-wide relative md:text-base'>
          Motto
        </div>
      </div>
      <p className='text-xl text-white font-medium relative leading-5 md:text-2xl'>
        "God, grant me the serenity to accept the things I cannot change, the
        courage to change the things I can, and the wisdom to know the
        difference."
      </p>
    </motion.div>
  );
};

export default Motto;
