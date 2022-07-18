import React, { useContext } from 'react';
import actions from '../context/actions';
import clockContext from '../context/clockContext';
import storeKeys from '../helper/storeKeys';
import useClockSetting from '../hooks/useClockSetting';
import SettingTitle from './SettingTitle';
import Toggle from './Toggle';
const { SET_THEME_MODE } = actions;
const { IS_DARK_MODE } = storeKeys;

const SetTheme = () => {
  const [isDarkMode, handleClick] = useClockSetting({ actionName: SET_THEME_MODE, valueName: IS_DARK_MODE });

  return (
    <>
      <SettingTitle children="dark theme" />
      <Toggle isToggleActive={isDarkMode} handleClick={handleClick} />
    </>
  );
};

export default SetTheme;
