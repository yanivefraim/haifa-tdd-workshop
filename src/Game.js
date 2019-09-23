import React from 'react';
export const Game = ({ p1, p2, board, onCellClicked }) => {
  return (
    <div>
      <h3 data-testid="p1-title">{p1}</h3>
      <h3 data-testid="p2-title">{p2}</h3>
      <table>
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  onClick={() => onCellClicked(rowIndex, cellIndex)}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
