import React from 'react'
import Image from 'next/image';

const NavSidebar = () => {
  return (
    <div className="flex flex-col justify-between items-center w-[90px] h-[700px] bg-white text-center absolute left-0 ml-10 rounded-3xl px-3 py-5">
      <div className='p-2'>
        <Image src="/logo1.png" alt="logo icon" width={80} height={80} />
      </div>
      <div className='flex flex-col items-center space-y-8'>
        <div className='p-2 bg-text_bg rounded-full'>
          <Image src="/home1.svg" alt="home icon" width={20} height={20} />
        </div>
        <div className='p-2 bg-text_bg rounded-full'>
          <Image src="/54-menu-2.svg" alt="icon" width={20} height={20} />
        </div>
        <div className='p-2 bg-text_bg rounded-full'>
          <Image src="/memorize1.svg" alt="icon" width={20} height={20} />
        </div>
        <div className='p-2 bg-text_bg rounded-full'>
          <Image src="/bookmark1.svg" alt="icon" width={20} height={20} />
        </div>
        <div className='p-2 bg-text_bg rounded-full'>
          <Image src="/ruqyah1.svg" alt="icon" width={20} height={20} />
        </div>
        <div className='p-2 bg-text_bg rounded-full'>
          <Image src="/dua-info1.svg" alt="icon" width={20} height={20} />
        </div>
        <div className='p-2 bg-text_bg rounded-full'>
          <Image src="/books1.svg" alt="icon" width={20} height={20} />
        </div>
      </div>
      <div className='bg-primary rounded-md flex justify-center items-center w-[57px] h-[57px]'>
        <Image src="/bxs_donate-heart.svg" alt="home icon" width={24} height={24} />
      </div>
    </div>
  );
}

export default NavSidebar