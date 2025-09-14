// import { useState } from 'react';
// import { toast } from 'react-hot-toast';
// import { Link } from "react-router-dom";

// function ComplaintForm({ type, onSubmit }) {
//   const [details, setDetails] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!details) {
//       toast.error("Please enter complaint details");
//       return;
//     }

//     toast.success(
//       <div>
//         <strong>Complaint submitted!</strong>
//         <p>Type: {type}</p>
//         <p>Details: {details}</p>
//       </div>,
//       {
//         duration: 5000,
//         position: "top-right",
//       }
//     );

//     if (onSubmit) onSubmit(details);
//     setDetails('');
//   };

//   return (
//     <div className="complaint-form">
//       <h2>{type} Complaint Form</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Details:
//           <textarea
//             value={details}
//             onChange={(e) => setDetails(e.target.value)}
//             placeholder={`Describe the ${type.toLowerCase()} issue`}
//             required
//           />
//         </label>

//         {/* Buttons Row */}
//         <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
//           <button type="submit">Submit</button>

//           {/* Styled Link instead of nested button */}
//           <Link to="/reports" className="my-reports-link">
//             My Reports
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default ComplaintForm;
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from "react-router-dom";

function ComplaintForm({ type, onSubmit }) {
  const [details, setDetails] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!details) {
      toast.error("Please enter complaint details");
      return;
    }

    toast.success(
      <div>
        <strong>Complaint submitted!</strong>
        <p>Type: {type}</p>
        <p>Details: {details}</p>
        {image && <p>Image: {image.name}</p>}
      </div>,
      {
        duration: 5000,
        position: "top-right",
      }
    );

    if (onSubmit) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onSubmit({
          details,
          image: reader.result||null // base64 string
        });
      };
      if (image) {
        reader.readAsDataURL(image);
      } else {
        onSubmit({ details,image:null });
      }
    }

    setDetails('');
    setImage(null);
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

        <label className="image-upload-label">
          Upload Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="image-input"
          />
        </label>

        {image && (
          <div className="image-preview">
            <img src={URL.createObjectURL(image)} alt="Preview" />
          </div>
        )}

        <div className="form-buttons">
          <button type="submit">Submit</button>
          <Link to="/reports" className="my-reports-link">My Reports</Link>
        </div>
      </form>
    </div>
  );
}

export default ComplaintForm;