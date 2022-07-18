import React from 'react';
import actions from '../context/actions';
import storeKeys from '../helper/storeKeys';
import useClockSetting from '../hooks/useClockSetting';
import SettingTitle from './SettingTitle';
import Toggle from './Toggle';
const { SET_TIME_PERIOD } = actions;
const { IS_24_HOUR } = storeKeys;

const SetTimePeriod = () => {
  const [is24Hour, handleClick] = useClockSetting({ actionName: SET_TIME_PERIOD, valueName: IS_24_HOUR });

  return (
    <>
      <SettingTitle children="24 format" />
      <Toggle isToggleActive={is24Hour} handleClick={handleClick} />
    </>
  );
};

export default SetTimePeriod;
