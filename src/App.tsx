import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./componets/Navbar";
import Create from "./assets/pages/create/Create";
import Favorite from "./assets/pages/favorite/Favorite";
import Details from "./assets/pages/details/Details";
import Home from "./assets/pages/home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
    </>
  );
}

export default App;
