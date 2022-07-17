import logo from './logo.svg';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Chat from "./component/Chat";
import Login from "./component/Login";
import Header from "./component/Header";
import Home from "./component/Home";
function App() {

  return (
      <BrowserRouter>
       <Header/>
        <Routes>
        <Route element={<Home></Home>} path="home" />
        <Route element={<Chat />} path="/" />
        <Route element={<Login />} path="login" />
        </Routes>
        </BrowserRouter>
  );
}

export default App;
