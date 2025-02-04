import Board from './design/board';

import { RootState,  playTurn, resetGame } from '../hooks/index';
import { useDispatch, useSelector } from 'react-redux';

// import { initBoard,  winningSituation, makeMove, switchPlayer} from '../utils/index';

import Link from 'next/link';


const Game = () => {

    const dispatch = useDispatch();
    const { board, currentPlayer, winner, isDraw} = useSelector(
        (state: RootState) => state.game
    );

    const handleCells = ( row: number, col: number) => {
        dispatch(playTurn({ row, col }));
    };

    const handleReset = () => {
        dispatch(resetGame());
    }

    return (
        <div className="flex flex-col items-center justify-center gap-3 min-h-screen">
            <h1 className="text-3xl font-bold">Mini Games</h1>
            <p className="text-lg text-gray-600">This game is built by myself, enjoy!</p>
            <Board board={board} onCellClick={handleCells} />
            <p>
                {winner
                ? `The winner is : ${winner}`
                : isDraw
                ? `DRAW !! PLAY AGAIN`
                : `Current Player: ${currentPlayer}`
                }
            </p>

            <button onClick={handleReset} className="bg-cyan-400 text-black px-4 py-2 rounded ">
                Reset Game
            </button>
            <Link href='/'>Back to Home</Link>
        </div>
    );
};

export default Game;