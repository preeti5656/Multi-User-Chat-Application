import logo from './logo.svg';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Chat from "./component/Chat";
import Login from "./component/Login";
function App() {

  return (
      <BrowserRouter>
       
        <Routes>
        <Route element={<Login />} path="login" />
        <Route element={<Chat />} path="chat" />
        </Routes>
        </BrowserRouter>
        
   
  );
}

export default App;
