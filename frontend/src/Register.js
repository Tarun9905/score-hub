import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSnackbar, setShowSnackbar] = useState(false);
  const navigate = useNavigate();

  const formHandling = (e) => {
    e.preventDefault();
    setShowSnackbar(true); // Show the snackbar when the form is submitted

    axios
      .post('http://localhost:3400/register', { name, email, password })
      .then((result) => {
        console.log(result);
        setTimeout(() => {
          setShowSnackbar(false); // Hide the snackbar before navigating
          navigate('/login');
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setShowSnackbar(false); // Hide the snackbar on error
      });
  };

  return (
    <Wrapper>
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={formHandling}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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

          <p>
            Previously you have an account? {' '}
            <span>
              <NavLink to="/login" className="clickhere">
                click here
              </NavLink>
            </span>
          </p>

          <button type="submit">Register</button>
        </form>
        {showSnackbar && (
          <Snackbar>
            <p>Registering...</p>
            <Dots>
              <div></div>
              <div></div>
              <div></div>
            </Dots>
          </Snackbar>
        )}
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

  .clickhere {
    text-decoration: none;
    color: #ff2929;
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

const Snackbar = styled.div`
  position: fixed;
  top: 20px; /* Positioning snackbar at the top */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #323232;
  color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const pulsate = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  div {
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 50%;
    animation: ${pulsate} 1.5s infinite;
  }

  div:nth-child(1) {
    animation-delay: 0s;
  }

  div:nth-child(2) {
    animation-delay: 0.2s;
  }

  div:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

export default Register;
