// Education component displays academic background
export default function Education() {
    // Retrieve user information from local storage
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <>
            {/* Hero section for Education page */}
            <section className="hero">
                <div className="hero-content">
                    <div className="project-card">
                        {/* Section title with underline */}
                        <h2 className="section-title">My Education</h2>

                        {/* Conditional rendering of admin controls based on user role */}
                        {user && user.role === 'admin' && (
                        <div className="admin-controls">
                            <button>Add New Education</button>
                            <button>Edit Education</button>
                            <button>Delete Education</button>
                        </div>
                        )}
                        {/* Education cards grid */}
                        <div className="project-grid">
                        {/* Education 1 */}
                        <div className="project-card">
                            <h3 className="college-name">Centennial College</h3>
                                <div className="edu-row">
                                    <p className="edu-diploma-date">Advanced Diploma in Software Engineering Technology</p>
                                    <span className="edu-diploma-date">2024 - Present</span>
                                </div>
                            <p className="edu-detail">Relevant Coursework: Full Stack Web Development, Object-Oriented Programming, Advanced Database Management, Software Engineering, Unix/Linux</p>
                            <p className="edu-detail">Skills Acquired: C#, Java, JavaScript, React, Node.js, HTTP, CSS3, Linux/Unix, Oracle SQL, MongoDB NoSQL, Git, Agile Methodologies</p>
                            <p className="gpa-highlight">GPA: 4.4/4.5</p>
                        </div>
                        {/* Divider between education cards */}
                        <div className="edu-divider"></div>
                        {/* Education 2 */}
                        <div className="project-card">
                            <h3 className="college-name">Sault College of Applied Arts and Technology</h3>
                                <div className="edu-row">
                                    <p className="edu-diploma-date">Diploma in Practical Nursing</p>
                                    <span className="edu-diploma-date">2005 - 2007</span>
                                </div>
                            <p className="edu-detail">Relevant Coursework: Anatomy and Physiology, Pathophysiology, Pharmacology, Medical-Surgical Nursing, Mental Health Nursing, Obstetrics, Pediatrics, Geriatrics, Palliative Care</p>
                            <p className="edu-detail">Skills Acquired: Patient Care & Safety, Clinical Skills, Communication Skills, Critical Thinking, Observation Skills, Problem Solving, Collaborative Teamwork</p>
                            <p className="gpa-highlight">GPA: 4.0/4.0</p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}