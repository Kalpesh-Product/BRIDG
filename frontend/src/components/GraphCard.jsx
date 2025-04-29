import React from 'react';
import { BiCheck } from 'react-icons/bi';

const GraphCard= ({data,reverse}) => {

  return (
    <div className="flex flex-col items-center gap-20">
          <div className={`flex flex-col md:flex-row items-start gap-10 md:gap-4 lg:gap-4 ${reverse ? 'md:flex-row-reverse' : ''}`}>
            <div className='h-[50%] w-full  md:w-[40%] lg:w-[50%] overflow-hidden'>
            <img src={data.imageSrc} alt="image" className='h-full w-full object-cover'/>
            </div>
            <div className='flex flex-1 flex-col gap-4'>
              <h3 className='text-title font-semibold'>
                {data.title}
              </h3>
              <div>
                {data.items.map((item)=>(
                  <div className='flex gap-2 items-start mb-2'>
                    <div>
                      <BiCheck size={20} />
                    </div>
                    <div>
                      <p className='text-subtitle'>{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
   
    </div>
  );
};

export default GraphCard;


