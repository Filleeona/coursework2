import { useState, useCallback } from 'react';

const MiniGame = ({ onClose }) => {
  const initialBoard = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0], // 0 represents the empty tile
  ];

  const [board, setBoard] = useState(initialBoard);
  const [moves, setMoves] = useState(0);
  const [isSolved, setIsSolved] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  // Shuffle the board when the game starts
  const startGame = useCallback(() => {
    const shuffled = shuffleBoard([...initialBoard]);
    setBoard(shuffled);
    setMoves(0);
    setIsSolved(false);
    setGameStarted(true);
  }, []);

  // Shuffle the board
  const shuffleBoard = (board) => {
    const flatBoard = board.flat();
    for (let i = flatBoard.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [flatBoard[i], flatBoard[j]] = [flatBoard[j], flatBoard[i]];
    }
    return [flatBoard.slice(0, 3), flatBoard.slice(3, 6), flatBoard.slice(6)];
  };

  // Find the empty tile (0)
  const findEmptyTile = () => {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (board[row][col] === 0) {
          return { row, col };
        }
      }
    }
    return null;
  };

  // Handle tile movement
  const handleTileClick = (row, col) => {
    if (isSolved || !gameStarted) return;

    const emptyTile = findEmptyTile();
    if (!emptyTile) return;

    const { row: emptyRow, col: emptyCol } = emptyTile;

    if (
      (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
      (Math.abs(col - emptyCol) === 1 && row === emptyRow)
    ) {
      const newBoard = board.map((r) => [...r]);
      newBoard[emptyRow][emptyCol] = newBoard[row][col];
      newBoard[row][col] = 0;
      setBoard(newBoard);
      setMoves((prev) => prev + 1);

      if (JSON.stringify(newBoard) === JSON.stringify(initialBoard)) {
        setIsSolved(true);
      }
    }
  };

  // Reset the game
  const resetGame = () => {
    startGame();
  };

  return (
    <div className="mini-game-container bg-green-100 p-6 rounded-lg shadow-lg text-center max-w-md mx-auto">
      <h2 className="text-2xl mb-4 text-green-800 font-bold">
        Mini-Game: Dog Puzzle
      </h2>
      <p className="mb-4 text-gray-700">
        Rearrange the tiles to complete the picture of a cute dog! Each number
        represents a part of the dog (e.g., 1 = head, 2 = ears, etc.). Move the
        empty space to solve it.
      </p>
      {!gameStarted ? (
        <button
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={startGame}
        >
          Start Puzzle
        </button>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-1 w-48 mx-auto mb-4">
            {board.map((row, rowIndex) =>
              row.map((tile, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`w-16 h-16 flex items-center justify-center text-xl font-semibold bg-blue-200 rounded-lg cursor-pointer transition-transform ${
                    tile === 0
                      ? 'bg-gray-300'
                      : 'hover:bg-blue-300 hover:scale-105'
                  }`}
                  onClick={() => handleTileClick(rowIndex, colIndex)}
                >
                  {tile !== 0 ? tile : ''}
                </div>
              )),
            )}
          </div>
          <p className="mb-4 text-gray-700">Moves: {moves}</p>
          {isSolved && (
            <p className="text-green-600 font-semibold mb-4 text-lg">
              Congratulations! You solved the puzzle!
            </p>
          )}
          <div className="flex justify-center gap-4">
            <button
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              onClick={resetGame}
            >
              Reset Puzzle
            </button>
            <button
              className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MiniGame;
