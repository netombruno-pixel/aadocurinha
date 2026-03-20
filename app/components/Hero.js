import Link from 'next/link';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-overlay">
                <div className="hero-content fade-in-up">
                    <h6 className="hero-subtitle">Feitos à Mão com Amor</h6>
                    <h1 className="hero-title">
                        A <span className="accent-text">Docurinha</span>
                    </h1>
                    <p className="hero-desc">
                        Brigadeiros artesanais e Naked Cakes crafted with passion in Windermere, FL
                    </p>
                    <div className="hero-ctas">
                        <Link href="/brigadeiros" className="btn btn-primary">
                            Explore Menu
                        </Link>
                        <Link href="/contact" className="btn btn-accent">
                            Order Now
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hero-images">
                <div className="hero-img hero-img-1">
                    <img src="/brigadeiros-hero.png" alt="Gourmet Brigadeiros" />
                </div>
                <div className="hero-img hero-img-2">
                    <img src="/brigadeiros-variety.png" alt="Variety of Brigadeiros" />
                </div>
                <div className="hero-img hero-img-3">
                    <img src="/naked-cake.png" alt="Elegant Naked Cake" />
                </div>
            </div>
        </section>
    );
}
