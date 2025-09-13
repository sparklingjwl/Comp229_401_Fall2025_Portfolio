import { Link } from 'react-router-dom'; 

export default function Layout() {
  return (
    <>
        <div>
            <header>My Portfolio</header>
                <nav>
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/education">Education</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </nav>    
                <main>
                    {/* Main content will be rendered here */}
                </main>
            <footer>© 2025 My Portfolio</footer>
        </div>
    </>
  );
}
