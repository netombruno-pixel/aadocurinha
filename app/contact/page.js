import Header from '../components/Header';
import Footer from '../components/Footer';
import './contact.css';

export const metadata = {
    title: "Contact Us | A Docurinha",
    description: "Get in touch with A Docurinha for custom orders, inquiries, or just to say hello!",
};

export default function Contact() {
    return (
        <>
            <Header />
            <main className="contact-page">
                <section className="contact-hero">
                    <div className="container">
                        <h1 className="fade-in-up">Contact Us</h1>
                        <p className="hero-subtitle fade-in-up">We'd love to hear from you!</p>
                    </div>
                </section>

                <section className="contact-section section">
                    <div className="container">
                        <div className="contact-grid">
                            <div className="contact-info">
                                <h2>Get in Touch</h2>
                                <p>
                                    Ready to order or have questions about our brigadeiros and cakes?
                                    We're here to help make your celebration sweet and memorable.
                                </p>

                                <div className="contact-methods">
                                    <div className="contact-method">
                                        <div className="method-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3>WhatsApp</h3>
                                            <a href="https://wa.me/14076164661" target="_blank" rel="noopener noreferrer">
                                                (407) 616-4661
                                            </a>
                                        </div>
                                    </div>

                                    <div className="contact-method">
                                        <div className="method-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3>Instagram</h3>
                                            <a href="https://www.instagram.com/aadocurinha" target="_blank" rel="noopener noreferrer">
                                                @aadocurinha
                                            </a>
                                        </div>
                                    </div>

                                    <div className="contact-method">
                                        <div className="method-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3>Location</h3>
                                            <p>Windermere, FL</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="hours-info">
                                    <h3>Order Information</h3>
                                    <p>
                                        We accept custom orders with at least 72 hours advance notice.
                                        Same-day orders may be available for brigadeiros - please contact us to check availability.
                                    </p>
                                </div>
                            </div>

                            <div className="contact-cta-card">
                                <h2>Ready to Order?</h2>
                                <p>
                                    The easiest way to place an order is through WhatsApp.
                                    We'll help you choose the perfect treats for your occasion and
                                    answer any questions you have.
                                </p>
                                <a
                                    href="https://wa.me/14076164661"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-large"
                                >
                                    Message Us on WhatsApp
                                </a>
                                <p className="cta-note">
                                    Or follow us on Instagram to see our latest creations!
                                </p>
                                <a
                                    href="https://www.instagram.com/aadocurinha"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-accent"
                                >
                                    Follow on Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
