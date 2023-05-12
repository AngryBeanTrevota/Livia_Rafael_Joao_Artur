import React from "react";
import "./menu.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { bitsMoedaAtom } from "../atoms/bitsMoedaAtom";
import { Link } from "react-router-dom";

const Menu = () => {
  const [bitsMoeda, setBitsMoeda] = useRecoilState(bitsMoedaAtom);

  return (
    <div>
      <div id="janelaFrente">
        <div id="footerJanelaFrente">
          <p className="textoCorpo">Dialogo</p>
          <button className="windowsButton">x</button>
        </div>
        <p className="textoCorpo">"Placeholder no momento..."</p>
      </div>
      <div id="janelaAtras">
        <div id="footerJanelaAtras">
          <p className="textoCorpo">Item</p>
          <button className="windowsButton">x</button>
        </div>
        <img
          id="imagemItem"
          src="https://uploads-ssl.webflow.com/626a4a48b11ca84b33d9865c/628a6e45751aa342592bcf29_Honeycam%202022-05-22%2011-01-43.gif"
        ></img>
      </div>
      <div id="todo">
        <div id="topo">
          <div id="moedas">
            <p>¢{bitsMoeda}</p>
          </div>
          <button id="botaoFechar" className="windowsButton">
            x
          </button>
        </div>
        <div id="corpo">
          <div id="corpoEsq">
            <div id="pastas">
              <button
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                }}
              >
                <Link to="/menuAdquiridos">
                  <img
                    style={{ width: 70, height: 55 }}
                    className="imagemPasta"
                    src="https://i.imgur.com/r3a0P0E.png"
                  ></img>
                </Link>
              </button>
              <p>Storage</p>
              <button
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                }}
              >
                <Link to="/quizzes">
                  <img
                    style={{ width: 70, height: 55 }}
                    className="imagemPasta"
                    src="https://i.imgur.com/r3a0P0E.png"
                  ></img>
                </Link>
              </button>
              <p>quizzes</p>
            </div>
          </div>
          <div id="corpoDir">
            <div id="imagemPersonagem"></div>
          </div>
        </div>
        <div id="footer">
          <button id="botaoBanner" className="windowsButton">
            <Link to="/banner">BANNER</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
