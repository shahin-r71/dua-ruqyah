import React from "react";
import Image from "next/image";

const SettingsSidebar = () => {
  return (
    <div className="absolute right-0 w-[245px] h-[620px] pt-10 bg-white mr-10 rounded-3xl text-center px-3 py-5">
      <h2 className="text-xl font-semibold">Settings</h2>
      <div className="mt-4 flex flex-col space-y-3">
        <div className="bg-text_bg_secondary flex justify-start gap-2 items-center px-2 h-[55px] rounded-md">
          <div className="p-2 w-[38px] h-[38px] bg-text_bg rounded-full">
            <Image src="/Frame1.svg" alt="icon" width={20} height={20} />
          </div>
          <span className="text-text_color">Language Settings</span>
        </div>
        <div className="bg-text_bg_secondary flex justify-start gap-2 items-center px-2 h-[55px] rounded-md">
          <div className="p-2 w-[38px] h-[38px] bg-text_bg rounded-full">
            <Image src="/general.svg" alt="icon" width={20} height={20} />
          </div>
          <span className="text-text_color">General Settings</span>
        </div>
        <div className="bg-text_bg_secondary flex justify-start gap-2 items-center px-2 h-[55px] rounded-md">
          <div className="p-2 w-[38px] h-[38px] bg-text_bg rounded-full">
            <Image src="/54-menu-2.svg" alt="icon" width={20} height={20} />
          </div>
          <span className="text-text_color">Font Settings</span>
        </div>
        <div className="bg-text_bg_secondary flex justify-start gap-2 items-center px-2 h-[55px] rounded-md">
          <div className="p-2 w-[38px] h-[38px] bg-text_bg rounded-full">
            <Image src="/54-menu-2.svg" alt="icon" width={20} height={20} />
          </div>
          <span className="text-text_color">Appearance Settings</span>
        </div>
      </div>
    </div>
  );
};

export default SettingsSidebar;
