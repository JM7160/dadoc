import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-home">
      🏠
      </Link>
    </nav>
  );
}
