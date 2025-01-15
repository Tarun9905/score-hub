import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  

  return (
    <Wrapper>
      <div className="content">
        <div className="homeTitle">
          <h1>Welcome to Sports Hub</h1>
          <p>Know the latest updates more quickly</p>
          <p>Register for better experience</p>
          <NavLink to='/stats' className='stats'>
            <button>
              Stats
            </button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 0 1rem; /* Added padding for mobile responsiveness */

  
  .stats{
    text-decoration:none;
    color:#fff;
  }
  .content {
    text-align: center;
    width: 100%;
    max-width: 600px; /* Limit content width for larger screens */
    padding: 1rem;
  }

  .homeTitle h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  .homeTitle p {
    font-size: 1rem;
    color: #555;
    margin-top: 0.5rem;
  }

  button {
    padding: 0.8rem;
    background-color: #6C63FF;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 1rem; /* Add space between text and button */
    width: 100%;
    max-width: 250px; /* Set a max width for buttons */
    margin-bottom: 1rem;

    &:hover {
      background-color: #574bff;
    }
  }

  @media (max-width: 768px) {
    .homeTitle h1 {
      font-size: 1.8rem;
      // text-aline:center;
    }

    .homeTitle p {
      font-size: 0.9rem;
    }

    button {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    .homeTitle h1 {
      font-size: 1.8rem; /* Further reduce font size on very small screens */
    }

    .homeTitle p {
      font-size: 0.8rem;
    }

    button {
      font-size: 1.1rem;
      padding: 0.7rem;
    }
  }
`;

export default Home;
