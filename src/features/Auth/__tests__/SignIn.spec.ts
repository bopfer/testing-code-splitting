import { renderRoute } from '../../../utils/testingUtils';

it('should render', () => {
  const { queryByText } = renderRoute({ route: '/auth' });

  expect(queryByText(/Sign In Page/)).toBeTruthy();
});
