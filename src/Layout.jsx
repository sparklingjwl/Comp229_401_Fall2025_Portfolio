
import { Link } from "react-router-dom";
import logo from "./assets/Coffee1.jpg";

export default function Layout({ children }) {
  return (
    <>
        <nav>
            <img src={logo} alt="Logo" style={{ height: '60px', marginRight: '16px', verticalAlign: 'middle' }} />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>                    
                    <Link to="/education">Education</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <main>
          {children}
        </main>
    </>
  );
}