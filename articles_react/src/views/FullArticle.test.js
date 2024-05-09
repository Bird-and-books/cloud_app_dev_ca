import { render, screen } from '@testing-library/react';
import FullArticle from './FullArticle';

test('renders learn react link', () => {
  render(<FullArticle />);
  const linkElement = screen.getByText('Article not found.');
  expect(linkElement).toBeInTheDocument();
});
