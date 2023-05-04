import React from "react";
import "./menuAdquirido.css";
import { Link } from "react-router-dom";

const PastaStorage = ({ tipoAdquirido }) => {
  let imagem;
  if (tipoAdquirido === "item") {
    imagem = "https://i.imgur.com/GQnUQrT.png";
  } else {
    imagem = "https://i.imgur.com/EbQIEPz.png";
  }
  return (
    <div>
      <Link>
        <img style={{ width: 70, height: 55 }} src={imagem}></img>
      </Link>
    </div>
  );
};

const ConjuntoPastas = ({ listaItems }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin: 10,
      }}
    >
      {listaItems.map((item, i) => (
        <div key={i}>
          <PastaStorage tipoAdquirido={item.tipo} />
        </div>
      ))}
    </div>
  );
};

const MenuAdquirido = () => {
  const listaItens = [
    { tipo: "item", nome: "Item 1" },
    { tipo: "item", nome: "Item 2" },
    { tipo: "item", nome: "Item 3" },
    { tipo: "personagem", nome: "Personagem 1" },
    { tipo: "item", nome: "Item 4" },
    { tipo: "personagem", nome: "Personagem 2" },
    { tipo: "item", nome: "Item 5" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "100vh",
      }}
    >
      <div className="footerJanelaWindows" style={{ height: 40 }}>
        <p className="textoCorpo" style={{ fontSize: 13, marginLeft: 10 }}>
          Storage
        </p>
        <Link
          to="/menu"
          className="botaoGeralWindows"
          style={{ height: 25, width: 25 }}
        >
          x
        </Link>
      </div>
      <div id="mostraEndereco">
        <div className="janelaWindows" id="barraEndereco">
          <p className="textoCorpo">all//</p>
        </div>
      </div>
      <div id="corpoStorage">
        <ConjuntoPastas listaItems={listaItens}></ConjuntoPastas>
      </div>
    </div>
  );
};

export default MenuAdquirido;
