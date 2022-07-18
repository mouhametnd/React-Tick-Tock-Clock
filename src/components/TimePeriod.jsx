import React, { useContext } from 'react';
import styled from 'styled-components';
import clockContext from '../context/clockContext';
import clockPayloads from '../helper/clockPayloads';
import getTimeFromTimeStamp from '../helper/getTimeFromTimeStamp';
import setColorGradient from '../helper/setColorGradient';

const colorGradient = {
  colorA: ` #f7b63f`,
  colorB: `#faf879`,
  position: '90deg',
};
const { HOUR } = clockPayloads;

const TimePeriod = ({ timeStamp }) => {
  const { store } = useContext(clockContext);
  const { is24Hour } = store;
  let content = null;

  if (is24Hour) content = '24H';
  else {
    let hour = +getTimeFromTimeStamp({ timeStamp, payload: HOUR });
    hour >= 12 ? (content = 'PM') : (content = 'AM');
  }

  return <SpanTimePeriod className="clock__time-period"> {content} </SpanTimePeriod>;
};

const SpanTimePeriod = styled.span`
  ${setColorGradient(colorGradient)}
`;

export default TimePeriod;
