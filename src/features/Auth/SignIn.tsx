import React, { Component } from 'react';
import { RouteComponentProps } from '@reach/router';

import { styled } from '../../theme';

class SignIn extends Component<RouteComponentProps> {
  public render() {
    return (
      <Wrapper>
        <Title>Sign In</Title>
        <div>Sign In Page</div>
      </Wrapper >
    );
  }
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #fff;
  background: ${p => {
    console.log(p.theme);

    return p.theme.background;
  }};
`;

export { SignIn };
