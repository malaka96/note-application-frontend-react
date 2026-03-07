import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./componets/Navbar";
import Create from "./assets/pages/create/Create";
import Favorite from "./assets/pages/favorite/Favorite";
import Home from "./assets/pages/home/Home";
import Detail from "./assets/pages/details/Detail";
import Login from "./assets/pages/login/Login";
import Register from "./assets/pages/register/Register";
import Account from "./assets/pages/account/Account";
import PrivateRoute from "./PrivateRoute";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
    <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/create"
          element={
            <PrivateRoute>
              <Create />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
        <Route
          path="/details/:id"
          element={
            <PrivateRoute>
              <Detail />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/account"
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
