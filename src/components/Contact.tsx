import { useState } from 'react';
import { MdOutlineEmail, MdEmail } from 'react-icons/md';
import { FiGithub } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { RiWhatsappLine, RiWhatsappFill } from 'react-icons/ri';
import { motion } from 'framer-motion';

interface ContactProps {
  mdStyle: string;
}

const Contact: React.FC<ContactProps> = ({ mdStyle }) => {
  const [hover, setHover] = useState<number | null>(null);
  const contactList = [
    {
      platform: 'Email',
      icon: <MdOutlineEmail />,
      iconHover: <MdEmail />,
      link: 'mailto: andrewtan1310@gmail.com',
    },
    {
      platform: 'Github',
      icon: <FiGithub />,
      iconHover: <FaGithub />,
      link: 'https://github.com/anderutan',
    },
    {
      platform: 'WhatsApp',
      icon: <RiWhatsappLine />,
      iconHover: <RiWhatsappFill />,
      link: 'https://wa.me/qr/VI2AZNAFBWQEK1',
    },
  ];

  return (
    <motion.div
      className={`px-6 py-4 my-3 md:my-0 bg-btn-main rounded-lg flex flex-col justify-between ${mdStyle}`}
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
    >
      <div className='px-3 py-1 bg-card inline-block text-sm rounded-xl mb-16 tracking-wide self-start md:text-base'>
        Contact
      </div>
      <div className='mb-16'>
        <p className='text-sm text-f-second md:text-base'>
          Please react out if you have any questions!
        </p>
        <p className='text-xl font-semibold hover:text-f-second hover:cursor-pointer md:text-2xl'>
          andrewtan1310@gmail.com
        </p>
      </div>
      <div className='pt-3 border-t-2 flex gap-5'>
        {contactList.map((contact, index: number) => (
          <a
            href={contact.link}
            target='_blank'
            className='text-sm flex items-center hover:font-bold md:text-lg'
            onMouseOver={() => setHover(index)}
            onMouseOut={() => setHover(null)}
            key={index}
          >
            {hover === index ? contact.iconHover : contact.icon}
            <p className='ml-1'>{contact.platform}</p>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default Contact;
