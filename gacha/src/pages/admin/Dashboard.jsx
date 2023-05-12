import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <div className="containerDashboard">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <Link to="/admin/students" className="card-link">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Estudantes</h5>
                  <p className="card-text">Gerenciar estudantes</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Link to="/admin/teachers" className="card-link">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Professores</h5>
                  <p className="card-text">Gerenciar professores</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Link to="/admin/classes" className="card-link">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Salas</h5>
                  <p className="card-text">Gerenciar Salas</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Link
              to="/"
              className="card-link"
              onClick={() => {
                localStorage.removeItem("token");
              }}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Logout</h5>
                  <p className="card-text">Sair</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
