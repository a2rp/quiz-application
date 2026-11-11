import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the quiz application title', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /quiz application/i })).toBeInTheDocument();
});
