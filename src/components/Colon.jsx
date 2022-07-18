import React from 'react';
import styled from 'styled-components';

const Colons = () => <SpanColon className="clock__colon">:</SpanColon>;

const SpanColon = styled.span`
  color: var(--colon);
`;

export default Colons;
