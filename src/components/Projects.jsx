// Projects component displays a list of portfolio projects
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
                            <h3>Project One</h3>
                            <p>A brief description of your first project goes here. Highlight the tech stack and your role.</p>
                            <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                        {/* Project 2 */}
                        <div className="project-card">
                            <h3>Project Two</h3>
                            <p>A brief description of your second project goes here. Highlight the tech stack and your role.</p>
                            <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                        {/* Project 3 */}
                        <div className="project-card">
                            <h3>Project Three</h3>
                            <p>A brief description of your third project goes here. Highlight the tech stack and your role.</p>
                            <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
