"use client";

import { useEffect, useState } from "react";
// import { socket } from "../../socket";
import { io } from "socket.io-client";
import CustomInput from "../components/common/CustomInput";
import CustomButton from "../components/common/CustomButton";
import Card from "../components/common/Card";

export default function Room() {
const [message, setMessage] = useState("")
const [room, setRoom] = useState("")
const [inbox, setInbox] = useState([])
const socket = io('http://localhost:3000');
  useEffect(() => {
    console.log(inbox,'inbox')
    socket.on('message',(message)=>{
      setInbox([...inbox,message])
    })
  }, [inbox]);
  
  const handleSendMessage = (e) =>{
    e.preventDefault();
    socket.emit('message',message,1);
  }
  
  const handleJoinRoom = () => {
    socket.on("joinRoom", 1)
  }
  return (
    <div>
      <Card className="min-h-[50vh] relative">
        <div className="min-h-full h-full max-h-full overflow-scroll">
          {inbox.map((message,index)=>(
            <div className="text-left py-2 px-4 bg-gray-700 w-fit text-md rounded-full mb-2" key={index}>{message}</div>
          ))}
        </div>
        <div className="flex flex-row justify-between items-center gap-2 absolute bottom-4 left-4 right-4">
          <CustomInput onChange={e=>{setMessage(e.target.value)}}/>
          <CustomButton onClick={handleSendMessage}>Send</CustomButton>
        </div>
      </Card>
    </div>
  );
}