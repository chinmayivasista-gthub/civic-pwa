// import React from "react";
// import { Link } from "react-router-dom";

// function ReportsPage({ complaints =[]}) {
//   console.log("Complaints received:", complaints);

  
//   return (
//     <div className="reportspage">   
//       <h2 className="reports-title" style={{ color: "black" }}>My Reports</h2>
      
//       <Link to="/">
//         <button className="back-btn">Back to Home</button>
//       </Link>

//       {complaints.length === 0 ? (
//         <p className="empty-text">No complaints submitted yet.</p>
//       ) : (
//         <div className="reports-container">

//         <table className="reports-table">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Type</th>
//               <th>Details</th>
//               <th>Image</th>
//               <th>Status</th>
//               <th>Resolved</th>
//               <th>In Progress</th>
//               <th>Date & Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {complaints.map((c, index) => (
//               <tr key={index}>
//                 <td style={{ textAlign: "center" }}>{index + 1}</td>
//                 <td>{c.type}</td>
//                 <td>{c.details}</td>
//                 <td>
//         {c.image ? (
//           <img
//             src={c.image}
//             alt="Complaint"
//             style={{ width: "80px", borderRadius: "6px" }}
//           />
//         ) : (
//           "No image"
//         )}
//       </td>

           
//                 <td>{c.status}</td>
//                 <td>
//   {c.status === "Resolved" ? (
//     <span className="badge resolved">✔ Resolved</span>
//   ) : (
//     <span className="badge inactive">—</span>
//   )}
// </td>
// <td>
//   {c.status === "In Progress" ? (
//     <span className="badge inprogress">⏳ In Progress</span>
//   ) : (
//     <span className="badge inactive">—</span>
//   )}
// </td>

//                 <td>{c.date}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ReportsPage;

import React from "react";
import { Link } from "react-router-dom";

function ReportsPage({ complaints = [] }) {
  console.log("Complaints received:", complaints);

  return (
    <div className="reportspage">
      <h2 className="reports-title" style={{ color: "black" }}>My Reports</h2>

      <Link to="/">
        <button className="back-btn">Back to Home</button>
      </Link>

      {complaints.length === 0 ? (
        <p className="empty-text">No complaints submitted yet.</p>
      ) : (
        <div className="reports-container">
          <table className="reports-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Type</th>
                <th>Details</th>
                <th>Image</th>
                <th>Status</th>
                <th>Progress</th>
                <th>Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((c, index) => (
                <tr key={index}>
                  <td style={{ textAlign: "center" }}>{index + 1}</td>
                  <td>{c.type}</td>
                  <td>{c.details}</td>
                  <td>
                    {c.image ? (
                      <img
                        src={c.image}
                        alt="Complaint"
                        style={{ width: "80px", borderRadius: "6px" }}
                      />
                    ) : (
                      "No image"
                    )}
                  </td>
                  <td>
                    <span className={`badge ${c.status.toLowerCase().replace(" ", "")}`}>
                      {c.status}
                    </span>
                  </td>
                  <td>
                    <div className="progress-bar">
                      <div className={`progress-fill ${c.status.toLowerCase().replace(" ", "")}`}></div>
                    </div>
                  </td>
                  <td>{c.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ReportsPage;
