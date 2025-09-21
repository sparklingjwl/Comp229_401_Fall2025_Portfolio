// Projects component displays a list of portfolio projects
import { FaGithub } from 'react-icons/fa';
export default function Projects() {
    return (
        <>
            {/* Hero section for Projects page */}
            <section className="hero">
                <div className="hero-content">
                    {/* Section title with underline */}
                    <h2 className="section-title">My Projects</h2>
                    {/* Project cards grid */}
                    <div className="project-grid">
                        {/* Project 1 */}
                        <div className="project-card">
                            {/* Web Hosting image */}
                            <div className="project-image" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <img 
                                    src="/src/assets/WebHosting3.png" 
                                    alt="Web Hosting Canada Website Design screenshot" 
                                    style={{ width: '100%', maxWidth: '320px', height: '180px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #ccc' }}
                                />
                                </div>
                            <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                                <a href="https://github.com/sparklingjwl/web-hosting-interface-design-2024" target="_blank" rel="noopener noreferrer" style={{ color: '#4fc3f7', textDecoration: 'underline', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                    <FaGithub style={{ verticalAlign: 'middle' }} /> View on GitHub
                                </a>
                            </div>
                            <h3 style={{ color: '#357ae8', fontWeight: 800, textShadow: '0 2px 8px rgba(53,122,232,0.10)' }}>Web Hosting Canada Website Design</h3>
                            <p className="blue-paragraph">
                                This was an individual project focused on designing a fully responsive, front-end redesign of the <br />
                                Web Hosting Canada website. Developed using HTML and CSS, this project features a modern<br />
                                multi-page layout with a dynamic homepage, a pricing plans section, and functional user <br />
                                authentication forms (login & registration). Focused on clean design, intuitive navigation, <br />
                                and a compelling user experience. Concepts included are responsive design, UI/UX, form <br />
                                validation, and semantic HTML.
                            </p>
                        </div>
                        {/* Project 2 */}
                        <div className="project-card">
                            {/* ERD image */}
                            <div className="project-image" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <img 
                                    src="/src/assets/BookECommERD.png" 
                                    alt="ERD diagram for Bookstore E-Commerce Solution" 
                                    style={{ width: '100%', maxWidth: '320px', height: '180px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #ccc' }}
                                />             
                            </div>
                            <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                                <a href="https://github.com/sparklingjwl/Bookstore-E-Commerce-Solution-Database-Group-Project" target="_blank" rel="noopener noreferrer" style={{ color: '#4fc3f7', textDecoration: 'underline', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                    <FaGithub style={{ verticalAlign: 'middle' }} /> View on GitHub
                                </a>
                            </div>
                            <h3 style={{ color: '#357ae8', fontWeight: 800, textShadow: '0 2px 8px rgba(53,122,232,0.10)' }}>Bookstore E-Commerce Solution</h3>
                            <p className="blue-paragraph">
                                This project involved the collaborative design and development of a fully-functional,<br />
                                relational database to power a bookstore's e-commerce platform. Following the Systems <br />
                                Development Life Cycle (SDLC), our team transformed business requirements into a <br />
                                robust SQL database schema. The system efficiently manages products, categories, <br />
                                customers, shopping carts, and order fulfillment with complex relationships and<br />
                                constraints. I contributed through all phases of the project. The project was built<br />
                                using Oracle SQL Developer, Visual Studio Code, ERD Modeling.
                            </p>
                        </div>
                        {/* Project 3 */}
                        <div className="project-card">
                            {/* Photo gallery image */}
                            <div className="project-image" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <img 
                                    src="/src/assets/Slideshow.png" 
                                    alt="Interactive Slideshow Web Application screenshot" 
                                    style={{ width: '100%', maxWidth: '320px', height: '180px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #ccc' }}
                                />                               
                            </div>
                            <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                                <a href="https://github.com/sparklingjwl/InteractiveSlideshow_Web_Winter2025" target="_blank" rel="noopener noreferrer" style={{ color: '#4fc3f7', textDecoration: 'underline', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                    <FaGithub style={{ verticalAlign: 'middle' }} /> View on GitHub
                                </a>
                            </div>
                            <h3 style={{ color: '#357ae8', fontWeight: 800, textShadow: '0 2px 8px rgba(53,122,232,0.10)' }}>Interactive Slideshow Web Application</h3>
                            <p className="blue-paragraph">
                                Designed and built an interactive slideshow/photo gallery from scratch using JavaScript,<br />
                                HTML, and CSS3. The application features a main gallery, a zoom modal, and a dynamic<br />
                                favorites system that allows users to add and remove images via intuitive DOM <br />
                                manipulation, all without page reloads. The concepts used were DOM API, event handling, <br />
                                event delegation, and UI/UX design.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
