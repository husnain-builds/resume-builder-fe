import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', form);
      const { token, user } = res.data;

      // Store token (for example, in localStorage)
      localStorage.setItem('token', token);
      setMessage(`Welcome, ${user.name}! You're logged in.`);
      navigate('/profile');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className='signup-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className='signup-form'>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Login;
