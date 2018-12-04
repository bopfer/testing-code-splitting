import React from 'react';
import { RouteComponentProps } from '@reach/router';

import styled from 'styled-components';

const Home: React.SFC<RouteComponentProps> = () => (
  <div>
    <Header>Home</Header>
    <Span>Welcome</Span>
  </div>
);

const Header = styled.h1`
  padding-bottom: 50px;
`;

const Span = styled.span`
  margin: 0 10px;
`;

export { Home };
