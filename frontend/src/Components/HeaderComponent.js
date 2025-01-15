import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IoReorderThree } from "react-icons/io5";

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Wrapper>
      <IoReorderThree
        className={`hamburger ${menuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      />
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <StyledNavLink to="/register" onClick={closeMenu}>
          <p>Register</p>
        </StyledNavLink>
        <StyledNavLink to="/addplayers" onClick={closeMenu}>
          <p>Add Players</p>
        </StyledNavLink>
        <StyledNavLink to="/addwickets" onClick={closeMenu}>
          <p>Add Wickets</p>
        </StyledNavLink>
        <StyledNavLink to="/teamscore" onClick={closeMenu}>
          <p>Team Score</p>
        </StyledNavLink>
        <StyledNavLink to="/winner" onClick={closeMenu}>
          <p>Winner</p>
        </StyledNavLink>
      </div>
    </Wrapper>
  );
};

// const Wrapper = styled.section`
//   display: flex;
//   align-items: center;
//   background-color: #EBEAFF;
//   position: sticky;
//   top: 0;
//   height: 120px;
//   padding: 0 1rem;

//   .hamburger {
//     display: none;
//     font-size: 2rem;
//     cursor: pointer;
//   }

//   .nav-links {
//     display: flex;
//     align-items: center;
//     justify-content: cen;
    
//     p {
//       color: #000;
//       text-decoration: none;
//       margin-left: 4rem;
//       font-size: 1.2rem;
//       font-weight: 600;
//     }
//   }

//   @media (max-width: 768px) {
//     .hamburger {
//       display: block;
//       margin-left:8rem;
//     }

//     .nav-links {
//       display: none;
//       flex-direction: column;
//       position: absolute;
//       top: 120px;
//       left: 0;
//       background-color: #EBEAFF;
//       width: 100%;
//       padding: 1rem 0;

//       p {
//         margin-left: 0;
//         text-align: center;
//         margin: 1rem 0;
//       }
//     }

//     .nav-links.open {
//       display: flex; /* This is critical to show the menu */
//     }
//   }
// `;

// const Wrapper = styled.section`
//   display: flex;
//   align-items: center;
//   background-color: #EBEAFF;
//   position: sticky;
//   top: 0;
//   height: 120px;
//   padding: 0 1rem;

//   .hamburger {
//     display: none; /* Hidden by default for large screens */
//     font-size: 2rem;
//     cursor: pointer;
//   }

//   .nav-links {
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     p {
//       color: #000;
//       text-decoration: none;
//       margin-left: 4rem;
//       font-size: 1.2rem;
//       font-weight: 600;
//     }
//   }

//   @media (min-width: 769px) {
//     .hamburger {
//       display: block; /* Show on large screens */
//       margin-left: 30rem; /* Add margin-left for large screens */
//     }
//   }

//   @media (max-width: 768px) {
//     .hamburger {
//       display: block;
//       margin-left: 8rem; /* Adjust for smaller screens */
//     }

//     .nav-links {
//       display: none;
//       flex-direction: column;
//       position: absolute;
//       top: 120px;
//       left: 0;
//       background-color: #EBEAFF;
//       width: 100%;
//       padding: 1rem 0;

//       p {
//         margin-left: 0;
//         text-align: center;
//         margin: 1rem 0;
//       }
//     }

//     .nav-links.open {
//       display: flex; /* Show menu when open */
//     }
//   }
// `;

// const Wrapper = styled.section`
//   display: flex;
//   align-items: center;
//   background-color: #EBEAFF;
//   position: sticky;
//   top: 0;
//   height: 120px;
//   padding: 0 1rem;

//   .hamburger {
//     display: none; /* Hidden by default for large screens */
//     font-size: 2rem;
//     cursor: pointer;
//   }

//   .nav-links {
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     p {
//       color: #000;
//       text-decoration: none;
//       margin-left: 4rem;
//       font-size: 1.2rem;
//       font-weight: 600;
//     }
//   }

//   @media (max-width: 768px) {
//     .hamburger {
//       display: block; /* Show hamburger icon on small screens */
//       margin-left: 8rem;
//     }

//     .nav-links {
//       display: none;
//       flex-direction: column;
//       position: absolute;
//       top: 120px;
//       left: 0;
//       background-color: #EBEAFF;
//       width: 100%;
//       padding: 1rem 0;

//       p {
//         margin-left: 0;
//         text-align: center;
//         margin: 1rem 0;
//       }
//     }

//     .nav-links.open {
//       display: flex; /* Show menu when open */
//     }
//   }
// `;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  background-color: #EBEAFF;
  position: sticky;
  top: 0;
  height: 120px;
  padding: 0 1rem;

  .hamburger {
    display: none; /* Hidden by default for large screens */
    font-size: 2rem;
    cursor: pointer;
  }

  .nav-links {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      color: #000;
      text-decoration: none;
      margin-left: 4rem;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  
  @media (max-width: 576px) { /* xs */
    .hamburger {
      display: block;
      margin-left: 5rem;
    }

    .nav-links {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 120px;
      left: 0;
      background-color: #EBEAFF;
      width: 100%;
      padding: 1rem 0;

      p {
        margin-left: 0;
        text-align: center;
        margin: 1rem 0;
      }
    }

    .nav-links.open {
      display: flex;
    }
  }

  @media (min-width: 577px) and (max-width: 768px) { /* sm */
    .hamburger {
      display: block;
      margin-left: 15rem;
    }

      .nav-links {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 120px;
      left: 0;
      background-color: #EBEAFF;
      width: 100%;
      padding: 1rem 0;

      p {
        margin-left: 0;
        text-align: center;
        margin: 1rem 0;
      }
    }

    .nav-links.open {
      display: flex;
    }
  }
  }

  @media (min-width: 769px) and (max-width: 992px) { /* md */
    .hamburger {
      display: block;
      margin-left: 20rem;
    }

    .nav-links {
      p {
        margint: 0;
        font-size: 0.5rem;
      }
    }
  }

  @media (min-width: 993px) { /* lg and up */
    .hamburger {
      display: none; /* Hide on larger screens */
    }

    .nav-links {
      display: flex;

      p {
        margin-left: 2rem;
      }
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &.active p {
    color: #3d3bf3;
  }
`;



export default HeaderComponent;
