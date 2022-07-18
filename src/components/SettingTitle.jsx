import React from 'react';
import styled from 'styled-components';

const SettingTitle = ({ children }) => <Span children={children} />;

const Span = styled.span`
  color: var(--basic-clr);
`;

export default SettingTitle;
