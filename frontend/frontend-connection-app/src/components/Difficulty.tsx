import React from "react";

const Difficulty = () => {
  return (
    <div className="flex flex-col gap-10 items-center mt-8">
      <div className="flex gap-6 px-2 py-2 w-[90%] bg-blue-400 justify-center items-center rounded-xl">
        <div className="w-[70px] h-[70px] bg-green-300 rounded-xl"></div>
        <div className="flex flex-col gap-2 ">
          <p className="text-black font-bold text-2xl">Easy</p>
          <p className="text-black">Description of this mode</p>
        </div>
      </div>
      <div className="flex gap-6 px-2 py-2 w-[90%] bg-blue-400 justify-center items-center rounded-xl">
        <div className="w-[70px] h-[70px] bg-yellow-300 rounded-xl"></div>
        <div className="flex flex-col gap-2 ">
          <p className="text-black font-bold text-2xl">Medium</p>
          <p className="text-black">Description of this mode</p>
        </div>
      </div>
      <div className="flex gap-6 px-2 py-2 w-[90%] bg-blue-400 justify-center items-center rounded-xl">
        <div className="w-[70px] h-[70px] bg-red-300 rounded-xl"></div>
        <div className="flex flex-col gap-2 ">
          <p className="text-black font-bold text-2xl">Hard</p>
          <p className="text-black">Description of this mode</p>
        </div>
      </div>
      <div className="flex gap-6 px-2 py-2 w-[90%] bg-blue-400 justify-center items-center rounded-xl mb-2">
        <div className="w-[70px] h-[70px] bg-black rounded-xl"></div>
        <div className="flex flex-col gap-2 ">
          <p className="text-black font-bold text-2xl">No AI</p>
          <p className="text-black">Description of this mode</p>
        </div>
      </div>
    </div>
  );
};

export default Difficulty;
