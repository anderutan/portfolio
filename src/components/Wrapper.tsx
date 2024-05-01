import { ReactNode } from 'react';

interface WrapperProps {
  name: string;
  children: ReactNode;
}

export default function Wrapper({ name, children }: WrapperProps) {
  return (
    <div className='px-6 py-4 my-3 bg-card rounded-lg'>
      <div className='px-3 py-1 bg-btn-main inline-block text-sm rounded-xl mb-8 tracking-wide'>
        {name}
      </div>
      {children}
    </div>
  );
}
