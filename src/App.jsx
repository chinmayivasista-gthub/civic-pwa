import { useState } from 'react'
import './App.css'
import ComplaintForm from './components/ComplaintForm'

function App() {
  const [complaintType, setComplaintType] = useState('')

  return (
    <div className="App">
      <h1>Civic Issues Reporting</h1>
      <p>Select the type of complaint:</p>

      <div className="buttons">
        <button onClick={() => setComplaintType('Potholes')}>Potholes</button>
        <button onClick={() => setComplaintType('Streetlights')}>Streetlights</button>
        <button onClick={() => setComplaintType('Trash Bins')}>Overflowing Trash</button>
      </div>

      {complaintType && <ComplaintForm type={complaintType} />}
    </div>
  )
}

export default App