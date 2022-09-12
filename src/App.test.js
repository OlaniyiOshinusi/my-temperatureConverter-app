import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const h1Element = screen.getByText(/temperature converter/i);
  expect(h1Element).toBeInTheDocument();
});

test('renders H1', () => {
  render(<App />);
  const headingOne = screen.getByRole('heading');
  expect(headingOne).toBeInTheDocument();
});