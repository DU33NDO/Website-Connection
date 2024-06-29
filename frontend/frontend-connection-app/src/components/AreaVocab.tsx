import React from "react";

const AreaVocab = () => {
  return (
    <div className="flex flex-col gap-10 items-center mt-8">
      <div className="flex gap-6 px-2 py-2 w-[90%] bg-blue-400 justify-center items-center rounded-xl">
        <div className="w-[70px] h-[70px] rounded-xl text-[50px]">😄</div>
        <div className="flex flex-col gap-2 ">
          <p className="text-black font-bold text-2xl">All Include</p>
          <p className="text-black">Description of this mode</p>
        </div>
      </div>
      <div className="flex gap-6 px-2 py-2 w-[90%] bg-blue-400 justify-center items-center rounded-xl">
        <div className="w-[70px] h-[70px] rounded-xl text-[50px]">💊</div>
        <div className="flex flex-col gap-2 ">
          <p className="text-black font-bold text-2xl">Medicine</p>
          <p className="text-black">Description of this mode</p>
        </div>
      </div>
      <div className="flex gap-6 px-2 py-2 w-[90%] bg-blue-400 justify-center items-center rounded-xl">
        <div className="w-[70px] h-[70px] rounded-xl text-[50px]">🏀</div>
        <div className="flex flex-col gap-2 ">
          <p className="text-black font-bold text-2xl">Sport</p>
          <p className="text-black">Description of this mode</p>
        </div>
      </div>
      <div className="flex gap-6 px-2 py-2 w-[90%] bg-blue-400 justify-center items-center rounded-xl mb-2">
        <div className="w-[70px] h-[70px] rounded-xl text-[50px]">🖥️</div>
        <div className="flex flex-col gap-2 ">
          <p className="text-black font-bold text-2xl">IT</p>
          <p className="text-black">Description of this mode</p>
        </div>
      </div>
    </div>
  );
};

export default AreaVocab;
