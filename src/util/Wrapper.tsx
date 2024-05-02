import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface WrapperProps {
  name: string;
  children: ReactNode;
}

export default function Wrapper({ name, children }: WrapperProps) {
  return (
    <motion.div
      className='px-6 py-4 my-3 bg-card rounded-lg'
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
    >
      <div className='px-3 py-1 bg-btn-main inline-block text-sm rounded-xl mb-8 tracking-wide'>
        {name}
      </div>
      {children}
    </motion.div>
  );
}
