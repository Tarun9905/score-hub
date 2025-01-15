import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Snackbar from './Snackbar';

const AddPlayers = () => {
  const [playerName, setPlayerName] = useState('');
  const [playerScore, setPlayerScore] = useState('');
  const [userId, setUserId] = useState(null);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      setSnackbarMessage('No user found! Please log in first.');
    }
  }, []);

  const formHandling = (e) => {
    e.preventDefault();

    // Validate user ID
    if (!userId) {
      setSnackbarMessage('User not logged in!');
      return;
    }

    // Validate input fields
    if (!playerName || !playerScore) {
      setSnackbarMessage('Both fields are required!');
      return;
    }

    // Validate that score is a number
    if (isNaN(playerScore)) {
      setSnackbarMessage('Player score must be a number!');
      return;
    }

    // Ensure existing data is an array
    let existingData;
    try {
      const rawData = localStorage.getItem(userId);
      existingData = rawData ? JSON.parse(rawData) : [];
      if (!Array.isArray(existingData)) {
        existingData = [];
      }
    } catch (error) {
      console.error('Error reading local storage:', error);
      existingData = [];
    }

    // Find the player in the existing data
    const playerIndex = existingData.findIndex(
      (entry) => entry.playerName === playerName
    );

    if (playerIndex !== -1) {
      // If the player exists, update their total score and check for highest score
      existingData[playerIndex].playerScore += Number(playerScore);
      existingData[playerIndex].highestScore = Math.max(
        existingData[playerIndex].highestScore,
        Number(playerScore)
      );
      setSnackbarMessage('Player score updated successfully!');
    } else {
      // If the player doesn't exist, add a new entry
      existingData.push({
        playerName,
        playerScore: Number(playerScore),
        highestScore: Number(playerScore),
      });
      setSnackbarMessage('Player added successfully!');
    }

    // Save the updated data array back to local storage
    try {
      localStorage.setItem(userId, JSON.stringify(existingData));
      setPlayerName('');
      setPlayerScore('');
    } catch (error) {
      console.error('Error saving data to local storage:', error);
      setSnackbarMessage('An error occurred while saving the data.');
    }
  };

  return (
    <Wrapper>
      <div className="form-container">
        <h2>Add Players</h2>
        <form onSubmit={formHandling}>
          <label htmlFor="playerName">Player Name</label>
          <input
            type="text"
            id="playerName"
            name="playerName"
            placeholder="Enter player name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            required
          />

          <label htmlFor="playerScore">Score</label>
          <input
            type="text"
            id="playerScore"
            name="playerScore"
            placeholder="Enter player score"
            value={playerScore}
            onChange={(e) => setPlayerScore(e.target.value)}
            required
          />

          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Adding...' : 'Add Player'}
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

export default AddPlayers;
