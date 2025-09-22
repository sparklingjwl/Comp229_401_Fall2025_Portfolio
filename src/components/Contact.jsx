// Import GitHub and LinkedIn icons from react-icons
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
// Import useNavigate for navigation to other pages
import { useNavigate } from 'react-router-dom';

// Contact component displays a contact form and contact information
export default function Contact() {
    // useNavigate hook allows navigation to other pages
    const navigate = useNavigate();

    // Handles form submission: prevents default, then navigates to home page
    function handleSubmit(e) {
        e.preventDefault(); // Prevents page reload on submit
        navigate("/"); // Redirects to home page after form submission
    }

    return (
        <>
            {/* Main section for the Contact page */}
            <section className="hero">
                <div className="hero-content">
                    {/* Page title */}
                    <h2 className="section-title">Contact Details</h2>
                    {/* Container for form and contact info */}
                    <div className="contact-container">
                        {/* Contact form for user input */}
                        <form onSubmit={handleSubmit}>
                            {/* First Name input */}
                            <label>
                                First Name:
                                <input type="text" name="firstName" />
                            </label>
                            {/* Last Name input */}
                            <label>
                                Last Name:
                                <input type="text" name="lastName" />
                            </label>
                            {/* Contact Number input */}
                            <label>
                                Contact Number:
                                <input type="tel" name="contactNumber" />
                            </label>
                            {/* Email input */}
                            <label>
                                Email:
                                <input type="email" name="email" />
                            </label>
                            {/* Message textarea */}
                            <label>
                                Message:
                                <textarea name="message"></textarea>
                            </label>
                            {/* Form buttons: Send and Reset */}
                            <div className="form-buttons">
                                <button type="submit">Send</button>
                                <button type="reset">Reset</button>
                            </div>
                        </form>
                        {/* Contact info section with email and social links */}
                        <div className= "contact-info">
                            {/* Email link */}
                            <p className="contact-info-email">
                                <span className="contact-label">Email:</span> <a href="mailto:kburden4@my.centennialcollege.ca">kburden4@my.centennialcollege.ca</a>
                            </p>
                            {/* LinkedIn link with icon */}
                            <p>
                                <FaLinkedin className="linkedin-icon" />{" "}
                                <a href="https://www.linkedin.com/in/kelly-burden-a66701343/" target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/kelly-burden-a66701343/</a>
                            </p>
                            {/* GitHub link with icon */}
                            <p>
                                <FaGithub className="github-icon" />{" "}
                                <a href="https://github.com/sparklingjwl" target="_blank" rel="noopener noreferrer">
                                github.com/sparklingjwl</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}