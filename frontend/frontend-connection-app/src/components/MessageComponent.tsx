import React from "react";

interface Message {
  userId: string;
  content: string;
  timestamp: string;
}

const MessageComponent: React.FC<{ message: Message }> = ({ message }) => {
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className="flex gap-[15px] items-center">
      <div className="w-[69px] h-[69px] rounded-[80px] bg-white">
        <img
          className="rounded-[80px]"
          src="https://sun9-60.userapi.com/impg/UX2_E5ThtE3SALToW-dsA_f33QQP6mog8dN8wA/d6lQbJAhvuc.jpg?size=1680x1668&quality=95&sign=cc46c79ed47eda96e34f1c5c20d1b5c0&c_uniq_tag=03Hv-GAfPgWiOMTvUz0A822O7hIMZfTlaar7ic76Ij8&type=album"
          alt="user photo"
        />
      </div>
      <div className="w-72 h-12 bg-white rounded-[21px] px-6 py-3 relative ">
        <p className="text-green-700 absolute bottom-12">{message.userId}</p>
        <p className="text-red-700 absolute top-12 left-60">
          {formatTime(message.timestamp)}
        </p>
        <p className="text-black text-left ">{message.content}</p>
      </div>
    </div>
  );
};

export default MessageComponent;
