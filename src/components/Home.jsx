// Home component displays the main landing section of the portfolio
export default function Home() {
    return (
        <>
            {/* Hero section for main introduction */}
            <section className="hero">
                <div className="hero-content">
                    {/* Section title with underline */}
                    <h2 className="section-title">Home</h2>
                    {/* Name and tagline */}
                    <h1>Kelly Burden</h1>
                    <h2>Patient Care to Precise Code</h2>
                    <h3>Software Engineer | Analytical Precision | Problem Solver</h3>
                    {/* Brief summary paragraph */}
                    <p>Junior Software Engineer leveraging a background in high-pressure healthcare to build precise,
                        reliable, and user-focused software solutions. A collaborative team player with strong foundations
                        in object-oriented programming (C#, Java) and full-stack web development (HTML, CSS, JavaScript, 
                        React, Node.js). Seeking a remote co-op opportunity to contribute analytical and problem-solving 
                        skills to build meaningful projects.</p>
                </div>
            </section>
        </>
    );
}
