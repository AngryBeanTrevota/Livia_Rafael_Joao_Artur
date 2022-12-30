import React from "react";
import "./ItemSorteado.css";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { sorteadoAtom } from "../atoms/sorteadoAtom";

const Imagem = ({ sorteado }) => {
  return (
    <div>
      <img className="imagemSorteada" src={sorteado.imagem}></img>
    </div>
  );
};

const ItemSorteado = () => {
  const sorteado = useRecoilValue(sorteadoAtom);

  return (
    <div className="fundo">
      <div className="janelaNome">
        <div className="tituloJanelaNome">
          <p>New!</p>
          <button className="windowsButton">x</button>
        </div>
        <div className="corpoJanelaNome">
          <img
            style={{
              width: 25,
              height: 25,
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
        <button className="windowsButton">Menu</button>
      </div>
    </div>
  );
};

export default ItemSorteado;
