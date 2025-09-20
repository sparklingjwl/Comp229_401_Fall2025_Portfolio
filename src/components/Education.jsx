// Education component displays academic background
export default function Education() {
    return (
        <>
            {/* Main container for the education section */}
            <div className="education-container">
                {/* Section title */}
                <h2>My Education</h2>

                {/* First education item: Centennial College */}
                <div className="education-item">
                    <h3>Centennial College</h3>
                    {/* Degree or program */}
                    <p>Advanced Diploma in Software Engineering Technology</p>
                    {/* Years attended */}
                    <p>2024 - Current</p>
                    {/* Relevant courses taken */}
                    <p>Relevant Coursework: Full Stack Web Development, Advanced Database Management, Software Engineering, Unix/Linux</p>
                    {/* Skills acquired during the program */}
                    <p>Skills Acquired: C#, Java, JavaScript, React, Node.js, HTTP, CSS, SQL, NoSQL, Git, Agile Methodologies</p>    
                    {/* GPA label (styled in CSS) */}
                    <p>GPA: 4.4/4.5</p>
                </div>  

                {/* Second education item: Sault College */}
                <div className="education-item">
                    <h3>Sault College of Applied Arts and Technology</h3>
                    {/* Degree or program */}
                    <p>Diploma in Practical Nursing</p>
                    {/* Years attended */}
                    <p>2005 - 2007</p>
                    {/* Relevant courses taken */}
                    <p>Relevant Coursework: Anatomy and Physiology, Pharmacology, Medical-Surgical Nursing, Mental Health Nursing</p>
                    {/* Skills acquired during the program */}
                    <p>Skills Acquired: Patient Care, Clinical Skills, Communication, Collaborative Teamwork</p>    
                    {/* GPA label (styled in CSS) */}
                    <p>GPA: 4.0/4.0</p>
                </div>
            </div>
        </>
    );
}