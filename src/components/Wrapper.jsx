import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import actions from '../context/actions';
import clockContext from '../context/clockContext';

const { SHOULD_SETTING_BE_OPENED } = actions;

const Wrapper = ({ children }) => {
  const {
    store: { isDarkMode, shouldSettingBeOpen },
    dispatch,
  } = useContext(clockContext);

  useEffect(() => {
    document.body.className = isDarkMode && 'dark-theme';
  });

  const hideSetting = ({ target }) => {
    if (!target.matches('#setting') && !target.matches('#setting *') && shouldSettingBeOpen)
      dispatch({ action: SHOULD_SETTING_BE_OPENED });
  };

  return <Container children={children} onClick={hideSetting} />;
};

const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding-inline: 10px;
`;

export default Wrapper;
