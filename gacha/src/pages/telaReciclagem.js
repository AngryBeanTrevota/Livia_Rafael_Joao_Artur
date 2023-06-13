import Window from "../components/Window";
import "./telaReciclagem.css";

import React, { useState } from "react";
import recycle from "../icones/recycle.png";

const TelaReciclagem = () => {
    const [popUpVisivel, setPopUpVisivel] = useState(false);
    const [valorReciclagem, setValorReciclagem] = useState(0);
    const [nomeVisivel, setNomeVisivel] = useState(false);
    const [nomeItem, setNomeItem] = useState("");
    const [itens, setItens] = useState([
        { nome: "Item 1", valorReciclagem: 5, quantidade: 2 },
        { nome: "Item 2", valorReciclagem: 10, quantidade: 3 },
        { nome: "Item 3", valorReciclagem: 8, quantidade: 2 },
        { nome: "Item 4", valorReciclagem: 3, quantidade: 1 },
        { nome: "Item 5", valorReciclagem: 7, quantidade: 2 },
        { nome: "Item 6", valorReciclagem: 12, quantidade: 2 },
        { nome: "Item 7", valorReciclagem: 23, quantidade: 4 },
        { nome: "Item 8", valorReciclagem: 45, quantidade: 1 },
    ]);

    const abrePopUp = () => {
        setPopUpVisivel(true);
        const itemSelecionado = itens.find((item) => item.nome === nomeItem);
        if (itemSelecionado && itemSelecionado.quantidade > 0) {
            const novoValorReciclagem = itemSelecionado.valorReciclagem * itemSelecionado.quantidade;
            setValorReciclagem(novoValorReciclagem);

            // Diminuir a quantidade do item em 1
            const novosItens = itens.map((item) => {
                if (item.nome === nomeItem) {
                    return {
                        ...item,
                        quantidade: item.quantidade - 1,
                    };
                }
                return item;
            });
            setItens(novosItens);
        }
    };

    const fechaPopUp = () => {
        setPopUpVisivel(false);
    };

    const atualizarValorReciclagem = (valor) => {
        setValorReciclagem(valor);
    };

    const mostrarNomeItem = (nome) => {
        setNomeItem(nome);
        setNomeVisivel(true);
    };

    const esconderNomeItem = () => {
        setNomeVisivel(false);
    };

    const itensDisponiveis = itens.filter((item) => item.quantidade > 0);

    return (
        <Window
            titulo={"Tela de Reciclagem"}
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
                    <Window
                        titulo={"RECICLAR"}
                        styleContainer={{
                            width: 300,
                            height: 400,
                            position: "absolute",
                            top: "20%",
                            left: "35%",
                        }}
                    >
                        <div className="recycle-cont">
                            <div className="recycle">
                                {itensDisponiveis.map((item, index) => (
                                    <div
                                        className={`itens-folder ${nomeItem === item.nome ? "item-selecionado" : ""}`}
                                        onMouseEnter={() => atualizarValorReciclagem(item.valorReciclagem)}
                                        onClick={() => mostrarNomeItem(item.nome)}
                                        key={index}
                                    >
                                        <img
                                            style={{ width: 70, height: 55 }}
                                            className="imagemPasta"
                                            src="https://i.imgur.com/r3a0P0E.png"
                                            alt="item-icon"
                                        />
                                        <p className="item-name">{item.nome}</p>
                                        <p>{item.quantidade}x</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Window>
                </div>

                <div className="trocar-painel">
                    <Window
                        titulo={"TROCAR"}
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
                            {nomeVisivel && (
                                <div className="item-nome-visivel">
                                    <p>{nomeItem}</p>
                                </div>
                            )}
                            <button className="button-troca" onClick={abrePopUp} disabled={!nomeItem}>
                                <img
                                    src={recycle}
                                    alt="recycle"
                                    style={{
                                        maxWidth: 25,
                                    }}
                                />
                            </button>
                        </div>
                    </Window>
                </div>

                <div className="troca-feita-painel">
                    <Window
                        titulo={"TROCA CONCLUÍDA"}
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
                            <button className="button-troca" onClick={fechaPopUp} onMouseLeave={esconderNomeItem}>
                                <p>OK</p>
                            </button>
                        </div>
                    </Window>
                </div>
            </div>
        </Window>
    );
};

export default TelaReciclagem;
