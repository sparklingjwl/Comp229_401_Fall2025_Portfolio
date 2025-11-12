// Import GitHub and LinkedIn icons from react-icons
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

// Import useNavigate for navigation to other pages
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { contactService } from '../services/api';

// Contact component displays a contact form and contact information
export default function Contact() {
    // useNavigate hook allows navigation to other pages
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    // State variables for loading status and feedback message
    const [loading, setLoading] = useState(false);    
    const [message, setMessage] = useState('');

    // Retrieve user information from local storage
    const user = JSON.parse(localStorage.getItem('user'));

    // Handles changes to form input fields
    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        });
    };
    
    // Handles form submission: prevents default, then navigates to home page
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents page reload on submit
        console.log('Form submitted with data: ', formData);
        setLoading(true);
        setMessage('');

        try { // Call the contactService to create a new contact message
            console.log('Calling contactService.create');
            const result = await contactService.create(formData);
            console.log('API Success Response:', result);

            setMessage('Thank you for your message! I will get back to you soon.');
            setFormData({
                firstName: '',
                lastName: '',
                contactNumber: '',
                email: '',
                message: ''
            });
        
            setTimeout(() => {
                console.log('Navigating home');
                navigate("/")
             }, 5000);
        } catch (error) {
            console.error('Contact form error:', error);
            setMessage('Error sending message. Please try again later.');
        }   finally {
            setLoading(false);
            console.log('Finished loading');
        }   
    };

    return (
        <>
            {/* Main section for the Contact page */}
            <section className="hero">
                <div className="hero-content">
                    {/* Page title */}
                    <h2 className="section-title">Contact Details</h2>

                    {user && user.role === 'admin' && (
                    <div className="admin-controls">
                        <button>View All Messages</button>
                        <button>Delete All Messages</button>
                    </div>
                    )}

                    {message && ( 
                        <div className={`message ${message.includes('Error') ? 'error-message' : 'success-message'}`}>
                            {message}
                            </div>                          
                    )}

                    {/* Container for form and contact info */}
                    <div className="contact-container">
                        {/* Contact form for user input */}
                        <form onSubmit={handleSubmit}>

                            {/* First Name input */}
                            <label>
                                First Name:
                                <input 
                                type="text" 
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                />
                            </label>

                            {/* Last Name input */}
                            <label>
                                Last Name:
                                <input 
                                type="text" 
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                />
                            </label>

                            {/* Contact Number input */}
                            <label>
                                Contact Number:
                                <input 
                                type="tel" 
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                />
                            </label>                             

                            {/* Email input */}
                            <label>
                                Email:
                                <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                />
                            </label>

                            {/* Message textarea */}
                            <label>
                                Message:
                                <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                ></textarea>    
                            </label>

                            {/* Form buttons: Send and Reset */}
                            <div className="form-buttons">
                                <button type="submit" disabled={loading}>
                                    {loading ? 'Sending...' : 'Send'}
                                </button>
                                <button type="reset">Reset</button>
                            </div>
                        </form>

                        {/* Contact info section with email and social links */}
                        <div className= "contact-info">
                            {/* Email link */}
                            <p className="contact-info-email">
                                <span className="contact-label">Email:</span> 
                                <a href="mailto:kburden4@my.centennialcollege.ca">kburden4@my.centennialcollege.ca</a>
                            </p>
                            {/* LinkedIn link with icon */}
                            <p>
                                <FaLinkedin className="linkedin-icon" />
                                <a href="https://www.linkedin.com/in/kelly-burden-a66701343/" 
                                target="_blank" rel="noopener noreferrer">
                                linkedin.com/in/kelly-burden-a66701343/</a>
                            </p>
                            {/* GitHub link with icon */}
                            <p>
                                <FaGithub className="github-icon" />
                                <a href="https://github.com/sparklingjwl" 
                                target="_blank" rel="noopener noreferrer">
                                github.com/sparklingjwl</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}