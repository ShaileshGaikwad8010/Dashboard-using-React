import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard1 from "./components/Dashboard1";
import Dashboard2 from "./components/Dashboard2";
import Dashboard3 from "./components/Dashboard3";
import Dashboard4 from "./components/Dashboard4";

function App() {
  return (
    
    <Router>
      
      <div className="App">
      <Dashboard1 />
        <Routes>
          <Route path="/" element={<Dashboard2 />} />
          <Route path="/dashboard3" element={<Dashboard3 />}/>
          <Route path="/dashboard4" element={<Dashboard4 />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
