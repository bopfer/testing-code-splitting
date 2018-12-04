import { renderRoute, wait } from '../../../utils/testingUtils';

it('should render', async () => {
  const { queryByText } = renderRoute({ route: '/auth/lazy' });

  await wait(() =>
    expect(queryByText(/Loading/)).not.toBeInTheDocument()
  );

  expect(queryByText(/Lazy Sign In Page/)).toBeTruthy();
});
