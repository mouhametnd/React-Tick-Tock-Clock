import React, { useReducer } from 'react';
import reducer from './reducer';
import clockContext from './clockContext';

let isDarkPrefered = JSON.parse(localStorage.getItem('isDarkMode'));
let is24Hour = JSON.parse(localStorage.getItem('is24Hour'));

isDarkPrefered ??= matchMedia('(prefers-color-scheme: dark)').matches;
is24Hour ??= true;

const intialStore = {
  is24Hour,
  isDarkMode: isDarkPrefered,
  isSoundOn: true,
  shouldSettingBeOpened: false,
};

const Provider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, intialStore);
  return <clockContext.Provider children={children} value={{ store, dispatch }} />;
};

export default Provider;
