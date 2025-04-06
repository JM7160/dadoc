import { Link } from "react-router-dom";
import "./Nav.css";
import { AiFillHome } from "react-icons/ai";


export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-home">
      <AiFillHome size={24} color="#333" />
      </Link>
    </nav>
  );
}
