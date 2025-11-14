import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [winner, setWinner] = useState(null);

  // Function to check winner or draw
  const checkWinnerOrDraw = (board) => {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] &&
        board[i][0] === board[i][1] &&
        board[i][0] === board[i][2]
      ) {
        return board[i][0]; // X or O
      }
    }

    // Check columns
    for (let j = 0; j < 3; j++) {
      if (
        board[0][j] &&
        board[0][j] === board[1][j] &&
        board[0][j] === board[2][j]
      ) {
        return board[0][j]; // X or O
      }
    }

    // Check diagonals
    if (
      board[0][0] &&
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2]
    )
      return board[0][0];
    if (
      board[0][2] &&
      board[0][2] === board[1][1] &&
      board[0][2] === board[2][0]
    )
      return board[0][2];

    // Check for draw
    const isDraw = board.flat().every((cell) => cell !== null);
    if (isDraw) return "Draw";

    return null; // Game continues
  };

  // Handle a square click
  const handleGameBoard = (rowIndex, colIndex) => {
    setGameBoard((prev) => {
      const updatedBoard = prev.map((row) => [...row]);

      // Only allow move if cell is empty and no winner yet
      if (!updatedBoard[rowIndex][colIndex] && !winner) {
        updatedBoard[rowIndex][colIndex] = activePlayerSymbol;

        // Check if there is a winner or draw
        const result = checkWinnerOrDraw(updatedBoard);
        if (result) {
          setWinner(result);
          alert(result === "Draw" ? "It's a draw!" : `Player ${result} wins!`);
        } else {
          onSelectSquare(); // Switch player
        }
      }

      return updatedBoard;
    });
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleGameBoard(rowIndex, colIndex)}>
                  {playerSymbol || "-"}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
