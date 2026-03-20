import Link from 'next/link';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <Link href="/" className="logo">
                    A <span className="accent-text">Docurinha</span>
                </Link>

                <nav className="nav">
                    <Link href="/" className="nav-link">Home</Link>
                    <Link href="/brigadeiros" className="nav-link">Brigadeiros</Link>
                    <Link href="/naked-cakes" className="nav-link">Naked Cakes</Link>
                    <Link href="/contact" className="nav-link">Contact</Link>
                </nav>

                {/* Mobile Menu Toggle - Can be enhanced with state later */}
                <button className="mobile-menu-btn" aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}
