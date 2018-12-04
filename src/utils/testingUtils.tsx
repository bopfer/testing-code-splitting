// tslint:disable:no-import-side-effect

import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render } from 'react-testing-library';
import { Router, createMemorySource, createHistory, LocationProvider } from '@reach/router';

import { ThemeProvider, themes } from '../theme';
import { Auth } from '../features/Auth';

/**
 * Helper wrappers for testing components.
 */

beforeEach(() => {
  jest.resetModules();
});

interface IRenderRouteProps {
  /* The route to load. */
  route: string;

  /* pass along the options that react-testing-library takes info for 'render'. */
  options?: { container: HTMLElement; baseElement?: HTMLElement };
}

/**
 * Render the full tree from the root of the app through the Routes for Auth.
 * The necessary providers are mocked for testing.
 * The passed in route will be triggered.
 */
export const renderRoute = (props: IRenderRouteProps) => {
  const testHistory = createHistory(createMemorySource(props.route));
  const theme = 'light';

  return {
    ...render(
      <ThemeProvider theme={themes[theme]}>
        <LocationProvider history={testHistory}>
          <Router>
            <Auth path="auth/*" />
          </Router>
        </LocationProvider>
      </ThemeProvider>,
      props.options
    ),
    history: testHistory /* Pass back the history in-case it's needed to trigger any navigation */
  };
};

// re-export everything in r-t-l so they can all be imported from this file.
export * from 'react-testing-library';
