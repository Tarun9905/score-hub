import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Snackbar from './Snackbar';

const AddWickets = () => {
  const [bowlerName, setBowlerName] = useState('');
  const [wickets, setWickets] = useState('');
  const [userId, setUserId] = useState(null);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      setSnackbarMessage('User not logged in! Please log in first.');
    }
  }, []);

  const formHandling = async (e) => {
    e.preventDefault();
  
    if (!userId) {
      setSnackbarMessage('User not logged in!');
      return;
    }
  
    if (!bowlerName || !wickets) {
      setSnackbarMessage('Both fields are required!');
      return;
    }
  
    if (isNaN(wickets)) {
      setSnackbarMessage('Wickets must be a number!');
      return;
    }
  
    setIsLoading(true);
  
    try {
      // Retrieve existing data
      const existingData = JSON.parse(localStorage.getItem(userId)) || [];
  
      // Check if the bowler already exists
      const bowlerIndex = existingData.findIndex(
        (entry) => entry.bowlerName === bowlerName
      );
  
      if (bowlerIndex !== -1) {
        // If the bowler exists, update their wickets
        existingData[bowlerIndex].wickets += Number(wickets);
      } else {
        // If the bowler doesn't exist, add a new entry
        existingData.push({ bowlerName, wickets: Number(wickets) });
      }
  
      // Save updated data back to localStorage
      localStorage.setItem(userId, JSON.stringify(existingData));
  
      setSnackbarMessage('Player updated successfully!');
      setBowlerName('');
      setWickets('');
    } catch (error) {
      console.error('Error saving data:', error);
      setSnackbarMessage('Failed to save player data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <Wrapper>
      <div className="form-container">
        <h2>Add Wickets</h2>
        <form onSubmit={formHandling}>
          <label htmlFor="bowlerName">Bowler Name</label>
          <input
            type="text"
            id="bowlerName"
            name="bowlerName"
            placeholder="Enter bowler name"
            value={bowlerName}
            onChange={(e) => setBowlerName(e.target.value)}
            required
          />

          <label htmlFor="wickets">Wickets</label>
          <input
            type="text"
            id="wickets"
            name="wickets"
            placeholder="Enter number of wickets"
            value={wickets}
            onChange={(e) => setWickets(e.target.value)}
            required
          />

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Adding...' : 'Add Player Wickets'}
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
      background-color: #ccc;
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
  }
`;

export default AddWickets;
