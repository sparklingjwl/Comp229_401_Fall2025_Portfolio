// Projects component displays a list of portfolio projects
import { FaGithub } from 'react-icons/fa';
import WebHosting3 from '../assets/WebHosting3.png';
import BookECommERD from '../assets/BookECommERD.png';
import Slideshow from '../assets/Slideshow.png';
export default function Projects() {
    return (
        <>
            {/* Hero section for Projects page */}
            <section className="hero">
                <div className="hero-content projects-page">
                    <div className="project-card">
                        {/* Section title with underline */}
                        <h2 className="section-title">My Projects</h2>
                        {/* Project cards grid */}
                        <div className="project-grid">
                        {/* Project 1 */}
                        <div className="project-card">
                            {/* Web Hosting image */}
                            <div className="project-image" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <img 
                                    src={WebHosting3}
                                    alt="Web Hosting Canada Website Design screenshot" 
                                    style={{ width: '100%', maxWidth: '320px', height: '180px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #ccc' }}
                                />
                                </div>
                            <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                                <a href="https://github.com/sparklingjwl/web-hosting-interface-design-2024" target="_blank" rel="noopener noreferrer" className="github-link">
                                    <FaGithub className="github-icon" /> View on GitHub
                                </a>
                            </div>
                            <h3 className="project-title">Web Hosting Canada Website Design</h3>
                            <p className="blue-paragraph">
                                This was an individual project focused on designing a fully responsive, front-end redesign of the
                                Web Hosting Canada website. Developed using HTML and CSS, this project features a modern
                                multi-page layout with a dynamic homepage, a pricing plans section, and functional user
                                authentication forms (login & registration). Focused on clean design, intuitive navigation,
                                and a compelling user experience. Concepts included are responsive design, UI/UX, form
                                validation, and semantic HTML.
                            </p>
                        </div>
                        <div className="edu-divider"></div>
                        {/* Project 2 */}
                        <div className="project-card">
                            {/* ERD image */}
                            <div className="project-image" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <img 
                                    src={BookECommERD}
                                    alt="ERD diagram for Bookstore E-Commerce Solution" 
                                    style={{ width: '100%', maxWidth: '320px', height: '180px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #ccc' }}
                                />             
                            </div>
                            <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                                <a href="https://github.com/sparklingjwl/Bookstore-E-Commerce-Solution-Database-Group-Project" target="_blank" rel="noopener noreferrer" className="github-link">
                                    <FaGithub className="github-icon" /> View on GitHub
                                </a>
                            </div>
                            <h3 className="project-title">Bookstore E-Commerce Solution</h3>
                            <p className="blue-paragraph">
                                This project involved the collaborative design and development of a fully-functional,
                                relational database to power a bookstore's e-commerce platform. Following the Systems
                                Development Life Cycle (SDLC), our team transformed business requirements into a
                                robust SQL database schema. The system efficiently manages products, categories,
                                customers, shopping carts, and order fulfillment with complex relationships and
                                constraints. I contributed through all phases of the project. The project was built
                                using Oracle SQL Developer, Visual Studio Code, ERD Modeling.
                            </p>
                        </div>
                        <div className="edu-divider"></div>
                        {/* Project 3 */}
                        <div className="project-card">
                            {/* Photo gallery image */}
                            <div className="project-image" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                                <img 
                                    src={Slideshow}
                                    alt="Interactive Slideshow Web Application screenshot" 
                                    style={{ width: '100%', maxWidth: '320px', height: '180px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #ccc' }}
                                />
                            </div>
                            <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                                <a href="https://github.com/sparklingjwl/InteractiveSlideshow_Web_Winter2025" target="_blank" rel="noopener noreferrer" className="github-link">
                                    <FaGithub className="github-icon" /> View on GitHub
                                </a>
                            </div>
                            <h3 className="project-title">Interactive Slideshow Web Application</h3>
                            <p className="blue-paragraph">
                                Designed and built an interactive slideshow/photo gallery from scratch using JavaScript,
                                HTML, and CSS3. The application features a main gallery, a zoom modal, and a dynamic
                                favorites system that allows users to add and remove images via intuitive DOM
                                manipulation, all without page reloads. The concepts used were DOM API, event handling,
                                event delegation, and UI/UX design.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
