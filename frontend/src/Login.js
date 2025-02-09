import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Snackbar from './Snackbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const formHandling = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setSnackbarMessage('Please fill out all fields.');
      return;
    }

    setIsLoading(true);
    setSnackbarMessage('Logging in...');
    try {
      const result = await axios.post('http://localhost:3400/login', { email, password });
      if (result.data.message === 'success') {
        localStorage.setItem('userId', result.data.userId);
        setSnackbarMessage('Login successful!');
        setTimeout(() => navigate('/stats'), 2000);
      } else {
        setSnackbarMessage(result.data.message);
      }
    } catch (err) {
      console.error(err);
      setSnackbarMessage('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={formHandling}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {snackbarMessage && <Snackbar message={snackbarMessage} />}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #9694ff;

  .form-container {
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    box-sizing: border-box;
  }

  h2 {
    text-align: center;
    margin-bottom: 1rem;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 0.5rem;
    color: #666;
    font-size: 1rem;
  }

  input {
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
  }

  button {
    padding: 0.8rem;
    background-color: #6c63ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #574bff;
    }

    &:disabled {
      background-color: #aaa;
      cursor: not-allowed;
    }
  }

  @media (max-width: 768px) {
    .form-container {
      padding: 1.5rem;
      max-width: 350px;
    }

    h2 {
      font-size: 1.8rem;
    }

    input {
      font-size: 0.95rem;
      padding: 0.75rem;
    }

    button {
      font-size: 0.95rem;
      padding: 0.75rem;
    }
  }

  @media (max-width: 480px) {
    .form-container {
      padding: 1rem;
      max-width: 300px;
    }

    h2 {
      font-size: 1.6rem;
    }

    label {
      font-size: 0.9rem;
    }

    input {
      font-size: 0.9rem;
      padding: 0.6rem;
    }

    button {
      font-size: 0.9rem;
      padding: 0.7rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`;

export default Login;
