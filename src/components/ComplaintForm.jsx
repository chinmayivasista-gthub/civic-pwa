import { useState } from 'react';

function ComplaintForm({ type }) {
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!details) return;
    alert(`Complaint submitted:\nType: ${type}\nDetails: ${details}`);
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ComplaintForm;
