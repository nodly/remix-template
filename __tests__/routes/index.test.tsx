import { render, screen } from '@testing-library/react';

import Home from '~/routes/index';

describe('Home', () => {
  it('should render template heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /@nodly\/remix-template/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
