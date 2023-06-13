import React, { useContext, useEffect } from "react";
import "./menuAdquirido.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/Auth/AuthContext";

const Cores = ({ item }) => {
  if (!item || !item.cores || item.cores.length === 0) {
    return null;
  }

  return (
    <div className="cores" style={{ display: "flex", flexDirection: "row" }}>
      {item.colors.map((cor, indice) => (
        <div
          key={indice}
          className="corIndividual"
          style={{ backgroundColor: cor, width: "40px", height: "40px" }}
        ></div>
      ))}
    </div>
  );
};

const DisplayInformacao = ({ displayObj, funcaoMudaDisplay, item }) => {
  let corJanelas = "#f0f0f0";
  return (
    <div
      style={{
        display: displayObj,
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div
        className="janelaWindows"
        style={{
          marginTop: 10,
          marginBottom: 10,
          backgroundColor: { corJanelas },
        }}
      >
        <p
          className="textoCorpo"
          style={{ fontSize: 20, marginLeft: 10, marginRight: 10 }}
        >
          {item.name}
        </p>
      </div>
      <div
        className="janelaWindows"
        style={{
          backgroundImage:
            "url(https://opengameart.org/sites/default/files/Transparency500.png)",
        }}
      >
        <img src={item.image} alt="" style={{ height: 150, width: 150 }}/>
      </div>
      <div
        className="janelaWindows"
        style={{
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 10,
          marginTop: 10,
          backgroundColor: { corJanelas },
        }}
      >
        <p
          className="textoCorpo"
          style={{
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <Cores item={item} />
      <button
        className="botaoGeralWindows"
        onClick={() => funcaoMudaDisplay({})}
      >
        retornar
      </button>
    </div>
  );
};

const PastaStorage = ({ item, funcaoMudaDisplay }) => {
  let imagem;
  if (!item.is_character) {
    imagem = "https://i.imgur.com/GQnUQrT.png";
  } else {
    imagem = "https://i.imgur.com/EbQIEPz.png";
  }
  return (
    <div>
      <button
        style={{ backgroundColor: "transparent", borderColor: "transparent" }}
        onClick={funcaoMudaDisplay}
      >
        <img style={{ width: 70, height: 55 }} alt="" src={imagem}/>
        <p className="textoCorpo">{item.name}</p>
      </button>
    </div>
  );
};

const ConjuntoPastas = ({ listaItems, displayObj, funcaoMudaDisplay }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin: 10,
        display: displayObj,
      }}
    >
      {listaItems.map((item, i) => (
        <div key={i}>
          <PastaStorage
            item={item}
            funcaoMudaDisplay={() => funcaoMudaDisplay(item)}
          />
        </div>
      ))}
    </div>
  );
};



const MenuAdquirido = () => {
  const [pastasVisiveis, setPastasVisiveis] = useState("flex");
  const [infoVisivel, setInfoVisivel] = useState("none");
  const [enderecoDecorativo, setEnderecoDecorativo] = useState("");
  const [objetoDisplay, setObjetoDisplay] = useState("");
  const auth = useContext(AuthContext);
  
  const [listaItens, setListaItens] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios.get(`http://localhost:3333/student/${auth.user.id}/itens`);
        setListaItens(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    }
    fetchItems();
  }, [auth.user.id]);  

  const mudaDisplay = (item) => {
    if (pastasVisiveis === "flex") {
      setPastasVisiveis("none");
      setInfoVisivel("flex");
      setEnderecoDecorativo(item.name);
      setObjetoDisplay(item);
    } else {
      setPastasVisiveis("flex");
      setInfoVisivel("none");
      setEnderecoDecorativo("");
    }
  };

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
          <p className="textoCorpo">all//{enderecoDecorativo}</p>
        </div>
      </div>
      <div id="corpoStorage">
        <DisplayInformacao
          displayObj={infoVisivel}
          funcaoMudaDisplay={mudaDisplay}
          item={objetoDisplay}
        />
        {listaItens.length > 0 && (
          <ConjuntoPastas
            listaItems={listaItens}
            displayObj={pastasVisiveis}
            funcaoMudaDisplay={mudaDisplay}
          />
        )}
      </div>
    </div>
  );
};

export default MenuAdquirido;
