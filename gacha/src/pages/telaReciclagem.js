import Window from "../components/Window";
import "./telaReciclagem.css";

import React, { useState } from "react";
import recycle from "../icones/recycle.png";

const TelaReciclagem = () => {
    const [popUpVisivel, setPopUpVisivel] = useState(false);

    const abrePopUp = () => {
        setPopUpVisivel(true);
    };

    const fechaPopUp = () => {
        setPopUpVisivel(false);
    };

    const [valorReciclagem, setValorReciclagem] = useState(0);

    const itens = [
        { nome: "Item 1", valorReciclagem: 5 },
        { nome: "Item 2", valorReciclagem: 10 },
        { nome: "Item 3", valorReciclagem: 8 },
        { nome: "Item 4", valorReciclagem: 3 },
        { nome: "Item 5", valorReciclagem: 7 },
        { nome: "Item 6", valorReciclagem: 12 },
        { nome: "Item 7", valorReciclagem: 23 },
        { nome: "Item 8", valorReciclagem: 45 },
    ];

    const atualizarValorReciclagem = (valor) => {
        setValorReciclagem(valor);
    };

    return (
        <Window titulo={"Tela de Reciclagem"}
            styleWindow={{
                height: "100vh",
                width: "100vw",
                display: "",
                // display: "flex",
                // flexDirection: "column",
                // gap: 60,
            }}
        >
            <div className="Recycle-window-cont" id="corpoRecycle">
                <div className="reciclar-painel">
                    <Window titulo={"RECICLAR"}
                        styleContainer={{
                            width: 500,
                            height: 400,
                            position: "absolute",
                            top: "20%",
                            left: "28%",
                        }}
                    >
                        <div className="recycle-cont">
                            <div className="recycle">
                            {itens.map((item, index) => (
                            <div
                                className="itens-folder"
                                onMouseEnter={() => atualizarValorReciclagem(item.valorReciclagem)}
                                key={index}
                            >
                                <img
                                    style={{ width: 70, height: 55 }}
                                    className="imagemPasta"
                                    src="https://i.imgur.com/r3a0P0E.png"
                                />
                                <p className="item-name">{item.nome}</p>
                                <p>3x</p>
                            </div>
                            ))}
                             </div>
                        </div>
                    </Window>
                </div>

                <div className="trocar-painel">
                    <Window titulo={"TROCAR"}
                        styleContainer={{
                            width: 350,
                            height: 400,
                            position: "absolute",
                            top: "45%",
                            left: "50%",
                        }}
                    >
                        <div className="troca-cont">
                            <p className="obter-text">OBTER:</p>
                            <p className="tiros-text">{valorReciclagem} Tiros</p>
                        </div>
                        <div className="button-troca-cont">
                            <button className="button-troca"
                                onClick={abrePopUp}
                            >
                                <img src={recycle} alt="recycle"
                                    style={{
                                        maxWidth: 25,
                                    }}
                                />
                            </button>
                        </div>
                    </Window>
                </div>

                <div className="troca-feita-painel">
                    <Window titulo={"TROCA CONCLUÍDA"}
                        styleContainer={{
                            width: 250,
                            height: 400,
                            position: "absolute",
                            top: "25%",
                            left: "40%",
                            visibility: popUpVisivel ? "visible" : "hidden",
                        }}
                    >
                        <div className="recycle-feita">
                            <p className="feita-text">TROCA CONCLUÍDA!</p>
                        </div>
                        <div className="button-troca-cont">
                            <button className="button-troca"
                                onClick={fechaPopUp}
                            >
                                <p>OK</p>
                            </button>
                        </div>
                    </Window>
                </div>
            </div>
        </Window>
    )
}

export default TelaReciclagem;