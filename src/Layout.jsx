import {Link} from "react-router-dom";

export default function Layout() {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>   |
                    <Link to="/about">About</Link>  |
                    <Link to="/contact">Contact</Link>  |
                    <Link to="/education">Education</Link>  |
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </nav>
    </>
  );
}