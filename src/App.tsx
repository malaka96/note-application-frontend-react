import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./componets/Navbar";
import Create from "./assets/pages/create/Create";
import Favorite from "./assets/pages/favorite/Favorite";
import Home from "./assets/pages/home/Home";
import Detail from "./assets/pages/details/Detail";
import Login from "./assets/pages/login/Login";
import Register from "./assets/pages/register/Register";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
        <Route path="/details/:id" element={<Detail/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </>
  );
}

export default App;
