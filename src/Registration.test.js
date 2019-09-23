import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Registration } from './Registration';

afterEach(cleanup);
it('should not start a new game when theres no valid names', () => {
  const onNewGame = jest.fn();
  const { queryByTestId } = render(<Registration onNewGame={onNewGame} />);
  fireEvent.change(queryByTestId('p1-input'), { target: { value: 'Yaniv' } });
  fireEvent.click(queryByTestId('new-game'));
  expect(onNewGame).not.toHaveBeenCalled();
});
