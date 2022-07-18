import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';
import Minute from './Minute';
import Second from './Second';
import Colons from './Colon';
import ButtonSettings from './ButtonSettings';
import Hour from './Hour';
import TimePeriod from './TimePeriod';
import Settings from './Settings';

const Card = () => {
  const [timeStamp, setTimeStamp] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeStamp(new Date()), 1000;
    });
    return () => clearInterval(interval);
  }, []);


  return (
    <CardWrapper>
      <Settings />
      <ButtonSettings />
      <CardContent>
        <CardLeft>
          <Hour timeStamp={timeStamp} />
          <Colons />
          <Minute timeStamp={timeStamp} />
        </CardLeft>
        <CardRight>
          <TimePeriod timeStamp={timeStamp} />
          <Second timeStamp={timeStamp} />
        </CardRight>
      </CardContent>
      <Calendar timeStamp={timeStamp} />
    </CardWrapper>
  );
};

const CardWrapper = styled.section`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  margin: auto;
  padding-block: 20px;
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 220px;
  border-radius: 10px;
  background-color: var(--card-bg);
  box-shadow: var(--card-shadow);

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -20px;
    left: -20px;
    bottom: -40px;
    right: -20px;
    background: linear-gradient(45deg, #24ff7d, #2f93f1, #ff5e9a);
    background-size: 200% 200%;
    border-radius: 4px;
    filter: blur(40px);
    animation: alternate-reverse 10s ease infinite;
    animation-name: glowing;

    @keyframes glowing {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 100% 50%;
      }
    }
  }

  .clock {
    &__hour,
    &__minute,
    &__colon {
      font-size: clamp(5rem, 3vw, 6.5rem);
      font-weight: 900;
    }

    &__second,
    &__time-period {
      font-size: clamp(1.4rem, 1.5vw, 2.5rem);
      font-weight: 600;
    }

    &__calendar {
      text-align: center;
      font-size: clamp(1.5rem, 2vw, 2.5rem);
    }
  }
`;

const CardLeft = styled.div`
  display: flex;
  gap: 20px;
`;

const CardRight = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 9px 40px 9px 10px;
`;

const CardContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: max-content;
  margin-inline: auto;
`;

export default Card;
