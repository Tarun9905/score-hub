import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Error = () => {
  return (
    <Wrapper>
      <h1>
        404<span>Error</span>
      </h1>
      <p>Something went wrong</p>
      <p><NavLink to='/' className='error'>click here</NavLink> to continue</p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f9fa; /* Light background color */
  color: #333; /* Dark text for contrast */
  font-family: 'Arial', sans-serif;

  h1 {
    font-size: 4rem;
    margin: 0;
    color: #dc3545; /* Red color for emphasis */
  }

  h1 span {
    font-size: 1.5rem;
    color: #6c757d; /* Subtle gray for "Error" */
  }

  p {
    font-size: 1.25rem;
    margin: 1rem 0;
    color: #6c757d;
  }

  .error{
    text-decoration:none;
    color:#ff2929;
  }
`;

export default Error;
