import artWork from '/artWork.jpg';

const Motto = () => {
  return (
    <div
      className='px-6 py-4 my-3 rounded-lg h-[300px] relative flex flex-col justify-between'
      style={{
        backgroundImage: `url(${artWork})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
    >
      <div>
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='px-3 py-1 bg-btn-main inline-block text-sm rounded-xl mb-8 tracking-wide relative'>
          Motto
        </div>
      </div>
      <p className='text-lg text-white font-medium relative leading-5'>
        "God, grant me the serenity to accept the things I cannot change, the
        courage to change the things I can, and the wisdom to know the
        difference."
      </p>
    </div>
  );
};

export default Motto;
