import React from 'react';
import { RouteComponentProps, Link } from '@reach/router';

import styled from 'styled-components';

const Home: React.SFC<RouteComponentProps> = () => (
  <div>
    <Header>Home</Header>
    <Span>Welcome</Span>
    <Span>
      <Link to="/auth">Sign In</Link>
    </Span>
    <Span>
      <Link to="/auth/lazy">Lazy Sign In</Link>
    </Span>
  </div>
);

const Header = styled.h1`
  padding-bottom: 10px;
`;

const Span = styled.span`
  margin: 0 10px;
`;

export { Home };
