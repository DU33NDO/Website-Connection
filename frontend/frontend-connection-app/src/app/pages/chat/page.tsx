"use client";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { FormEvent } from "react";
import axios from "axios";
import React from "react";
import MessageComponent from "@/components/MessageComponent";

interface Message {
  userId: string;
  content: string;
  timestamp: string;
}

const socket = io("http://localhost:3005/");

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userCount, setUserCount] = useState(0);

  async function onSubmitMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const messageContent = data.get("message") as string;
    console.log(messageContent);

    socket.emit("sendMessage", { text: messageContent });
    form.reset();
  }

  async function onSubmitRoom(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const room = new FormData(form);
    const roomName = room.get("roomName") as string;
    console.log(roomName);
    socket.emit("join-room", roomName);

    try {
      const response = await axios.get(
        `http://localhost:3005/messages/${roomName}`
      );
      const data = response.data;
      setMessages(
        data.map(
          (message: {
            userId: string;
            content: string;
            timestamp: string;
          }) => ({
            userId: message.userId,
            content: message.content,
            timestamp: message.timestamp,
          })
        )
      );
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  }

  useEffect(() => {
    socket.on("connection", () => {
      console.log("user connected");
    });

    socket.on("newMessage", (data) => {
      console.log("New message received:", data);
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    socket.on("NumberOfUsers", (data) => {
      console.log(`We have ${userCount} users in this room`);
      setUserCount(data.len);
    });

    return () => {
      socket.off("connection");
      socket.off("newMessage");
      socket.off("NumberOfUsers");
    };
  }, []);

  return (
    <div className="px-5 py-3">
      <div className="flex justify-center mt-6">
        <div className="flex bg-gray-300 w-80 h-[60px] items-center justify-center rounded-xl">
          <p className="text-black font-bold text-center text-5xl tracking-[.25em]">
            ASTANA
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-12">
        <div className="w-[50%] h-[90px] bg-white rounded-[21px]"></div>
        <div className="w-[160px] h-[160px] rounded-[80px] bg-red-700"></div>
      </div>
      <div className="flex flex-col gap-[24px] mt-14">
        {messages.map((message, index) => (
          <div className="" key={index}>
            <MessageComponent message={message}></MessageComponent>
          </div>
        ))}

        {Array.from({ length: userCount }).map((_, i) => (
          <MessageComponent
            key={`user-${i}`}
            message={{ userId: `User ${i + 1}`, content: "", timestamp: "" }}
          ></MessageComponent>
        ))}
      </div>
      <div className="">
        <form action="" onSubmit={onSubmitMessage} className="mt-10">
          <input
            type="text"
            name="message"
            id="message"
            placeholder="text: "
            className="text-gray-700 w-[85%] h-10 rounded-xl px-5 py-4"
          />
          <button type="submit" className="ml-4 ">
            Send
          </button>
        </form>
        <form action="" onSubmit={onSubmitRoom} className="mt-4">
          <input
            type="text"
            name="roomName"
            placeholder="room:"
            id="room"
            className="text-gray-700 w-[85%] h-10 rounded-xl px-5 py-4"
          />
          <button type="submit" className="ml-4 ">
            Join
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
