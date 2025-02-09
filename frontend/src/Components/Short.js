import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Snackbar from '../Snackbar';

const Short = () => {
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
      const storedData = localStorage.getItem(storedUserId);
      if (storedData) {
        setUserData(JSON.parse(storedData));
      } else {
        setUserData([]);
      }
    }
  }, []);

  const clearData = () => {
    if (userId) {
      localStorage.removeItem(userId);
      setUserData([]);
      showSnackbar('All data has been cleared!', 'success');
    } else {
      showSnackbar('No user data found to clear.', 'warning');
    }
    window.location.reload();
  };

  const logOut = () => {
    localStorage.removeItem('userId'); // Remove userId from local storage
    setUserId(null); // Reset userId state
    setUserData([]); // Clear user data state
    showSnackbar('You have successfully logged out!', 'success');
    setTimeout(() => {
      window.location.href = '/register'; // Redirect to login page
    }, 1500); // Add a slight delay for the snackbar message
  };

  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Wrapper>
      <div>
        {/* Orange Cap */}
        <div>
          <p className="sub">Orange Cap Holder</p>
          <hr />
          <div className="contentBox">
            <p className="contentBoxTitle">Top Score Of This Season</p>
            <div className="shortpara">
              {userId ? (
                userData.length > 0 ? (
                  userData.some(player => player.playerName && player.playerScore !== undefined) ? (
                    userData
                      .filter(player => player.playerName && player.playerScore !== undefined)
                      .sort((a, b) => b.playerScore - a.playerScore) // Sort by wickets (season) in descending order
                      .map((player, index) => (
                        <p key={index}>
                          {`${player.playerName} scored ${player.playerScore} runs in this season.`}
                        </p>
                      ))
                  ) : (
                    <p>Adding players...</p>
                  )
                ) : (
                  <p>Loading...</p>
                )
              ) : (
                <p>Please log in to view player details.</p>
              )}
            </div>
          </div>
        </div>

        {/* Purple Cap */}
        <div>
          <p className="sub">Purple Cap Holder</p>
          <hr />
          <div className="contentBox">
            <p className="contentBoxTitle">Top Wicket-Taker Of This Season</p>
            <div className="shortpara">
              {userId ? (
                userData.length > 0 ? (
                  userData.some(player => player.bowlerName && player.wickets !== undefined) ? (
                    userData
                      .filter(player => player.bowlerName && player.wickets !== undefined)
                      .sort((a, b) => b.wickets - a.wickets) // Sort by wickets (season) in descending order
                      .map((player, index) => (
                        <p key={index}>
                          {`${player.bowlerName} took ${player.wickets} wickets in this season.`}
                        </p>
                      ))
                  ) : (
                    <p>Adding blower wickets...</p>
                  )
                ) : (
                  <p>Loading...</p>
                )
              ) : (
                <p>Please log in to view bowler details.</p>
              )}
            </div>

          </div>
        </div>

        {/* Highest Individual Score */}
        <div>
          <p className="sub">Highest Individual Score</p>
          <hr />
          <div className="contentBox">
            <p className="contentBoxTitle">Breathtaking...</p>
            <div className="shortpara">
              {userId ? (
                userData.length > 0 ? (
                  userData.some(player => player.playerName && player.highestScore !== undefined) ? (
                    userData
                      .filter(player => player.playerName && player.highestScore !== undefined)
                      .sort((a, b) => b.highestScore - a.highestScore) // Sort by highestScore in descending order
                      .map((player, index) => (
                        <p key={index}>
                          {`${player.playerName} scored ${player.highestScore} runs in a single match in this season.`}
                        </p>
                      ))
                  ) : (
                    <p>Adding player score...</p>
                  )
                ) : (
                  <p>Loading...</p>
                )
              ) : (
                <p>Please log in to view highest individual score details.</p>
              )}
            </div>
          </div>
        </div>


        {/* Highest Team Score */}
        <div>
          <p className="sub">Highest Team Score</p>
          <hr />
          <div className="contentBox">
            <p className="contentBoxTitle">Record-Breaking Performance</p>
            <div className="shortpara">
              {userId ? (
                userData.length > 0 ? (
                  userData.some(player => player.teamnm && player.teamscore !== undefined) ? (
                    userData
                      .filter(player => player.teamnm && player.teamscore !== undefined)
                      .sort((a, b) => b.teamscore - a.teamscore) // Sort by wickets (season) in descending order
                      .map((player, index) => (
                        <p key={index}>
                          {`${player.teamnm} make ${player.teamscore} the highest team score in this season.`}
                        </p>
                      ))
                  ) : (
                    <p>Adding highest team score...</p>
                  )
                ) : (
                  <p>Loading...</p>
                )
              ) : (
                <p>Please log in to view highest team score details.</p>
              )}
            </div>

          </div>
        </div>

        {/* Match winners */}
        <div>
          <p className="sub">Winners In Matches</p>
          <hr />
          <div className="contentBox">
            <p className="contentBoxTitle">Teams With Wins</p>
            <div className="shortpara">
              {userId ? (
                userData.length > 0 ? (
                  userData.filter(team => team.team1 && team.team2 && team.winner).length > 0 ? (
                    userData
                      .filter(team => team.team1 && team.team2 && team.winner)
                      .map((team, index) => (
                        <p key={index}>
                          {`A match between ${team.team1} and ${team.team2}, but ${team.winner} wins the match.`}
                        </p>
                      ))
                  ) : (
                    <p>Season Winners...</p>
                  )
                ) : (
                  <p>Loading...</p>
                )
              ) : (
                <p>Please log in to view match winner details.</p>
              )}
            </div>
          </div>
        </div>

        <div className='clear'>
          <button  onClick={clearData}>Clear all data</button>
          <button  onClick={logOut}>Log Out</button>
        </div>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
        >
            {snackbarMessage}
        </Snackbar>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .sub {
    margin-left: 6rem;
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  hr {
    background-color: rgb(228, 18, 18);
    height: 2px;
    border: none;
    width: 80%;
    margin-left: 5.6rem;
  }

  .contentBox {
    height: auto;
    padding: 1.5rem 1rem;
    border-radius: 10px;
    margin-left: 5.6rem;
    width: 85%;
    margin-top: 1.5rem;
    background-color: #ebeaFF;
  }

  .contentBoxTitle {
    font-size: 2rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  .shortpara {
    color: rgb(92, 90, 90);
    font-weight: 700;
    font-size: 20px;
  }

  button {
    margin: 50px 0px;
    padding: 10px;
    border-radius: 10%;
    background-color: rgb(235, 15, 15);
    color: rgb(207, 200, 200);
    font-size: 1rem;
    box-sizing: border-box; /* Ensures consistent dimensions */
    border: 2px solid transparent; /* Adds a border without affecting layout */
    transition: all 0.3s ease; /* Smooth transition */
  }

  button:hover {
    background-color: rgb(220, 210, 210);
    color: rgb(252, 8, 8);
    border-color: none; /* Change border color */
  }

  .clear{
    display:flex;
    justify-content:space-evenly;
  }


/* Media Queries for Mobile Responsiveness */
  @media (max-width: 768px) {
    .sub {
      margin-left: 1rem;
      font-size: 1.5rem;
    }

    hr {
      margin-left: 1rem;
      width: 90%;
    }

    .contentBox {
      margin-left: 1rem;
      width: 85%;
    }

    .contentBoxTitle {
      font-size: 1.5rem;
    }

    .shortpara {
      font-size: 18px;
    }

    .clear-data {
      margin-left: 35%;
      padding: 8px;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .sub {
      margin-left: 0.5rem;
      font-size: 1.2rem;
    }

    hr {
      margin-left: 0.5rem;
      width: 90%;
    }

    .contentBox {
      margin-left: 0.5rem;
      width: 85%;
    }

    .contentBoxTitle {
      font-size: 1.2rem;
    }

    .shortpara {
      font-size: 16px;
    }

    .clear-data {
      margin-left: 25%;
      padding: 6px;
      font-size: 0.8rem;
    }
  }
`;

export default Short;


