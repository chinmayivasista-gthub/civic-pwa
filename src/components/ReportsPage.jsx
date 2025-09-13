import React from 'react';
import { Link } from 'react-router-dom';

function ReportsPage({ complaints }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>My Reports</h2>
      <Link to="/">
        <button style={{ marginBottom: "20px" }}>Back to Home</button>
      </Link>
      {complaints.length === 0 ? (
        <p>No complaints submitted yet.</p>
      ) : (
        complaints.map((c, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <strong>{c.type}</strong> - {c.details} <br />
            Status: {c.status} | Date: {c.date}
          </div>
        ))
      )}
    </div>
  );
}

export default ReportsPage;
