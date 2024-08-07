import { useState, ReactNode } from 'react';
import Link from 'next/link';
interface LayoutProps {
    children: ReactNode;
}


export default function Layout({ children }: LayoutProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out bg-sidePanel shadow-md w-64 z-20`}>
                <div className="p-4 border-b border-green-600">
                    <h2 className="text-lg font-semibold text-white">My Games</h2>
                </div>
                <nav className="p-4">
                    <Link href="/" legacyBehavior>
                        <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-sidePanelLink text-white"
                            onClick={() => setIsOpen(false)}>Home</div>
                    </Link>
                    <Link href="/tic-tac-toe" legacyBehavior>
                        <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-sidePanelLink text-white"
                            onClick={() => setIsOpen(false)}>Tic-Tac-Toe</div>
                    </Link>
                    <Link href="/wordle" legacyBehavior>
                        <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-sidePanelLink text-white"
                            onClick={() => setIsOpen(false)}>Wordle</div>
                    </Link>
                    <Link href="/snake-n-ladder" legacyBehavior>
                        <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-sidePanelLink text-white"
                            onClick={() => setIsOpen(false)}>Snake & Ladder</div>
                    </Link>
                    <Link href="/2048" legacyBehavior>
                        <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-sidePanelLink text-white"
                            onClick={() => setIsOpen(false)}>2048</div>
                    </Link>
                    <Link href="/sudoku" legacyBehavior>
                        <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-sidePanelLink text-white"
                            onClick={() => setIsOpen(false)}>Sudoku</div>
                    </Link>
                    <a href="https://asutosh-tetris.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-sidePanelLink text-white"
                            onClick={() => setIsOpen(false)}>Tetris ↗</div>
                    </a>
                    <a href="https://asutosh-swain.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <div className="block py-2.5 px-4 rounded transition duration-200 hover:bg-sidePanelLink text-white"
                            onClick={() => setIsOpen(false)}>Snake ↗</div>
                    </a>
                </nav>
            </div>
            <div className={`fixed inset-0 bg-black opacity-30 ${isOpen ? 'block' : 'hidden'} z-10`} onClick={toggleSidebar}></div>
            <div className="flex-1 flex flex-col">
                <header className="flex justify-between items-center p-4 bg-topHeader shadow-md z-30 relative">
                    <button onClick={toggleSidebar} className="p-2 rounded focus:outline-none focus:bg-navButton text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <Link href="/" legacyBehavior>
                        <div className="text-xl font-semibold text-white">Bored? Games!</div>
                    </Link>
                </header>
                <main className="flex-1 p-4">
                    {children}
                </main>
            </div>
        </div>
    );
}
