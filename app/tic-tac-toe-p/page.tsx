'use client';

'use client';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'framer-motion';

const GameWithNoSSR = dynamic(
    () => import('../components/tic-tac-toe/Game'),
    { ssr: false }
);

export default function TicTacToePage() {
    return (
        <AnimatePresence mode="wait">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            >
            <GameWithNoSSR />
            </motion.div>
            </AnimatePresence>
    );
}
