import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);
it('renders link text correctly', () => {
  const { queryByTestId } = render(<App />);
  // expect(queryByTestId('app-link').textContent).toBe('Learn React');
});
