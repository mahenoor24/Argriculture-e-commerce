import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
// import Home from "./pages/Home";
// import News from "./pages/News";
import NavbarHook from "./Components/NavbarHook/NavbarHook";
import Home from "./Pages/Home/Home";
import LoginPage from "./Pages/LoginRegistration/Login";
import RegisterPage from "./Pages/LoginRegistration/Registration";
import Footer from "./Components/Footer/Footer";

const App = () => {
 return (
   <Router>
     <Navbar />
      <NavbarHook/>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<LoginPage />} /> 
         <Route path="/register" element={<RegisterPage/>} /> 
         
       </Routes>
      <Footer/>
   </Router>
 );
};

export default App;