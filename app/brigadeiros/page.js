import Header from '../components/Header';
import Footer from '../components/Footer';
import './brigadeiros.css';

export const metadata = {
    title: "Brigadeiros | A Docurinha",
    description: "Explore our artisanal brigadeiros menu. Handmade with premium ingredients and love.",
};

export default function Brigadeiros() {
    const flavors = [
        { name: "Traditional", description: "Classic chocolate brigadeiro with chocolate sprinkles" },
        { name: "Oreo", description: "Creamy brigadeiro topped with crushed Oreo cookies" },
        { name: "Pistachio", description: "Delicate pistachio brigadeiro with chopped pistachios" },
        { name: "Strawberry", description: "Fresh strawberry brigadeiro with pink sprinkles" },
        { name: "Coconut", description: "Tropical coconut brigadeiro rolled in coconut flakes" },
        { name: "Nutella", description: "Rich Nutella brigadeiro with hazelnut pieces" },
        { name: "Passion Fruit", description: "Tangy passion fruit brigadeiro with white chocolate" },
        { name: "Gold Leaf", description: "Premium chocolate brigadeiro topped with edible gold leaf" },
    ];

    return (
        <>
            <Header />
            <main className="brigadeiros-page">
                <section className="brigadeiros-hero">
                    <div className="container">
                        <h1 className="fade-in-up">Brigadeiros</h1>
                        <p className="hero-subtitle fade-in-up">Handmade Brazilian chocolate truffles</p>
                    </div>
                </section>

                <section className="flavors-section section">
                    <div className="container">
                        <h2 className="text-center">Our Flavors</h2>
                        <div className="flavors-grid">
                            {flavors.map((flavor, index) => (
                                <div key={index} className="flavor-card fade-in">
                                    <h3>{flavor.name}</h3>
                                    <p>{flavor.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="cta-section">
                            <p className="cta-text">Ready to order? Contact us on WhatsApp!</p>
                            <a
                                href="https://wa.me/14076164661"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Order Now
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
