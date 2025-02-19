import React, { useState } from "react"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calendar from "./components/Calendar";
import Hello from "./components/Hello";
import DateSelected from "./components/DateSelected";


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/post" element={<DateSelected />} />
      </Routes>
    </Router>

     
      
      

    </>
  )
}

export default App
