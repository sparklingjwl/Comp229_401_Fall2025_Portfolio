// Services component displays the services you offer or skills you provide
import UX from '../assets/UX.jpg';
import ColourKeyboard from '../assets/ColourKeyboard.jpg';
import Agility from '../assets/Agility.png';
const Services = () => {
    // Retrieve user information from local storage
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <>
            {/* Hero section for Services page */}
            <section className="hero">
                <div className="hero-content">
                    <div className="project-card">
                        {/* Section title with underline */}
                        <h2 className="section-title">My Services</h2>
                        {/* Conditional rendering of admin controls based on user role */}
                        {user && user.role === 'admin' && (
                        <div className="admin-controls">
                            <button>Add New Service</button>
                            <button>Edit Service</button>
                            <button>Delete Service</button>
                        </div>
                        )}  
                        {/* Service cards grid */}
                        <div className="project-grid">
                        {/* Service 1 */}
                        <div className="project-card">
                            {/* Service image */}
                            <div className="service-image" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <img 
                                    src={UX}
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
                        <div className="edu-divider"></div>
                        {/* Service 2 */}
                        <div className="project-card">
                            {/* Service image */}
                            <div className="service-image" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <img 
                                    src={ColourKeyboard}
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
                        <div className="edu-divider"></div>
                        {/* Service 3 */}
                        <div className="project-card">
                            {/* Service image */}
                            <div className="service-image" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <img 
                                    src={Agility}
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
                </div>
            </section>
        </>
    );
};
export default Services;