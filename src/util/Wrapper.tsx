import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface WrapperProps {
  name: string;
  mdStyle: string;
  children: ReactNode;
}

export default function Wrapper({
  name,
  mdStyle = '',
  children,
}: WrapperProps) {
  return (
    <motion.div
      className={`px-6 py-4 my-3 md:mb-0 bg-card rounded-lg ${mdStyle}`}
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
    >
      <div className='px-3 py-1 bg-btn-main inline-block text-sm rounded-xl mb-8 tracking-wide md:text-base'>
        {name}
      </div>
      {children}
    </motion.div>
  );
}
