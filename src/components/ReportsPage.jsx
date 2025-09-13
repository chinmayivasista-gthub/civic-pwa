import React from "react";
import { Link } from "react-router-dom";

function ReportsPage({ complaints }) {
  return (
    <div className="reportspage">   
      <h2 className="reports-title">My Reports</h2>
      
      <Link to="/">
        <button className="back-btn">Back to Home</button>
      </Link>

      {complaints.length === 0 ? (
        <p className="empty-text">No complaints submitted yet.</p>
      ) : (
        <table className="reports-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Type</th>
              <th>Details</th>
              <th>Status</th>
              <th>Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((c, index) => (
              <tr key={index}>
                <td style={{ textAlign: "center" }}>{index + 1}</td>
                <td>{c.type}</td>
                <td>{c.details}</td>
                <td>{c.status}</td>
                <td>{c.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ReportsPage;
