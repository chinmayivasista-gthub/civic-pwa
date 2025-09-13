import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home"; 
import ReportsPage from "./pages/ReportsPage"; 

function AppRoutes() {
  const location = useLocation();
  const isReports = location.pathname === "/reports";

  if (isReports) {
  
    return (
      <div className="ReportsContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reports" element={<ReportsPage complaints={[]} />} />
        </Routes>
      </div>
    );
  }

 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reports" element={<ReportsPage complaints={[]} />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
