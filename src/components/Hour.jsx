import React, { useContext } from 'react';
import styled from 'styled-components';
import clockPayloads from '../helper/clockPayloads';
import setColorGradient from '../helper/setColorGradient';
setColorGradient;
import getTimeFromTimeStamp from '../helper/getTimeFromTimeStamp';
import clockContext from '../context/clockContext';
const colorGradient = {
  colorA: ` #634dff`,
  colorB: `#4fd4ff`,
  position: '90deg',
}
const { HOUR } = clockPayloads;

const Hour = ({ timeStamp }) => {
  const { store } = useContext(clockContext);
  const { is24Hour } = store;
  
  let hour = +getTimeFromTimeStamp({ timeStamp, payload: HOUR });
  if (!is24Hour) {
    hour = hour % 12 || 12;
    hour = `0${hour}`.slice(-2);
  }

  return <SpanHour className="clock__hour" children={hour} />;
};

const SpanHour = styled.span`
  ${setColorGradient(colorGradient)}
`;

export default Hour;
