import React, { useContext } from "react";
import "./ItemSorteado.css";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { sorteadoAtom } from "../atoms/sorteadoAtom";
import axios from "axios";
import { AuthContext } from "../context/Auth/AuthContext";


const Imagem = ({ sorteado }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <img
        className="imagemSorteada"
        src={sorteado.imagem}
        style={{ display: "flex" }}
      ></img>
    </div>
  );
};

const Cores = ({ sorteado }) => {
  return (
    <div className="cores" style={{ display: "flex", flexDirection: "row" }}>
      {sorteado.cores.map((cor, indice) => (
        <div
          key={indice}
          className="corIndividual"
          style={{ backgroundColor: cor, width: "20px", height: "20px" }}
        ></div>
      ))}
    </div>
  );
};


const ItemSorteado = () => {
  const sorteado = useRecoilValue(sorteadoAtom);
  const auth = useContext(AuthContext);
  
  async function postItem(item_id) {

    try {
      await axios.put(`http://localhost:3333/student/${auth.user.id}`, {
        item_id: item_id,
      });
    } catch (error) {
      console.error("Error posting item:", error);
    }
  }

  return (
    <div className="fundo">
      <div className="janelaNome">
        <div className="tituloJanelaNome">
          <p>New!</p>
          <button className="windowsButton">
            <Link to="/banner">x</Link>
          </button>
        </div>
        <div className="corpoJanelaNome">
          <img
            style={{
              width: 20,
              height: 20,
              marginTop: 4,
              marginBottom: 4,
              marginRight: 4,
              marginLeft: 4,
            }}
            src="https://img.icons8.com/external-yogi-aprelliyanto-glyph-yogi-aprelliyanto/512/external-diskette-computer-hardware-yogi-aprelliyanto-glyph-yogi-aprelliyanto.png"
          ></img>
          <p>{sorteado.nome} adquirido!</p>
        </div>
      </div>
      <div className="janelaItem">
        <div className="fundoImagem">
          <Imagem sorteado={sorteado} />
        </div>
        <Cores sorteado={sorteado} />
        <button
          style={{
            width: 60,
            marginBottom: 20,
          }}
          className="windowsButton"
        >
          <Link to="/menu" onClick={() => postItem(parseInt(sorteado.id))} >Menu</Link>
        </button>
      </div>
    </div>
  );
};

export default ItemSorteado;