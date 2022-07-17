import { Card, CardActions, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "./Chat.css";

const Chat = () => {
  const url = "http://localhost:5000";

  // initializing socket
  const [socket, setSocket] = useState(io(url, { autoConnect: false }));
const [text, setText] = useState("");
  const [messageArray, setMessageArray] = useState([
    { text: "Aaj kon sa exam hai??", sent: false },
    { text: "rehno do , kya karoge padh ke!!", sent: true },
    { text: "okk", sent: false },
  ]);

  const [selRoom, setSelRoom] = useState("");

  useEffect(() => {
    socket.connect();
  }, []);

  const displayMessage = () => {
    return messageArray.map((message) => (
      <div className={message.sent ? "msg-sent message" : "msg-rec message"}>
        <p className="msg-text">{message.text}</p>
      </div>
    ));
  };
  const sendMessage =()=>{
      console.log("msg sent");
      const obj={text : text,sent:true, room:selRoom};
      setMessageArray([...messageArray,obj]);
  socket.emit('sendmsg',obj);
  };
//for recieving message from server 
socket.on("recmsg",(data)=>{
  setMessageArray([...messageArray,data]);
  console.log();
  });


  return (
    <div className="chatpage">
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h2>Selected Room : {selRoom}</h2>
          <div className="input-group">
            <input type="text" className="form-control" onChange={e => setSelRoom(e.target.value)} />
            <button className="btn btn-primary" onClick={e => {
              socket.emit('joinroom',selRoom);
            }}>Enter Room</button>
          </div>
        </div>
      </div>
      <Card>
        <CardContent className="chat-area">{displayMessage()}</CardContent>
        <CardActions>
          <div className="input-group">
            <input className="form-control" 
            onChange={(e)=>setText(e.target.value)}
            value={text}/>
            <button className="btn btn-success" onClick={sendMessage}>Send Message</button>
          </div>
        </CardActions>
      </Card>
    </div>
    </div>
  );
};

export default Chat;