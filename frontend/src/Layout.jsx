import { Link } from "react-router-dom";
import logo from "./assets/Coffee1.jpg";

export default function Layout({ children }) {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <>
        <nav>
            <img src={logo} alt="Logo" className="nav-logo" />
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/education">Education</Link></li>
              <li><Link to="/contact">Contact</Link></li>
             </ul> 

             <div className="user-nav-area">
              {user ? (
                <div className="user-info">
                  <span>Welcome, {user.name} ({user.role})</span>
                  <button className="logout-btn" onClick={() => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    window.location.reload();
                  }}>Logout</button>
                </div>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </div>
          </nav>
        <main>
          {children}
        </main>
    </>
  );
}