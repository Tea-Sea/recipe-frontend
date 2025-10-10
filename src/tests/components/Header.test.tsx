import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../../components/Header';

describe('Header', () => {
  it('renders the header element', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('contains a nav', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  it('contains 2 buttons', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>);
    const buttons = screen.getAllByRole('listitem');
    expect(buttons).toHaveLength(2);
  });

 it('contains a link to home page', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>);
    const link = screen.getByRole('link', { name: /cookbook logo/i });
    expect(link).toHaveAttribute('href', '/');

    const svg = screen.getByRole('img', { name: /cookbook logo/i });
    expect(svg).toBeInTheDocument();

    expect(svg).toHaveAttribute('width', '60');
    expect(svg).toHaveAttribute('viewBox', '190 0 270 750');
  });
});
