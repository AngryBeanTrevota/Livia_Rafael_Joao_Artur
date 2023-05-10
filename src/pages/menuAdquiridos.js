import React from "react";
import "./menuAdquirido.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { storageAtom } from "../atoms/storageAtom";
import { Link } from "react-router-dom";
import { useState } from "react";

const DisplayInformacao = ({ displayObj, funcaoMudaDisplay }) => {
  let item = displayObj;
  return (
    <div
      style={{
        display: displayObj,
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <button
          className="botaoGeralWindows"
          onClick={() => funcaoMudaDisplay({})}
        >
          retornar
        </button>
      </div>
    </div>
  );
};

const InformacaoItem = () => {
  return <div></div>;
};

const InformacaoPersonagem = () => {
  return <div></div>;
};

const PastaStorage = ({ item, funcaoMudaDisplay }) => {
  let imagem, tipoAdquirido;
  tipoAdquirido = item.tipo;
  if (tipoAdquirido === "item") {
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
        <img style={{ width: 70, height: 55 }} src={imagem}></img>
        <p className="textoCorpo">{item.nome}</p>
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
  const [storage, setStorage] = useRecoilState(storageAtom);
  const listaItens = storage;

  const mudaDisplay = (item) => {
    if (pastasVisiveis === "flex") {
      setPastasVisiveis("none");
      setInfoVisivel("flex");
      setEnderecoDecorativo(item.nome);
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
        />
        <ConjuntoPastas
          listaItems={listaItens}
          displayObj={pastasVisiveis}
          funcaoMudaDisplay={mudaDisplay}
        ></ConjuntoPastas>
      </div>
    </div>
  );
};

export default MenuAdquirido;
