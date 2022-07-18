import React, { useContext } from 'react';
import styled from 'styled-components';
import VerticalDots from '../assets/svgs/VerticalDotsSvg.jsx';
import actions from '../context/actions.jsx';
import clockContext from '../context/clockContext.jsx';

const { SHOULD_SETTING_BE_OPENED } = actions;

const ButtonSettings = () => {
  const { dispatch } = useContext(clockContext);
  const handleClick = () => dispatch({ action: SHOULD_SETTING_BE_OPENED });
  
  return (
    <Button onClick={handleClick}>
      <VerticalDots />
    </Button>
  );
};

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border-radius: 0px;
  outline: none;
  border: none;
  cursor: pointer;

  & * {
    pointer-events: none;
  }

  & svg {
    width: 30px;
    height: 30px;
    fill: var(--basic-clr);
  }
`;

export default ButtonSettings;
