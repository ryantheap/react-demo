import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <div>REACT DEMO by Elie</div>
      </header>
      <nav className="navHead">
        <ul>
          <Link to="/">
            <li>Accueil</li>
          </Link>
          <Link to="/projects">
            <li>Mes projets</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
