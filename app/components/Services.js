import './Services.css';

export default function Services() {
    return (
        <section className="services section">
            <div className="container">
                <div className="services-grid">
                    <div className="service-card fade-in">
                        <div className="service-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                        </div>
                        <h3 className="service-title">Curbside Pickup</h3>
                        <p className="service-desc">Convenient pickup available at our Windermere location</p>
                    </div>

                    <div className="service-card fade-in">
                        <div className="service-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="1" y="3" width="15" height="13"></rect>
                                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                                <circle cx="18.5" cy="18.5" r="2.5"></circle>
                            </svg>
                        </div>
                        <h3 className="service-title">Local Delivery</h3>
                        <p className="service-desc">Fast and reliable delivery to your door</p>
                    </div>

                    <div className="service-card fade-in">
                        <div className="service-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M20 12v8H4v-8"></path>
                                <path d="M22 7H2v5h20V7z"></path>
                                <path d="M12 22V7"></path>
                                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                            </svg>
                        </div>
                        <h3 className="service-title">Elegant Gift Packaging</h3>
                        <p className="service-desc">Beautiful presentation perfect for any occasion</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
