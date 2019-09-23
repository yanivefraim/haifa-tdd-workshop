import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getGameState } from './gameService';
import { Registration } from './Registration';
import { Game } from './Game';

export const App = () => {
  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);
  const [winner, setWinner] = useState('');

  const handleNewGame = (p1, p2) => {
    setP1(p1);
    setP2(p2);
  };

  const handleCellClick = (rowIndex, cellIndex) => {
    const _board = board.map(row => [...row]);
    _board[rowIndex][cellIndex] = 'X';
    if (getGameState(_board) === 'X') {
      setWinner('X');
    }
    setBoard(_board);
  };

  return (
    <div className="App">
      <Registration onNewGame={handleNewGame}></Registration>
      <Game
        board={board}
        p1={p1}
        p2={p2}
        onCellClicked={handleCellClick}
      ></Game>
      {winner && <div data-testid="winner">{`${p1} won!!!`}</div>}
    </div>
  );
};

export default App;
