import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from "react-router-dom";

function ComplaintForm({ type ,onSubmit }) {
  const [details, setDetails] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!details) {
      toast.error("Please enter complaint details"); // Optional error toast
      return;
    }

    toast.success(`Complaint submitted:\nType: ${type}\nDetails: ${details}`,{
      duration:5000,
      position:"top-right",
    });
    if (onSubmit) onSubmit(details);
    setDetails('');
  };

  return (
    <div className="complaint-form">
      <h2>{type} Complaint Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Details:
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder={`Describe the ${type.toLowerCase()} issue`}
            required
          />
        </label>
        <div style={{ display: "flex", gap: "160px", marginTop: "10px" }}>
    <button type="submit">Submit</button>

    <Link to="/reports">
      <button type="button">My Reports</button>
    </Link>
  </div>
      
      </form>
    </div>
  );
}

export default ComplaintForm;