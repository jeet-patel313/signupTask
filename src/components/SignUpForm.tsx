// import React, { useState } from 'react';
// import axios from 'axios';

// interface SignUpFormProps {
//   apiUrl: string;
// }

// const SignUpForm: React.FC<SignUpFormProps> = ({ apiUrl }) => {
//   const [formData, setFormData] = useState({
//     user_type: 'researcher',
//     first_name: '',
//     last_name: '',
//     username: '',
//     email: '',
//     password: '',
//   });

//   const [responseMessage, setResponseMessage] = useState<string>('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(apiUrl, formData);
//       console.log('Response:', response.data);
//       // Check if the response status is successful
//       if (response.data.status === 'successful') {
//         console.log('Signup successful!');
//         // Display success message to the user
//         setResponseMessage(response.data.message);
//       } else {
//         // Display error message to the user
//         setResponseMessage(response.data);
//       }
//     } catch (error: any) {
//       console.error('Error:', error.response?.data);
//       // Display error message to the user
//       setResponseMessage(error.response?.data || 'An error occurred. Please try again later.');
//     }
//   };

  

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Render response message if available */}
//       {responseMessage && <div>{responseMessage}</div>}
//       <div>
//         <label>User Type:</label>
//         <select name="user_type" value={formData.user_type} onChange={handleChange}>
//           <option value="researcher">Researcher</option>
//           <option value="investor">Investor</option>
//           <option value="institution_staff">Institution Staff</option>
//           <option value="service_provider">Service Provider</option>
//         </select>
//       </div>
//       <div>
//         <label>First Name:</label>
//         <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
//       </div>
//       <div>
//         <label>Last Name:</label>
//         <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
//       </div>
//       <div>
//         <label>Username:</label>
//         <input type="text" name="username" value={formData.username} onChange={handleChange} />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" name="password" value={formData.password} onChange={handleChange} />
//       </div>
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default SignUpForm;


// import React, { useState } from 'react';
// import axios from 'axios';

// interface SignUpFormProps {
//   apiUrl: string;
// }

// const SignUpForm: React.FC<SignUpFormProps> = ({ apiUrl }) => {
//   const [formData, setFormData] = useState({
//     user_type: 'researcher',
//     first_name: '',
//     last_name: '',
//     username: '',
//     email: '',
//     password: '',
//   });

//   const [responseMessage, setResponseMessage] = useState<string>('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Validation checks
//     const emptyFields: string[] = [];
//     for (const [key, value] of Object.entries(formData)) {
//       if (!value) {
//         emptyFields.push(key);
//       }
//     }

//     if (emptyFields.length > 0) {
//       const fieldsMessage = emptyFields.join(', ');
//       setResponseMessage(`Please fill in the following fields: ${fieldsMessage}.`);
//       return;
//     }

//     if (!validateEmail(formData.email)) {
//       setResponseMessage('Please enter a valid email address.');
//       return;
//     }

//     try {
//       const response = await axios.post(apiUrl, formData);
//       console.log('Response:', response.data);
//       // Check if the response status is successful
//       if (response.data.status === 'successful') {
//         console.log('Signup successful!');
//         // Display success message to the user
//         setResponseMessage(response.data.message);
//       } else {
//         // Display error message to the user
//         setResponseMessage(response.data);
//       }
//     } catch (error: any) {
//       console.error('Error:', error.response?.data);
//       // Display error message to the user
//       setResponseMessage(error.response?.data || 'An error occurred. Please try again later.');
//     }
//   };

//   const validateEmail = (email: string) => {
//     // Email validation regex pattern
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Render response message if available */}
//       {responseMessage && <div>{responseMessage}</div>}
//       <div>
//         <label>User Type:</label>
//         <select name="user_type" value={formData.user_type} onChange={handleChange}>
//           <option value="researcher">Researcher</option>
//           <option value="investor">Investor</option>
//           <option value="institution_staff">Institution Staff</option>
//           <option value="service_provider">Service Provider</option>
//         </select>
//       </div>
//       <div>
//         <label>First Name:</label>
//         <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
//       </div>
//       <div>
//         <label>Last Name:</label>
//         <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
//       </div>
//       <div>
//         <label>Username:</label>
//         <input type="text" name="username" value={formData.username} onChange={handleChange} />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" name="password" value={formData.password} onChange={handleChange} />
//       </div>
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default SignUpForm;


// updated the get the material ui and toast notification

// import React, { useState } from 'react';
// import axios from 'axios';
// import {
//   Button,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
// } from '@mui/material';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { SelectChangeEvent } from '@mui/material/Select';

// interface SignUpFormProps {
//   apiUrl: string;
// }

// const SignUpForm: React.FC<SignUpFormProps> = ({ apiUrl }) => {
//   const [formData, setFormData] = useState({
//     user_type: 'researcher',
//     first_name: '',
//     last_name: '',
//     username: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     name: string
//   ) => {
//     const { value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSelectChange = (
//     e: SelectChangeEvent<string>,
//   ) => {
//     const { value, name } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name!]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Validation checks
//     const emptyFields: string[] = [];
//     for (const [key, value] of Object.entries(formData)) {
//       if (!value) {
//         emptyFields.push(key);
//       }
//     }

//     if (emptyFields.length > 0) {
//       const fieldsMessage = emptyFields.join(', ');
//       toast.error(`Please fill in the following fields: ${fieldsMessage}.`);
//       return;
//     }

