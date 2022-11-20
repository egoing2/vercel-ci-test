import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom/client';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/more/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
});