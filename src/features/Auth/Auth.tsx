import React, { PureComponent, lazy, Suspense } from 'react';
import { Router, RouteComponentProps } from '@reach/router';

import { styled } from '../../theme';
import { SignIn } from './SignIn';
const SignInLazy = lazy(async () => import('./SignInLazy'));

class Auth extends PureComponent<RouteComponentProps> {
  public render() {
    return (
      <Wrapper>
        <Content>
          <Suspense fallback={<div>Loading...</div>}>
            <Router>
              <SignIn path="/" />
              <SignInLazy path="/lazy" />
            </Router>
          </Suspense>
        </Content>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background: ${p => {
    console.log(p.theme);

    return p.theme.background;
  }};
  display: grid;
  grid-template-rows: 60px 1fr;
  height: 100vh;
  margin: 0 auto;
  width: 25rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

export { Auth };
