import React from 'react';
import { Link } from 'react-router-dom';

function ReportsPage({ complaints }) {
  return (
    <div style={{ padding: "20px", width: "100vw", minHeight: "100vh" }}>
      <h2 >My Reports</h2>
      <Link to="/">
        <button style={{ marginBottom: "20px",backgroundColor:"blue"}}>Back to Home</button>
      </Link>

      {complaints.length === 0 ? (
        <p>No complaints submitted yet.</p>
      ) : (
        <table 
          style={{ 
            width: "100%", 
            borderCollapse: "collapse", 
            marginTop: "10px" 
          }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>#</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>Type</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>Details</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>Status</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((c, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid black", padding: "8px", textAlign: "center" }}>{index + 1}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{c.type}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{c.details}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{c.status}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{c.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ReportsPage;
