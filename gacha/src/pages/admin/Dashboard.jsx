import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import axios from "axios";
import { defaultBannerData } from "../../data/banners/defaultBannerData";
import { AuthContext } from "../../context/Auth/AuthContext";


function Dashboard() {
  const auth = useContext(AuthContext);
  const atualizarItens = async () => {
    try {
      const response = await axios.delete("http://localhost:3333/item");
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    const itens = [];
    for (const banner of defaultBannerData) {
      let item = {};
      let is_character = false;
      if (banner.tipo === "personagem") {
        is_character = true;
      }
  
      banner.imagemChibi = banner.imagemChibi ? banner.imagemChibi : (banner.imagemChibi = "");
      banner.frases = banner.frases ? banner.frases : (banner.frases = [""]);
  
      item = {
        name: banner.nome,
        image: banner.imagem,
        image_chibi: banner.imagemChibi,
        quotes: banner.frases,
        is_character: is_character,
        description: banner.descricao,
        bonus: banner.bonus,
        colors: banner.cores,
        rarity: banner.raridade,
      };
      console.log(item);
      itens.push(item);
    }
  
    try {
      const response = await axios.post("http://localhost:3333/itens", itens);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
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
            <div
              className="card"
              onClick={() => {
                atualizarItens();
              }}>
              <div className="card-body">
                <h5 className="card-title">Atualizar itens</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Link
              className="card-link"
              onClick={() => {
                auth.logout(false);
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
