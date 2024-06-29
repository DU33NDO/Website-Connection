"use client";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import { FormEvent } from "react";
import axios from "axios";
import Chat from "@/app/pages/chat/page";
import Auth from "@/app/pages/Auth";
import Settings from "./pages/settings/page";

// const socket = io("http://localhost:3005/");

export default function Home() {
  // return <Settings></Settings>;
  return <Auth></Auth>;
  // return <Chat></Chat>;
}
