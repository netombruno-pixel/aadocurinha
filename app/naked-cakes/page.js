import Header from '../components/Header';
import Footer from '../components/Footer';
import './naked-cakes.css';

export const metadata = {
    title: "Naked Cakes | A Docurinha",
    description: "Beautiful naked cakes for your special occasions. Elegant, handmade, and delicious.",
};

export default function NakedCakes() {
    const cakeOptions = [
        { name: "Classic Vanilla", description: "Layers of vanilla sponge with vanilla cream and fresh berries" },
        { name: "Chocolate Dream", description: "Rich chocolate cake with chocolate ganache and strawberries" },
        { name: "Red Velvet", description: "Elegant red velvet layers with cream cheese frosting" },
        { name: "Lemon Bliss", description: "Zesty lemon cake with lemon curd and blueberries" },
        { name: "Strawberry Fields", description: "Vanilla cake with fresh strawberry filling and cream" },
        { name: "Custom Design", description: "Work with us to create your perfect celebration cake" },
    ];

    return (
        <>
            <Header />
            <main className="naked-cakes-page">
                <section className="cakes-hero">
                    <div className="container">
                        <h1 className="fade-in-up">Naked Cakes</h1>
                        <p className="hero-subtitle fade-in-up">Elegant simplicity for your special occasions</p>
                    </div>
                </section>

                <section className="cakes-section section">
                    <div className="container">
                        <h2 className="text-center">Our Cake Options</h2>
                        <div className="cakes-grid">
                            {cakeOptions.map((cake, index) => (
                                <div key={index} className="cake-card fade-in">
                                    <h3>{cake.name}</h3>
                                    <p>{cake.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="info-box">
                            <h3>Custom Orders</h3>
                            <p>
                                All our naked cakes are made to order and can be customized for your event.
                                Choose your size, flavors, and decorations. Perfect for weddings, birthdays,
                                and celebrations of all kinds.
                            </p>
                            <p className="lead-time">
                                <strong>Please order at least 72 hours in advance.</strong>
                            </p>
                        </div>

                        <div className="cta-section">
                            <p className="cta-text">Ready to order your perfect cake?</p>
                            <a
                                href="https://wa.me/14076164661"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Order Now via WhatsApp
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
