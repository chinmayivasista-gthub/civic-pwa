import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import './App.css';
import ComplaintForm from './components/ComplaintForm';
import ReportsPage from './components/ReportsPage';

function App() {
  const [complaintType, setComplaintType] = useState('');

  const [complaints, setComplaints] = useState(() => {
    const saved = localStorage.getItem("complaints");
    return saved ? JSON.parse(saved) : [];
  });


  return (
    <Router>
    <div className="App">
      <h1>Civic Issues Reporting</h1>
      <Routes>
          {/* Home / Complaint Form Page */}
          <Route path="/" element={
            <div>
       <p>Select the type of complaint:</p>

      <div className="buttons">
        <button onClick={() => setComplaintType('Potholes')}>Potholes</button>
        <button onClick={() => setComplaintType('Streetlights')}>Streetlights</button>
        <button onClick={() => setComplaintType('Trash Bins')}>Overflowing Trash</button>
      </div>

      {complaintType && (
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <ComplaintForm 
                    type={complaintType} 
                    onSubmit={(details) => {
                      const newComplaint = {
                        type: complaintType,
                        details,
                        status: "Submitted",
                        date: new Date().toLocaleString()
                      };
                      const updatedComplaints = [...complaints, newComplaint];
                      setComplaints(updatedComplaints);
                      localStorage.setItem("complaints", JSON.stringify(updatedComplaints));
                    }}
                  />

                 
                </div>
              )}
            </div>
          }/>

          {/* Reports Page */}
          <Route path="/reports" element={
            <ReportsPage complaints={complaints} />
          }/>
        </Routes>

        <Toaster position="top-right" />
      </div>
    </Router> 
  );
}

export default App;