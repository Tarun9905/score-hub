import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Snackbar from '../Snackbar';

const News = () => {
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
        {/* Orange Cap Holder */}
        <div>
          <p className='sub'>Orange Cap Holder</p>
          <hr />
          <div className='contentBox'>
            <p className='contentBoxTitle'>Top Score Of This Season</p>
            <div className="newspara">
              {userId ? (
                userData.length > 0 ? (
                  userData.some(player => player.playerName && player.playerScore !== undefined) ? (
                    userData
                      .filter(player => player.playerName && player.playerScore !== undefined)
                      .sort((a, b) => b.playerScore - a.playerScore)
                      .map((player, index) => (
                        <p key={index}>{`${player.playerName}'s performance and his potential standing in the Orange Cap race,${player.playerName} has been in exceptional form during this season, leading the Orange Cap race with  ${player.playerScore} runs.`}</p>
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

        {/* Purple Cap Holder */}
        <div>
          <p className='sub'>Purple Cap Holder</p>
          <hr />
          <div className='contentBox'>
            <p className='contentBoxTitle'>Top Wicket Taker Of This Season</p>
            <div className="newspara">
              {userId ? (
                userData.length > 0 ? (
                  userData.some(player => player.bowlerName && player.wickets !== undefined) ? (
                    userData
                      .filter(player => player.bowlerName && player.wickets !== undefined)
                      .sort((a, b) => b.wickets - a.wickets)
                      .map((player, index) => (
                        <p key={index}>{`${player.bowlerName} has been a standout performer in this season, leading the Purple Cap race with ${player.wickets} wickets, ${player.bowlerName}'s consistent performances have solidified his reputation as one of the premier fast bowlers in the league.`}</p>
                      ))
                  ) : (
                    <p>Adding bowler wickets...</p>
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
          <p className='sub'>Highest Individual Score</p>
          <hr />
          <div className='contentBox'>
            <p className='contentBoxTitle'>Breathtaking....</p>
            <div className="newspara">
              {userId ? (
                userData.length > 0 ? (
                  userData.some(player => player.playerName && player.highestScore !== undefined) ? (
                    userData
                      .filter(player => player.playerName && player.highestScore !== undefined)
                      .sort((a, b) => b.highestScore - a.highestScore)
                      .map((player, index) => (
                        <p key={index}>{`${player.playerName} holds the record for the highest individual score in history, scoring an unbeaten ${player.highestScore} runs, These remarkable innings highlight the explosive batting talent showcased over the years.`}</p>
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
          <p className='sub'>Highest Team Score</p>
          <hr />
          <div className='contentBox'>
            <p className='contentBoxTitle'>Record-Breaking Performance</p>
            <div className="newspara">
              {userId ? (
                userData.length > 0 ? (
                  userData.some(player => player.teamnm && player.teamscore !== undefined) ? (
                    userData
                      .filter(player => player.teamnm && player.teamscore !== undefined)
                      .sort((a, b) => b.teamscore - a.teamscore)
                      .map((player, index) => (
                        <p key={index}>{`${player.teamnm} holds the record for the highest team total in history scoring ${player.teamscore} runs. These remarkable performances highlight ${player.teamnm}'s formidable batting lineup during the season. These high-scoring matches underscore the explosive nature of T20 cricket and the batting prowess displayed in this season.`}</p>
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
            <div className="newspara">
              {userId ? (
                userData.length > 0 ? (
                  userData.filter(team => team.team1 && team.team2 && team.winner).length > 0 ? (
                    userData
                      .filter(team => team.team1 && team.team2 && team.winner)
                      .map((team, index) => (
                        <p key={index}>
                          {`${team.team1} faced off against ${team.team2} in an exciting match. The thrilling performance secured a well-deserved win for ${team.winner}, showcasing their dominance. Fans celebrated the team's remarkable display of skill and teamwork.`}
                        </p>
                      ))
                  ) : (
                    <p>Loading...</p>
                  )
                ) : (
                  <p>Loading...</p>
                )
              ) : (
                <p>Please log in to view Match Winner details.</p>
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
    background-color: rgb(228, 18, 18); /* Red color */
    height: 2px;
    border: none;
    width: 85%;
    margin-left: 5.6rem;
  }

  .contentBox {
    height: auto;
    padding: 1.5rem 1rem;
    border-radius: 10px;
    margin-left: 5.6rem;
    width: 90%;
    margin-top: 1.5rem;
    background-color: #ebeaFF;
  }

  .contentBoxTitle {
    font-size: 2rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  .newspara {
    color: rgb(92, 90, 90);
    font-weight: 700;
    font-size: 22px;
  }

  button {
    margin: 50px 0px;
    padding: 10px;
    border-radius: 10%;
    background-color: rgb(235, 15, 15);
    color: rgb(207, 200, 200);
    font-size: 1rem;
    box-sizing: border-box;
    border: 2px solid transparent;
    transition: all 0.3s ease;
  }

  button:hover {
    background-color: rgb(220, 210, 210);
    color: rgb(252, 8, 8);
    border-color: none;
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

    .newspara {
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

    .newspara {
      font-size: 16px;
    }

    .clear-data {
      margin-left: 25%;
      padding: 6px;
      font-size: 0.8rem;
    }
  }
`;

export default News;

// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import Snackbar from '../Snackbar';

// const News = () => {
//   const [userId, setUserId] = useState(null);
//   const [userData, setUserData] = useState([]);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');

//   useEffect(() => {
//     const storedUserId = localStorage.getItem('userId');
//     if (storedUserId) {
//       setUserId(storedUserId);
//       const storedData = localStorage.getItem(storedUserId);
//       if (storedData) {
//         setUserData(JSON.parse(storedData));
//       } else {
//         setUserData([]);
//       }
//     }
//   }, []);

//   const clearData = () => {
//     if (userId) {
//       localStorage.removeItem(userId);
//       setUserData([]);
//       showSnackbar('All data has been cleared!', 'success');
//     } else {
//       showSnackbar('No user data found to clear.', 'warning');
//     }
//     window.location.reload();
//   };

//   const logOut = () => {
//     localStorage.removeItem('userId'); // Remove userId from local storage
//     setUserId(null); // Reset userId state
//     setUserData([]); // Clear user data state
//     showSnackbar('You have successfully logged out!', 'success');
//     setTimeout(() => {
//       window.location.href = '/login'; // Redirect to login page
//     }, 1500); // Add a slight delay for the snackbar message
//   };

//   const showSnackbar = (message, severity) => {
//     setSnackbarMessage(message);
//     setSnackbarOpen(true);
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//   };

//   return (
//     <Wrapper>
//       <div>
//         {/* Orange Cap Holder */}
//         <div>
//           <p className='sub'>Orange Cap Holder</p>
//           <hr />
//           <div className='contentBox'>
//             <p className='contentBoxTitle'>Top Score Of This Season</p>
//             <div className="newspara">
//               {userId ? (
//                 userData.length > 0 ? (
//                   userData.some(player => player.playerName && player.playerScore !== undefined) ? (
//                     userData
//                       .filter(player => player.playerName && player.playerScore !== undefined)
//                       .sort((a, b) => b.playerScore - a.playerScore)
//                       .map((player, index) => (
//                         <p key={index}>{`${player.playerName}'s performance and his potential standing in the Orange Cap race, ${player.playerName} has been in exceptional form during this season, leading the Orange Cap race with ${player.playerScore} runs.`}</p>
//                       ))
//                   ) : (
//                     <p>Adding players...</p>
//                   )
//                 ) : (
//                   <p>Loading...</p>
//                 )
//               ) : (
//                 <p>Please log in to view player details.</p>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Other sections remain unchanged */}

//         <button className='clear-data' onClick={clearData}>Clear all data</button>
//         <button className='clear-data' onClick={logOut}>Log Out</button>

//         <Snackbar
//           open={snackbarOpen}
//           autoHideDuration={3000}
//           onClose={handleSnackbarClose}
//         >
//           {snackbarMessage}
//         </Snackbar>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .sub {
//     margin-left: 6rem;
//     font-size: 2rem;
//     margin-bottom: 1rem;
//     font-weight: 700;
//   }

//   hr {
//     background-color: rgb(228, 18, 18); /* Red color */
//     height: 2px;
//     border: none;
//     width: 85%;
//     margin-left: 5.6rem;
//   }

//   .contentBox {
//     height: auto;
//     padding: 1.5rem 1rem;
//     border-radius: 10px;
//     margin-left: 5.6rem;
//     width: 90%;
//     margin-top: 1.5rem;
//     background-color: #ebeaFF;
//   }

//   .contentBoxTitle {
//     font-size: 2rem;
//     margin-bottom: 1rem;
//     margin-top: 1rem;
//   }

//   .newspara {
//     color: rgb(92, 90, 90);
//     font-weight: 700;
//     font-size: 22px;
//   }

//   .clear-data {
//     margin: 50px 0px;
//     margin-left: 40%;
//     padding: 10px;
//     border-radius: 10%;
//     background-color: rgb(235, 15, 15);
//     color: rgb(207, 200, 200);
//     font-size: 1rem;
//     box-sizing: border-box;
//     border: 2px solid transparent;
//     transition: all 0.3s ease;
//   }

//   .clear-data:hover {
//     background-color: rgb(220, 210, 210);
//     color: rgb(252, 8, 8);
//     border-color: none;
//   }

//   /* Media Queries for Mobile Responsiveness */
//   @media (max-width: 768px) {
//     .sub {
//       margin-left: 1rem;
//       font-size: 1.5rem;
//     }

//     hr {
//       margin-left: 1rem;
//       width: 90%;
//     }

//     .contentBox {
//       margin-left: 1rem;
//       width: 85%;
//     }

//     .contentBoxTitle {
//       font-size: 1.5rem;
//     }

//     .newspara {
//       font-size: 18px;
//     }

//     .clear-data {
//       margin-left: 35%;
//       padding: 8px;
//       font-size: 0.9rem;
//     }
//   }

//   @media (max-width: 480px) {
//     .sub {
//       margin-left: 0.5rem;
//       font-size: 1.2rem;
//     }

//     hr {
//       margin-left: 0.5rem;
//       width: 90%;
//     }

//     .contentBox {
//       margin-left: 0.5rem;
//       width: 85%;
//     }

//     .contentBoxTitle {
//       font-size: 1.2rem;
//     }

//     .newspara {
//       font-size: 16px;
//     }

//     .clear-data {
//       margin-left: 25%;
//       padding: 6px;
//       font-size: 0.8rem;
//     }
//   }
// `;

// export default News;
