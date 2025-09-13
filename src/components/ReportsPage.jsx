import React from 'react';
import { Link } from 'react-router-dom';

function ReportsPage({ complaints }) {
  return (
    <div 
      style={{
        backgroundColor: "#fff", // remove grey background
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px"
      }}
    >
      <h2 style={{ marginBottom: "15px", textAlign: "center", color: "#222" }}>
        My Reports
      </h2>

      <Link to="/">
        <button 
          style={{
            marginBottom: "20px",
            backgroundColor: "#6c63ff",
            color: "white",
            padding: "10px 18px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Back to Home
        </button>
      </Link>

      {complaints.length === 0 ? (
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          No complaints submitted yet.
        </p>
      ) : (
        <table
          style={{
            width: "90%",
            maxWidth: "800px",
            borderCollapse: "collapse",
            marginTop: "10px",
            textAlign: "center"
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#6c63ff", color: "white" }}>
              <th style={{ padding: "10px" }}>#</th>
              <th style={{ padding: "10px" }}>Type</th>
              <th style={{ padding: "10px" }}>Details</th>
              <th style={{ padding: "10px" }}>Status</th>
              <th style={{ padding: "10px" }}>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((c, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{index + 1}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{c.type}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{c.details}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{c.status}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{c.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ReportsPage;
