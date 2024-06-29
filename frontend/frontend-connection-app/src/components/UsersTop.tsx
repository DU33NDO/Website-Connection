import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const UsersTop = () => {
  const handleClickPushMessage = () => {
    
  };

  return (
    <div>
      <div className="flex gap-6 relative">
        <div className="flex flex-col gap-1 items-center">
          <div className="w-[40px] h-[40px] rounded-[80px] bg-white">
            <img src="" alt="" />
          </div>
          <p className="text-[10px]">Username</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="w-[40px] h-[40px] rounded-[80px] bg-white">
            <img src="" alt="" />
          </div>
          <p className="text-[10px]">Username</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="w-[40px] h-[40px] rounded-[80px] bg-white">
            <img src="" alt="" />
          </div>
          <p className="text-[10px]">Username</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="w-[40px] h-[40px] rounded-[80px] bg-white">
            <img src="" alt="" />
          </div>
          <p className="text-[10px]">Username</p>
        </div>
        <FontAwesomeIcon
          icon={faPlus}
          style={{ fontSize: "1.5em" }}
          className="absolute right-[10px] top-[15px] text-white cursor-pointer"
          onClick={handleClickPushMessage}
        />
      </div>
    </div>
  );
};

export default UsersTop;
