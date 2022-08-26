import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notfound from "./pages/Notfound/Notfound";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import Header from "./pages/Layouts/Header";
import Sidebar from "./pages/Layouts/Sidebar";
import Home from "./pages/Dashboard/Home";

function App() {
  return (
    <>
      <Sidebar />
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/books">
        <Route index element={<BookList/>}/>
        <Route path=":id" element={<BookList />}/>
        <Route path="new" element={<BookList />}/>
      </Route> */}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
