// import React from 'react';
// import styled  from 'styled-components';
// import { BiSolidCricketBall } from "react-icons/bi";
// import { NavLink } from 'react-router-dom';

// const Logo = () => {
//   return (
//     <Wrapper>
//       <StyledNavLink to="/">
//             <h1><BiSolidCricketBall /> SPORT</h1>
//       </StyledNavLink>
//     </Wrapper>
//   )
// }

// const Wrapper = styled.section`
//   display: flex;
//   align-items: center;
//   background-color: #EBEAFF;
//   position: sticky;
//   top: 2px;
//   height: 120px;

//   h1 {
//     font-size: 2rem;
//     color: #000;
//     text-decoration: none;
//     margin-left: 5rem;
//     margin-right: 35rem; /* Default for larger screens */
//     display: flex;
//     align-items: center;
//   }

//   @media (max-width: 1024px) {
//     h1 {
//       margin-right: 0rem; /* Adjust for responsive views */
//     }
//   }
// `;

//   const StyledNavLink = styled(NavLink)`
//     text-decoration: none;

//     &.active h1  {
//         color: #3d3bf3; /* Active state for the text */
//     }

//     &.active p {
//         color : #3d3bf3;
//   }
//   `;


// export default Logo

import React from 'react';
import styled from 'styled-components';
import { BiSolidCricketBall } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <Wrapper>
      <StyledNavLink to="/">
        <h1>
          <BiSolidCricketBall /> SPORT
        </h1>
      </StyledNavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  background-color: #EBEAFF;
  position: sticky;
  top: 0;
  height: 120px;
  padding: 0 1rem;

  h1 {
    font-size: 2rem;
    color: #000;
    text-decoration: none;
    margin-left: 5rem;
    margin-right: auto; /* Push content to the right by default */
    display: flex;
    align-items: center;
  }

  @media (max-width: 576px) { /* xs */
    h1 {
      font-size: 1.5rem;
      margin-left: 2rem;
      margin-right: 0;
    }
  }

  @media (min-width: 577px) and (max-width: 768px) { /* sm */
    h1 {
      font-size: 1.75rem;
      margin-left: 2rem;
      margin-right: 0;
    }
  }

  @media (min-width: 769px) and (max-width: 992px) { /* md */
    h1 {
      font-size: 2rem;
      margin-left: 3rem;
      margin-right: auto;
    }
  }

  @media (min-width: 993px) { /* lg and up */
    h1 {
      font-size: 2.25rem;
      margin-left: 5rem;
      margin-right: 5rem;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &.active h1 {
    color: #3d3bf3; /* Active state for the text */
  }
`;

export default Logo;
