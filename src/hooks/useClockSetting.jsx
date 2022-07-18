import { useContext } from 'react';
import actions from '../context/actions';
import clockContext from '../context/clockContext';

const useClockSetting = ({ actionName, valueName }) => {
  const { dispatch, store } = useContext(clockContext);
  const { [actionName]: action } = actions;
  const { [valueName]: value } = store;

  const toggleClick = () => dispatch({ action });
  return [value, toggleClick];
};

export default useClockSetting;
