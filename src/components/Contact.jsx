import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
export default function Contact() {
    return (
        <>
            <div className="contact-container">
                <h2>Contact Details</h2>

                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Message:
                        <textarea name="message"></textarea>
                    </label>
                    <button type="submit">Send</button>
                </form>
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
        </>                
    );
}