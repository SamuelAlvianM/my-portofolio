'use client';
import Board from '@/app/components/tic-tac-toe/design/Board';
import { RootState } from '../hooks/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { playTurn, resetGame } from '../hooks/redux/gameSlice';
import Link from 'next/link';
import { useState } from 'react';

const GameContent = () => {
    const dispatch = useDispatch();
    const { board, currentPlayer, winner, isDraw} = useSelector(
        (state: RootState) => state.game
    );

    const handleCells = (row: number, col: number) => {
        dispatch(playTurn({ row, col }));
    };

    const handleReset = () => {
        dispatch(resetGame());
    }

    return (
        <div className="flex flex-col items-center justify-center gap-3 min-h-screen">
            <h1>Main XO XO GAS</h1>
            <Board board={board} onCellClick={handleCells} />
            <p>
                {winner
                ? `The winner is : ${winner}`
                : isDraw
                ? `DRAW !! PLAY AGAIN`
                : `Current Player: ${currentPlayer}`
                }
            </p>

            <button onClick={handleReset} className="bg-cyan-400 text-black px-4 py-2 rounded">
                Reset Game
            </button>
            <Link href='/'>Back to Home</Link>
        </div>
    );
};

// Wrap the game content with the Redux provider
import { Provider } from 'react-redux';
import { store } from '../hooks/redux/store';

const Game = () => {
    return (
        <Provider store={store}>
            <GameContent />
        </Provider>
    );
};

export default Game;