import { render, screen } from '@testing-library/react';
import Footer from '../../components/Footer';

describe('Footer', () => {
  it('renders the footer element', () => {
    render(<Footer/>);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });

  it('contains a GitHub link', () => {
    render(<Footer/>);
    const link = screen.getByRole('link', { name: /github icon/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://github.com/Tea-Sea/recipe-frontend');
  });

  it('contains an SVG icon', () => {
    render(<Footer />);
    const svg = screen.getByTestId('github-icon');
    expect(svg.tagName.toLowerCase()).toBe('svg');
  });

  it('contains a ScreenReader element', () => {
    render(<Footer/>);
    const srText = screen.getByText('GitHub Icon');
    expect(srText).toBeInTheDocument();
    // expect(srText).not.toBeVisible();
  })
});
