import Window from "../components/Window";
import "./telaReciclagem.css";

import React, { useState } from "react";

const TelaReciclagem = () => {
    const [popUpVisivel, setPopUpVisivel] = useState(false);
    
    const abrePopUp = () => {
        setPopUpVisivel(true);
    };
    
    const fechaPopUp = () => {
        setPopUpVisivel(false);
    };    

    return (
        <Window titulo={"Tela de Reciclagem"}
            styleWindow={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                gap: 60,
            }}
        >
            <div className="Recycle-window-cont" id="corpoRecycle">
                <Window titulo={"RECICLAR"} 
                    styleContainer={{
                        width: 500,
                        height: 400,
                    }}
                >
                    <div className="recycle-cont">
                        <div className="recycle">
                            <div className="itens-folder">
                                <img
                                    style={{ width: 70, height: 55 }}
                                    className="imagemPasta"
                                    src="https://i.imgur.com/r3a0P0E.png"
                                />
                                <p className="item-name">Personagem</p>
                                <p>3x</p>
                            </div>
                            <div className="itens-folder">
                                <img
                                    style={{ width: 70, height: 55 }}
                                    className="imagemPasta"
                                    src="https://i.imgur.com/r3a0P0E.png"
                                />
                                <p className="item-name">Personagem</p>
                                <p>2x</p>
                            </div>
                            <div className="itens-folder">
                                <img
                                    style={{ width: 70, height: 55 }}
                                    className="imagemPasta"
                                    src="https://i.imgur.com/r3a0P0E.png"
                                />
                                <p className="item-name">Personagem</p>
                                <p>4x</p>
                            </div>
                            <div className="itens-folder">
                                <img
                                    style={{ width: 70, height: 55 }}
                                    className="imagemPasta"
                                    src="https://i.imgur.com/r3a0P0E.png"
                                />
                                <p className="item-name">Personagem</p>
                                <p>3x</p>
                            </div>
                            <div className="itens-folder">
                                <img
                                    style={{ width: 70, height: 55 }}
                                    className="imagemPasta"
                                    src="https://i.imgur.com/r3a0P0E.png"
                                />
                                <p className="item-name">Personagem</p>
                                <p>2x</p>
                            </div>
                            <div className="itens-folder">
                                <img
                                    style={{ width: 70, height: 55 }}
                                    className="imagemPasta"
                                    src="https://i.imgur.com/r3a0P0E.png"
                                />
                                <p className="item-name">Personagem</p>
                                <p>1x</p>
                            </div>
                        </div>
                    </div>
                </Window>

                <Window titulo={"TROCAR"} 
                    styleContainer={{
                        width: 350,
                        height: 400,
                    }}
                >
                    <div className="troca-cont">
                        <p className="obter-text">OBTER:</p>
                        <p className="tiros-text">20 Tiros</p>
                    </div>
                    <div className="button-troca-cont">
                        <button className="button-troca" 
                            onClick={abrePopUp}
                        >
                            <p>OK</p>
                        </button>
                    </div>
                </Window>

                <Window titulo={"TROCA CONCLUÍDA"} 
                    styleContainer={{
                        width: 250,
                        height: 400,
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
        </Window>
    )
}

export default TelaReciclagem;