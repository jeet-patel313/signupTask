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
import { FormData } from '../types';

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
    // Email validation - regex pattern
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