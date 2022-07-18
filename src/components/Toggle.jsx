import React from 'react';
import styled from 'styled-components';

const Toggle = ({ isToggleActive, handleClick }) => {
  return (
    <Container isToggleActive={isToggleActive} onClick={handleClick}>
      <div>.</div>
    </Container>
  );
};

const Container = styled.div`
  width: 35px;
  height: 15px;
  background-color: #485470;
  box-shadow: inset 2px 2px 2px rgba(255, 255, 255, 0.1) inset -2px -2px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border-radius: 10px;

  & * {
    pointer-events: none;
  }

  & div {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #ff5e9a;
    box-shadow: 0 5px 25px #ff5e9a;
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

    ${({ isToggleActive }) =>
      isToggleActive &&
      `
        transform: translateX(20px);
        background-color: #0bff8d;
        box-shadow: 0 5px 25px #0bff8d;
      `}
  }
`;

export default Toggle;
