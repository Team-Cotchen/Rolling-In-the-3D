import Test from './page';

import { render, screen } from '@testing-library/react';

describe('Test', () => {
  render(<Test />);

  it('테스트용 로그인이 노출된다.', () => {
    expect(screen.getByTestId('login-test')).toBeInTheDocument();
  });
});