//     if (!validateEmail(formData.email)) {
//       toast.error('Please enter a valid email address.');
//       return;
//     }

//     try {
//       const response = await axios.post(apiUrl, formData);
//       console.log('Response:', response.data);
//       // Check if the response status is successful
//       if (response.data.status === 'successful') {
//         console.log('Signup successful!');
//         // Display success message to the user
//         toast.success(response.data.message);
//       } else {
//         // Display error message to the user
//         toast.error(response.data.message);
//       }
//     } catch (error: any) {
//       console.error('Error:', error.response?.data);
//       // Display error message to the user
//       toast.error(error.response?.data || 'An error occurred. Please try again later.');
//     }
//   };

//   const validateEmail = (email: string) => {
//     // Email validation regex pattern
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
//   };

//   return (
//     <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
//       <form onSubmit={handleSubmit}>
//         {/* Render response message if available */}
//         <FormControl fullWidth sx={{ marginBottom: 2 }}>
//           <InputLabel>User Type</InputLabel>
//           <Select
//             name="user_type"
//             value={formData.user_type}
//             onChange={handleSelectChange}
//           >
//             <MenuItem value="researcher">Researcher</MenuItem>
//             <MenuItem value="investor">Investor</MenuItem>
//             <MenuItem value="institution_staff">Institution Staff</MenuItem>
//             <MenuItem value="service_provider">Service Provider</MenuItem>
//           </Select>
//         </FormControl>
//         <TextField
//           fullWidth
//           name="first_name"
//           label="First Name"
//           value={formData.first_name}
//           onChange={(e) => handleChange(e, 'first_name')}
//           sx={{ marginBottom: 2 }}
//         />
//         <TextField
//           fullWidth
//           name="last_name"
//           label="Last Name"
//           value={formData.last_name}
//           onChange={(e) => handleChange(e, 'last_name')}
//           sx={{ marginBottom: 2 }}
//         />
//         <TextField
//           fullWidth
//           name="username"
//           label="Username"
//           value={formData.username}
//           onChange={(e) => handleChange(e, 'username')}
//           sx={{ marginBottom: 2 }}
//         />
//         <TextField
//           fullWidth
//           name="email"
//           label="Email"
//           type="email"
//           value={formData.email}
//           onChange={(e) => handleChange(e, 'email')}
//           sx={{ marginBottom: 2 }}
//         />
//         <TextField
//           fullWidth
//           name="password"
//           label="Password"
//           type="password"
//           value={formData.password}
//           onChange={(e) => handleChange(e, 'password')}
//           sx={{ marginBottom: 2 }}
//         />
//         <Button type="submit" variant="contained" color="primary">
//           Sign Up
//         </Button>
//       </form>
//       <ToastContainer position="bottom-right" autoClose={5000} />
//     </div>
//   );
// };

// export default SignUpForm;

// adding mobile, laptop view and modifying screen width and border in form
import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SelectChangeEvent } from '@mui/material/Select';

interface FormData {
  user_type: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
}

interface SignUpFormProps {
  apiUrl: string;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ apiUrl }) => {
  const [formData, setFormData] = useState<FormData>({
    user_type: 'researcher',
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: keyof FormData
  ) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (
    e: SelectChangeEvent<string>,
  ) => {
    const { value, name } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name!]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation checks
    const emptyFields: (keyof FormData)[] = [];
    for (const key in formData) {
      if (!formData[key as keyof FormData]) {
        emptyFields.push(key as keyof FormData);
      }
    }

    if (emptyFields.length > 0) {
      const fieldsMessage = emptyFields.join(', ');
      toast.error(`Please fill in the following fields: ${fieldsMessage}.`);
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post(apiUrl, formData);
      console.log('Response:', response.data);
      // Check if the response status is successful
      if (response.data.status === 'successful') {
        console.log('Signup successful!');
        // Display success message to the user
        toast.success(response.data.message);
      } else {
        // Display error message to the user
        toast.error(response.data.message);
      }
    } catch (error: any) {
      console.error('Error:', error.response?.data);
      // Display error message to the user
      toast.error(error.response?.data || 'An error occurred. Please try again later.');
    }
  };

  const validateEmail = (email: string) => {
    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '50%',
          width: '100%',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: 'white',
        }}
      >
        {/* Render response message if available */}
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel>User Type</InputLabel>
          <Select
            name="user_type"
            value={formData.user_type}
            onChange={handleSelectChange}
          >
            <MenuItem value="researcher">Researcher</MenuItem>
            <MenuItem value="investor">Investor</MenuItem>
            <MenuItem value="institution_staff">Institution Staff</MenuItem>
            <MenuItem value="service_provider">Service Provider</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          name="first_name"
          label="First Name"
          value={formData.first_name}
          onChange={(e) => handleChange(e, 'first_name')}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          name="last_name"
          label="Last Name"
          value={formData.last_name}
          onChange={(e) => handleChange(e, 'last_name')}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          name="username"
          label="Username"
          value={formData.username}
          onChange={(e) => handleChange(e, 'username')}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange(e, 'email')}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          fullWidth
          name="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={(e) => handleChange(e, 'password')}
          sx={{ marginBottom: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
      <ToastContainer position="bottom-right" autoClose={5000} />
    </div>
  );
};

export default SignUpForm;
