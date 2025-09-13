
export default function Contact() {
    return (
        <>
            <div className="contact-container">
                <h2>Contact Me</h2>

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
                    <p>Email: kburden4@my.centennialcollege.ca</p>
                    <p>Phone: 123-456-7890</p>
                    <p>LinkedIn: linkedin.com/in/kburden</p>
                    <p>GitHub: github.com/kburden</p>                 
                </div>
            </div>
        </>
    );
}