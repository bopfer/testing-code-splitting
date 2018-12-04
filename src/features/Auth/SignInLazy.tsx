import React, { Component } from 'react';
import { RouteComponentProps } from '@reach/router';

import { styled } from '../../theme';

class SignIn extends Component<RouteComponentProps> {
  public render() {
    return (
      <Wrapper>
        <Title>Lazy Sign In</Title>
        <div>Lazy Sign In Page</div>
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

    if (p.theme.background) {
      return p.theme.background;
    }

    console.error('Theme is not there!!!!!!!');

    return 'black';
  }};
`;

export { SignIn as default };
