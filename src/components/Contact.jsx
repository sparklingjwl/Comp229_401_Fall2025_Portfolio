import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Contact component displays a contact form and contact information
export default function Contact() {
    const navigate = useNavigate();

    // Handles form submission and redirects to home page
    function handleSubmit(e) {
        e.preventDefault();
        // Optionally capture form data here
        // const formData = new FormData(e.target);
        // console.log(Object.fromEntries(formData.entries()));
        navigate("/");
    }

    return (
        <>
            {/* Hero section for Contact page */}
            <section className="hero">
                <div className="hero-content">
                    {/* Section title with underline */}
                    <h2 className="section-title">Contact Details</h2>
                    {/* Contact form container */}
                    <div className="contact-container">
                        {/* Contact form */}
                        <form onSubmit={handleSubmit}>
                            <label>
                                First Name:
                                <input type="text" name="firstName" />
                            </label>
                            <label>
                                Last Name:
                                <input type="text" name="lastName" />
                            </label>
                            <label>
                                Contact Number:
                                <input type="tel" name="contactNumber" />
                            </label>
                            <label>
                                Email:
                                <input type="email" name="email" />
                            </label>
                            <label>
                                Message:
                                <textarea name="message"></textarea>
                            </label>
                            <div className="form-buttons">
                                <button type="submit">Send</button>
                                <button type="reset">Reset</button>
                            </div>
                        </form>
                        {/* Contact info links */}
                        <div className= "contact-info">
                            <p>
                                Email: <a href="mailto:kburden4@my.centennialcollege.ca">kburden4@my.centennialcollege.ca</a>
                            </p>
                            <p>
                                <FaLinkedin className="linkedin-icon" />{" "}
                                <a href="https://www.linkedin.com/in/kelly-burden-a66701343/" target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/kelly-burden-a66701343/</a>
                            </p>
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