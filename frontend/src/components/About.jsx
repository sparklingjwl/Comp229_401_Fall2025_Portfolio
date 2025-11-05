// About component displays a personal introduction and background
import Kelly1 from '../assets/Kelly1.jpg';

export default function About() {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <>
            {/* Hero section for About page */}
            <section className="hero">
                <div className="hero-content">
                    {user && user.role === 'admin' && (
                        <div className="admin-controls">
                            <button>Change Profile Photo</button>   
                            <button>Edit About Section</button>
                            <button>Delete About Section</button>
                        </div>
                    )}
                    <div className="project-card">
                        {/* Portrait-style profile photo section */}
                        <div className="profile-photo" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <img 
                                src={Kelly1}
                                alt="Kelly Burden" 
                                style={{ width: '200px', height: '300px', objectFit: 'cover', borderRadius: '12px', border: '2px solid #ccc', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
                            />
                        </div>
                        {/* Section title with underline */}
                        <h2 className="section-title">About Me</h2>
                        {/* Personal introduction and background */}
                        <p className="blue-paragraph about-left">Hello and welcome! My name is <strong>Kelly Burden</strong>. I am a second-year <strong>Software Engineering Technology</strong> student in the advanced diploma program at Centennial College. Currently seeking a <strong>co-op position</strong> for Winter 2026.</p>
                        <p className="blue-paragraph about-left">My journey into tech is unique; I am transitioning from a successful career as a Mental Health Nurse, where I developed unparalleled skills in crisis management, meticulous attention to detail, and collaboration in high-stakes, multidisciplinary teams. I now apply that same precision and problem-solving mindset to writing code and building software.</p>
                        <p className="blue-paragraph about-left">I have a strong foundation in software engineering principles and object-oriented programming, with academic and project experience in <strong>C# and Java</strong>. My current passion lies in applying these skills to <strong>full-stack web development</strong>, and I have been building projects with modern technologies like <strong>JavaScript, React, Node.js, and MongoDB</strong>.</p>
                        <p className="blue-paragraph about-left">I am a diligent, adaptable, and quick learner, eager to contribute to a team where I can help build robust software solutions. While I have a keen interest in web technologies, I am excited by any opportunity to grow as a developer and tackle new challenges.</p>
                        <p className="blue-paragraph about-left">Feel free to explore my portfolio to learn more about my skills, projects, and experiences.</p>
                        {/* Resume download link */}
                        <p>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                View my resume (PDF)
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}