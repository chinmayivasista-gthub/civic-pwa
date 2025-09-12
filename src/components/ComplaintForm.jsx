import { useState } from 'react'

function ComplaintForm({ type }) {
  const [details, setDetails] = useState('')
  const [submitted, setSubmitted] = useState(false) // track submission

  const handleSubmit = (e) => {
    e.preventDefault()
    if (details.trim() === '') return
    setSubmitted(true)
    setDetails('')
    // remove success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

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
      {submitted && (
        <p style={{ color: 'green', marginTop: '10px', fontWeight: 'bold' }}>
          Complaint submitted successfully!
        </p>
      )}
    </div>
  )
}

export default ComplaintForm