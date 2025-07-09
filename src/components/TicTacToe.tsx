import React, { useState, useCallback } from 'react';

type Player = 'X' | 'O' | null;
type Board = Player[];

interface TicTacToeProps {
  className?: string;
}

export const TicTacToe: React.FC<TicTacToeProps> = ({ className = '' }) => {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameHistory, setGameHistory] = useState<Board[]>([]);
  const [stepNumber, setStepNumber] = useState(0);

  const calculateWinner = useCallback((squares: Board): Player => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }, []);

  const isDraw = useCallback((squares: Board): boolean => {
    return squares.every(square => square !== null);
  }, []);

  const handleClick = useCallback((index: number) => {
    if (calculateWinner(board) || board[index]) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    
    setBoard(newBoard);
    setXIsNext(!xIsNext);
    setGameHistory(prev => [...prev.slice(0, stepNumber), newBoard]);
    setStepNumber(prev => prev + 1);
  }, [board, xIsNext, stepNumber, calculateWinner]);

  const jumpTo = useCallback((step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
    setBoard(gameHistory[step] || Array(9).fill(null));
  }, [gameHistory]);

  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setGameHistory([]);
    setStepNumber(0);
  }, []);

  const winner = calculateWinner(board);
  const draw = isDraw(board);
  
  let status: string;
  if (winner) {
    status = `Winner: ${winner}! 🎉`;
  } else if (draw) {
    status = "It's a draw! 🤝";
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  const renderSquare = (index: number) => {
    const isWinningSquare = winner && board[index] === winner;
    const isDisabled = !!board[index] || !!winner || draw;
    
    return (
      <button
        key={index}
        className={`
          w-20 h-20 text-3xl font-bold border-2 border-gray-300 
          transition-colors duration-200
          ${board[index] === 'X' ? 'text-blue-600' : 'text-red-600'}
          ${!isDisabled ? 'hover:bg-gray-50 cursor-pointer' : 'cursor-not-allowed'}
          ${isWinningSquare ? 'bg-green-100 border-green-400' : ''}
        `}
        onClick={() => handleClick(index)}
        disabled={isDisabled}
        type="button"
      >
        {board[index]}
      </button>
    );
  };

  const renderMoveHistory = () => {
    if (gameHistory.length === 0) return null;

    return (
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Game History</h3>
        <div className="flex flex-wrap gap-2">
          <button
            className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
            onClick={() => jumpTo(0)}
            type="button"
          >
            Go to start
          </button>
          {gameHistory.map((_, index) => (
            <button
              key={index}
              className={`px-3 py-1 rounded transition-colors ${
                stepNumber === index
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => jumpTo(index)}
              type="button"
            >
              Go to move #{index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Tic Tac Toe</h2>
        <div className={`text-lg font-semibold ${
          winner ? 'text-green-600' : draw ? 'text-yellow-600' : 'text-gray-600'
        }`}>
          {status}
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <div className="grid grid-cols-3 gap-1 bg-gray-300 p-1 rounded-lg">
          {Array.from({ length: 9 }, (_, index) => renderSquare(index))}
        </div>
      </div>

      <div className="text-center">
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold"
          onClick={resetGame}
          type="button"
        >
          New Game
        </button>
      </div>

      {renderMoveHistory()}

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Click on any square to make your move!</p>
        <p className="mt-1">Use the history buttons to go back in time ⏰</p>
      </div>
    </div>
  );
}; 