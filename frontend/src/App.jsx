import React, { useState } from "react"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calendar from "./components/Calendar";
import Login from "./components/Login"
import DateSelected from "./components/DateSelected";
import Signup from "./components/Signup";

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/post" element={<DateSelected />} />
      </Routes>
    </Router>

     
      
      

    </>
  )
}

export default App
