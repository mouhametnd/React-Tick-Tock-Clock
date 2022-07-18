import React from 'react';
import styled from 'styled-components';
import clockPayloads from '../helper/clockPayloads';
import getTimeFromTimeStamp from '../helper/getTimeFromTimeStamp';
import setColorGradient from '../helper/setColorGradient';
import months from '../helper/months';
import days from '../helper/days';

const colorGradient = {
  colorA: ` #ae4af6`,
  colorB: `#ffb960`,
  position: '90deg',
};
const { DATE } = clockPayloads;

const Calendar = ({ timeStamp }) => {
  const [monthNum, dayNum, dateNum] = getTimeFromTimeStamp({ timeStamp, payload: DATE });
  const month = months[monthNum];
  const day = days[dayNum];
  
  return <Time className="clock__calendar">{`${month}, ${day} ${dateNum}`}</Time>;
};

const Time = styled.span`
  ${setColorGradient(colorGradient)}
`;

export default Calendar;
