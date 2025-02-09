import React from 'react';
import styled, { keyframes } from 'styled-components';

const Snackbar = ({ message }) => {
  return message ? <SnackbarWrapper>{message}</SnackbarWrapper> : null;
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
    top: -60px;
  }
  100% {
    opacity: 1;
    top: 20px;
  }
`;

const SnackbarWrapper = styled.div`
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #323232;
  color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${fadeIn} 0.6s ease-in-out;
`;

export default Snackbar;
