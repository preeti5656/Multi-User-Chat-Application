import logo from './logo.svg';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Chat from "./component/Chat";
import Login from "./component/Login";
import Header from "./component/Header";
import Home from "./component/Home";
import Signup from "./component/Signup";
function App() {

  return (
      <BrowserRouter>
       <Header/>
        <Routes>
        <Route element={<Chat />} path="/" />
        <Route element={<Home></Home>} path="home" />
        <Route element={<Chat />} path="/chat" />
        <Route element={<Login />} path="login" />
        <Route element={<Signup />} path="signup" />
        </Routes>
        </BrowserRouter>
  );
}

export default App;
