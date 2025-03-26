import MoviesPage from '@/app/movies/page';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

describe('Movie', () => {
  it('render a title', async () => {
    render(await MoviesPage());

    const title = screen.getByText('Movies');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('P');
  });
});

describe('Movie', () => {
  it('render a title', async () => {
    render(await MoviesPage());
    const div = screen.getByTestId('carousels');
    await waitFor(() => {
      expect(div).toBeInTheDocument();
      expect(div.tagName).toBe('DIV');
    });
  });
});
