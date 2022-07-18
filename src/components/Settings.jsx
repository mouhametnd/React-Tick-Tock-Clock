import React, { useContext } from 'react';
import styled from 'styled-components';
import clockContext from '../context/clockContext';
import SetTheme from './SetTheme';
import SetTimePeriod from './SetTimePeriod';

const Settings = () => {
  const { store } = useContext(clockContext);
  const { shouldSettingBeOpen } = store;

  return (
    shouldSettingBeOpen && (
      <Ul id='setting'>
        <Li>
          <SetTheme />
        </Li>
        <Li>
          <SetTimePeriod />
        </Li>
      </Ul>
    )
  );
};

const Ul = styled.ul`
  position: absolute;
  top: -5px;
  right: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px;
  background-color: var(--body-bg);
  width: 200px;
  border-radius: 10px;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.5);

`;

const Li = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  padding-left: 20px;
`;

export default Settings;
