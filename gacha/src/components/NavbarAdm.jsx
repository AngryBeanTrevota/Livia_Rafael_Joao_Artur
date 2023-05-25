import { Link } from "react-router-dom";
import "./NavbarAdm.css";

function NavbarAdm() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-nav">
        <Link className="nav-item nav-link" to="/admin">
          Home
        </Link>
        <Link className="nav-item nav-link" to="/admin/students">
          Estudantes
        </Link>
        <Link className="nav-item nav-link" to="/admin/teachers">
          Professores
        </Link>
        <Link className="nav-item nav-link" to="/admin/classes">
          Salas
        </Link>
        <Link
          className="nav-item nav-link self-end"
          to="/"
          onClick={() => {
            localStorage.removeItem("token");
          }}>
          Logout
        </Link>
      </div>
    </nav>
  );
}

export default NavbarAdm;
