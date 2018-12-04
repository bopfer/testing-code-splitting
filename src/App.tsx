import React, { Component } from 'react';
import { Router } from '@reach/router';

import { ThemeProvider, themes } from './theme';
import { Home } from './features/Home';
import { Auth } from './features/Auth';

class App extends Component {
  public render() {
    const theme = 'light';

    return (
      <ThemeProvider theme={themes[theme]}>
        <Router>
          <Home path="/" />
          <Auth path="auth/*" />
        </Router>
      </ThemeProvider>
    );
  }
}

export { App };
