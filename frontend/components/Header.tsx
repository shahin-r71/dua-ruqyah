import Image from 'next/image';
import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between items-center ml-[130px] mb-[1.6rem]">
      <h1 className="text-3xl font-semibold">Dua Page</h1>
      <div className="flex items-center justify-between w-2/3">
        <div className=" bg-white relative rounded-lg">
          <input
            type="text"
            className="h-[3.2rem] w-[23rem] placeholder:italic focus:border-primary focus:outline-0 rounded-lg p-2  border-2 placeholder:text-slate-400 placeholder:pl-2"
            placeholder="Search by dua name"
          />
          <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <Image src="/search.svg" alt="search" width={18} height={18} />
          </span>
        </div>
        <div>
          <Image src="/user.svg" alt="user icon" width={67} height={45} />
        </div>
      </div>
    </div>
  );
}

export default Header