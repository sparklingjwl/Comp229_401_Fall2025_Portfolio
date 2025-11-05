// Home component displays the main landing section of the portfolio
export default function Home() {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <>
            {/* Hero section for main introduction */}
            <section className="hero">
                <div className="hero-content">
                    <div className="project-card">
                        {/* Section title with underline */}
                        <h2 className="section-title">Home</h2>
                        {user && user.role === 'admin' && (
                        <div className="admin-controls">
                            <button>Edit Home Section</button>
                            <button>Delete Home Section</button>
                        </div>
                        )}
                        {/* Name and tagline */}
                        <h1>Kelly Burden</h1>
                        <h2>Patient Care to Precise Code</h2>
                        <h3>Software Engineer | Analytical Precision | Problem Solver</h3>
                        {/* Brief summary paragraph */}
                        <p className="blue-paragraph home-detail">
                            Junior Software Engineer leveraging a background in high-pressure healthcare 
                            to build precise, reliable, and user-focused software solutions. A 
                            collaborative team player with strong foundations in object-oriented 
                            programming (C#, Java) and full-stack web development (HTML, CSS, JavaScript, 
                            React, Node.js). Seeking a co-op opportunity to contribute analytical and 
                            problem-solving skills to build meaningful projects.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
