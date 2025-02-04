'use client';

import { Provider } from 'react-redux';
import konteks_redux_ttt from "../components/hooks/redux/index";
 // Update path as needed
import Game from '../components/tic-tac-toe/page';
import { AnimatePresence, motion } from 'framer-motion';

export default function TicTacToePage() {
    return (
        <Provider store={konteks_redux_ttt}>
        <AnimatePresence mode="wait">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
                <Game />
            </div>
            </motion.div>
            </AnimatePresence>
        </Provider>
    );
}
