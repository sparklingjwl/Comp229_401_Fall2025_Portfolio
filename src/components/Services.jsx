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
                            <h3>Full-Stack Development Support</h3>
                            <p>Assisting in building dynamic web applications using modern JavaScript frameworks
                                (React, Node.js) and database technologies (MongoDB, SQL).</p>
                        </div>
                        {/* Service 2 */}
                        <div className="service-item">
                            <h3>Software Development & Programming</h3>
                            <p>Writing clean, maintainable code in C# and Java to contribute to robust software
                                solutions and meet project requirements.</p>
                        </div>
                        {/* Service 3 */}
                        <div className="service-item">
                            <h3>Software Lifecycle Collaboration</h3>
                            <p>Contributing to Agile teams through requirements analysis, precise documentation,
                                and project tracking with tools like Git and Jira.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default Services;