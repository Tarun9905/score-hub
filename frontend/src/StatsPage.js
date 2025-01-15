import React, { useState } from 'react';
import styled from 'styled-components';
import Short from './Components/Short';
import News from './Components/News';

const StatsPage = () => {
  const [show, setShow] = useState(false);

  const news = () => {
    setShow(false);
  };

  const short = () => {
    setShow(true);
  };

  return (
    <Wrapper>
      <div>
        <div>
          <h1 className="mainHeading">Welcome to Sports Hub</h1>
          <p className="para">Your ultimate destination for the latest sports news and updates</p>
          <p className="content">Popular Articles</p>
          <div className="contentBtn">
            <button
              className={`btn ${!show ? 'active' : ''}`}
              onClick={news}
            >
              News
            </button>
            <button
              className={`btn ${show ? 'active' : ''}`}
              onClick={short}
            >
              Short
            </button>
          </div>
        </div>
        <div className={`news ${show ? 'hide' : ''}`}>
          <News />
        </div>
        <div className={`short ${show ? '' : 'hide'}`}>
          <Short />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .mainHeading {
    display: flex;
    justify-content: center;
    margin-top: 5rem;
    font-size: 2.5rem;
    font-weight: 800;
  }

  .para {
    text-align: center;
    margin-top: 1rem;
    font-size: 23px;
    font-weight: 650;
  }

  .content {
    text-align: center;
    margin-top: 2.5rem;
    font-size: 2.3rem;
    font-weight: 700;
  }

  .btn {
    background-color: #000;
    color: #fff;
    padding: 0.5rem 0.8rem;
    border-radius: 10px;
    margin-right: 5rem;
    margin-left: 4rem;
    font-weight: 700;

    &:hover {
      background-color: rgb(233, 232, 241);
      color: #000;
    }
  }

  .btn.active {
    background-color: rgb(233, 232, 241);
    color: #000;
  }

  .contentBtn {
    display: flex;
    justify-content: center;
  }

  .news,
  .short {
    transition: opacity 0.3s ease;
  }

  .hide {
    display: none;
  }

  .short,
  .news {
    margin-top: 0; /* Ensure no gap above the content */
  }

  /* Media Queries for Mobile Responsiveness */
  @media (max-width: 768px) {
    .mainHeading {
      font-size: 2rem;
    }

    .para {
      font-size: 18px;
    }

    .content {
      font-size: 2rem;
    }

    .contentBtn {
      display:flex;
      align-items: center;
    }

    .btn {
      margin-right: 20px;
      margin-left: 0;
      margin-bottom: 1rem;
      font-size: 1rem;
      padding: 0.4rem 0.7rem;
    }

    .btn.active {
      background-color: rgb(233, 232, 241);
      color: #000;
    }
  }

  @media (max-width: 480px) {
    .mainHeading {
      font-size: 1.7rem;
    }

    .para {
      font-size: 16px;
    }

    .content {
      font-size: 1.8rem;
    }

    .contentBtn {
      display:flex;
      align-items: center;
    }

    .btn {
      margin-right: 20px;
      margin-left: 0;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      padding: 0.3rem 0.6rem;
    }

    .btn.active {
      background-color: rgb(233, 232, 241);
      color: #000;
    }
  }
`;

export default StatsPage;
