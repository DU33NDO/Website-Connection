"use client";
import React, { useState } from "react";
import Difficulty from "@/components/Difficulty";
import AreaVocab from "@/components/AreaVocab";
import UsersTop from "@/components/UsersTop";

const Settings = () => {
  const [section, setSection] = useState(0);
  const [active, setActive] = useState(null);
  const [roomId, setRoomId] = useState("");

  const handleClick = (element: any) => {
    setActive((prevActive) => (prevActive === element ? null : element));
  };

  const defaultStyle = { fontSize: "18px", color: "black", fontWeight: "bold" };
  const activeStyle = { fontSize: "20px", color: "yellow", fontWeight: "bold" };

  const generateRoomId = () => {
    const newRoomId = Math.random().toString(36).substr(2, 9); 
    setRoomId(newRoomId);
    // Send roomId to server if needed
  };

  const handleCopyUrl = () => {
    const url = `${window.location.origin}/join/${roomId}`;
    navigator.clipboard.writeText(url).then(
      () => {
        alert("Room URL copied to clipboard!");
      },
      (err) => {
        console.error("Failed to copy URL: ", err);
      }
    );
  };

  // Generate the room ID when the component mounts
  React.useEffect(() => {
    generateRoomId();
  }, []);

  return (
    <div className="px-5 py-3 h-screen">
      <UsersTop />

      <div className="w-[100%] h-[70%] bg-[#f7f7f7] mt-10 overflow-auto rounded-xl">
        <div className="flex justify-between bg-red-700 ">
          <div
            className="bg-gray-400 w-[49%] h-[40px] rounded-t-xl flex justify-center items-center cursor-pointer"
            onClick={() => handleClick("vocabArea")}
          >
            <p style={active === "vocabArea" ? activeStyle : defaultStyle}>
              Difficulty level
            </p>
          </div>
          <div
            className="bg-gray-400 w-[49%] h-[40px] rounded-t-xl flex justify-center items-center cursor-pointer"
            onClick={() => handleClick("difficulty")}
          >
            <p style={active === "difficulty" ? activeStyle : defaultStyle}>
              Area of vocab
            </p>
          </div>
        </div>
        <div className="mt-4">
          {active === "difficulty" && <AreaVocab />}
          {active === "vocabArea" && <Difficulty />}
        </div>
      </div>
      <div className="flex text-black gap-4 justify-center mt-8">
        <button
          className="font-bold text-2xl bg-gray-700 w-[150px] h-[40px] rounded-xl"
          onClick={handleCopyUrl}
        >
          Invite
        </button>
        <button className="font-bold text-2xl bg-gray-700 w-[150px] h-[40px] rounded-xl">
          Play
        </button>
      </div>
    </div>
  );
};

export default Settings;
