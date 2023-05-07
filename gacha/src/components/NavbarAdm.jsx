import { Link } from "react-router-dom";

function NavbarAdm() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-nav bg-slate-900 p-4 flex flex-row items-center justify-center gap-5 text-lg text-slate-50 font-semibold uppercase">
        <Link className="nav-item nav-link " to="/admin">
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
            }}
        >
            Logout
        </Link>
      </div>
        
    </nav>
  );
}

export default NavbarAdm;
