import storeKeys from '../helper/storeKeys';
import actions from './actions';

const { SET_THEME_MODE, SET_TIME_PERIOD, SHOULD_SETTING_BE_OPENED: SHOULD_SETTING_BE_OPENED_ACTION } = actions;
const { IS_24_HOUR, IS_DARK_MODE, SHOULD_SETTING_BE_OPENED } = storeKeys;

const reducer = (state, { action }) => {
  const { isDarkMode, is24Hour, shouldSettingBeOpen } = state;

  switch (action) {
    case SET_THEME_MODE:
      localStorage.setItem(IS_DARK_MODE, !isDarkMode);
      return { ...state, [IS_DARK_MODE]: !isDarkMode };
    case SET_TIME_PERIOD:
      localStorage.setItem(IS_24_HOUR, !is24Hour);
      return { ...state, [IS_24_HOUR]: !is24Hour };
    case SHOULD_SETTING_BE_OPENED_ACTION:
      return { ...state, [SHOULD_SETTING_BE_OPENED]: !shouldSettingBeOpen };
    default:
      return state;
  }
};

export default reducer;
