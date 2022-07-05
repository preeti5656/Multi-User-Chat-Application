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
      const obj={text : text,sent:true};
      setMessageArray(obj,...messageArray);
  socket.emit('sendmsg',obj);
  };
//for recieving message from server 
socket.on("recmsg",(data)=>{
console.log();
});
  return (
    <div className="container">
      <Card>
        <CardContent className="chat-area">{displayMessage()}</CardContent>
        <CardActions>
          <div className="input-group">
            <input className="form-control" 
            onChange={(e)=>setText(e.target.value)}
            value={text}/>
            <button className="btn btn-success" onChange={sendMessage}>Send Message</button>
          </div>
        </CardActions>
      </Card>
    </div>
  );
};

export default Chat;