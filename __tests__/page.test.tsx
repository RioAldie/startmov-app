import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it('render a heading', () => {
    render(<Home />);

    const heading = screen.queryByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});

describe('Home', () => {
  it('does not render a heading', () => {
    render(<Home />);

    const heading = screen.queryByRole('heading', { level: 2 });

    expect(heading).not.toBeInTheDocument();
  });
});
