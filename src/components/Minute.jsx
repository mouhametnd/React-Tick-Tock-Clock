import React from 'react';
import styled from 'styled-components';
import clockPayloads from '../helper/clockPayloads';
import getTimeFromTimeStamp from '../helper/getTimeFromTimeStamp';
import setColorGradient from '../helper/setColorGradient';
const { MINUTE } = clockPayloads;
const colorGradient = {
  colorA: ` #ff5e9a`,
  colorB: `#ffb960`,
  position: '90deg',
};

const Minute = ({ timeStamp }) => (
  <SpanMinute className="clock__minute">{getTimeFromTimeStamp({ timeStamp, payload: MINUTE })}</SpanMinute>
);

const SpanMinute = styled.span`
  ${setColorGradient(colorGradient)}
`;

export default Minute;
