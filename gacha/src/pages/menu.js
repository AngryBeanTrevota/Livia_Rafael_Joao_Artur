import React, { useContext, useState } from "react";
import "./menu.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/Auth/AuthContext";
import axios from "axios";

const Menu = () => {

  const auth = useContext(AuthContext);
  const [itemEquipped, setItemEquipped] = useState("https://uploads-ssl.webflow.com/626a4a48b11ca84b33d9865c/628a6e45751aa342592bcf29_Honeycam%202022-05-22%2011-01-43.gif");
  const [characterEquipped, setCharacterEquipped] = useState("");

  useState(() => {
    async function fetchEquipment() {
      const response = await axios.get(`http://localhost:3333/student/${auth.user.id}/equipment`);
      if(response.data.characterEquipped)
        setCharacterEquipped(response.data.characterEquipped.image);
      if(response.data.itemEquipped)
        setItemEquipped(response.data.itemEquipped.image);
    }
    fetchEquipment();
  });

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
          alt=""
          id="imagemItem"
          style={{ width: "60%", height: "60%" }}
          src={itemEquipped}
        ></img>
      </div>
      <div id="todo">
        <div id="topo">
          <div id="moedas">
            <p>¢{auth.user.xp}</p>
          </div>
          <button id="botaoFechar" className="windowsButton"
            onClick={() => {
              auth.signout();
            }
            }
          >
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
                    alt=""
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
                <Link to="/reciclagem">
                  <img
                    style={{ width: 70, height: 55 }}
                    className="imagemPasta"
                    src="https://i.imgur.com/r3a0P0E.png"
                    alt=""
                  ></img>
                </Link>
              </button>
              <p>Recycle</p>

              <button
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                }}
              >
                <Link to="/sala">
                  <img
                    alt=""
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
            <div id="imagemPersonagem">
              <img
                alt=""
                id="imagemPersonagem"
                style={{
                  width: "100%",
                  height: "100%",
                  
                }}

                src={characterEquipped}
              ></img>
            </div>
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
