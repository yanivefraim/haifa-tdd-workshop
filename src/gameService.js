export function getGameState(board) {
  if (board[0].every(cell => cell === 'X')) {
    return 'X';
  }
  return '';
}
