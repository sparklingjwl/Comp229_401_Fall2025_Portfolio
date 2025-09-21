// Services component displays the services you offer or skills you provide
const Services = () => {
    return (
        <>
            {/* Hero section for Services page */}
            <section className="hero">
                <div className="hero-content">
                    {/* Section title with underline */}
                    <h2 className="section-title">My Services</h2>
                    {/* Service cards grid */}
                    <div className="service-grid">
                        {/* Service 1 */}
                        <div className="service-item">
                            {/* Service image */}
                            <div className="service-image" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <img 
                                    src="/src/assets/UX.jpg" 
                                    alt="Letters UX" 
                                    style={{ width: '100%', maxWidth: '120px', height: '80px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #ccc' }}
                                />                                
                            </div>
                            <h3 style={{ color: '#357ae8', fontWeight: 800, textShadow: '0 2px 8px rgba(53,122,232,0.10)' }}>Full-Stack Development Support</h3>
                            <p className="blue-paragraph">
                                Assisting in building dynamic web applications using modern web frameworks.<br />
                                Technologies used: React, JavaScript, HTML, CSS3, & Node.js.<br />
                                Experienced with database technologies: MongoDB, SQL.
                            </p>
                        </div>
                        {/* Service 2 */}
                        <div className="service-item">
                            {/* Service image */}
                            <div className="service-image" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <img 
                                    src="/src/assets/ColourKeyboard.jpg" 
                                    alt="Multi-coloured keyboard" 
                                    style={{ width: '100%', maxWidth: '120px', height: '80px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #ccc' }}
                                />                                
                            </div>
                            <h3 style={{ color: '#357ae8', fontWeight: 800, textShadow: '0 2px 8px rgba(53,122,232,0.10)' }}>Software Development & Programming</h3>
                            <p className="blue-paragraph">
                                Writing clean, maintainable code in C# and Java.<br />
                                Contributing to robust software solutions.<br />
                                Meeting project requirements through best practices.
                            </p>
                        </div>
                        {/* Service 3 */}
                        <div className="service-item">
                            {/* Service image */}
                            <div className="service-image" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <img 
                                    src="/src/assets/Agility.png" 
                                    alt="Agility on paper" 
                                    style={{ width: '100%', maxWidth: '120px', height: '80px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #ccc' }}
                                />                                
                            </div>
                            <h3 style={{ color: '#357ae8', fontWeight: 800, textShadow: '0 2px 8px rgba(53,122,232,0.10)' }}>Software Lifecycle Collaboration</h3>
                            <p className="blue-paragraph">
                                Contributing to Agile teams through requirements analysis.<br />
                                Creating precise documentation for development.<br />
                                Project tracking with tools like Git and Jira.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Services;