import React from 'react';
import styled from 'styled-components';
import clockPayloads from '../helper/clockPayloads';
import getTimeFromTimeStamp from '../helper/getTimeFromTimeStamp';
import setColorGradient from '../helper/setColorGradient';
const { SECOND } = clockPayloads;
const colorGradient = {
  colorA: ` #24ff6d
  `,
  colorB: `#2f93f1`,
  position: '90deg',
};

const Seconds = ({ timeStamp }) => (
  <SpanSecond className="clock__second">{getTimeFromTimeStamp({ timeStamp, payload: SECOND })}</SpanSecond>
);

const SpanSecond = styled.span`
  ${setColorGradient(colorGradient)}
`;

export default Seconds;
