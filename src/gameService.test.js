import { getGameState } from './gameService';

test('"X" should win for first row', () => {
  // eslint-disable-next-line
  const board = [
    ['X', 'X', 'X'],
    ['', '', ''],
    ['', '', ''],
  ];

  expect(getGameState(board)).toBe('X');
});
