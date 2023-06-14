import React, { useState } from "react";
import Window from "../components/Window";
import recycle from "../icones/recycle.png";
import "./telaReciclagem.css";

const TelaReciclagem = () => {
  const [popUpVisivel, setPopUpVisivel] = useState(false);
  const [valorReciclagem, setValorReciclagem] = useState(0);
  const [nomeVisivel, setNomeVisivel] = useState(false);
  const [nomeItem, setNomeItem] = useState("");
  const [valorItemSelecionado, setValorItemSelecionado] = useState(0);
  const [itens, setItens] = useState([
    { nome: "Marina", valorReciclagem: 5, quantidade: 2 },
    { nome: "Gatsby item 3", valorReciclagem: 10, quantidade: 3 },
    { nome: "Bengie item 3", valorReciclagem: 8, quantidade: 2 },
    { nome: "Marina item 1", valorReciclagem: 3, quantidade: 1 },
    { nome: "Bengie item 2", valorReciclagem: 7, quantidade: 2 },
    { nome: "Bengie", valorReciclagem: 12, quantidade: 2 },
    { nome: "Gatsby item 2", valorReciclagem: 23, quantidade: 4 },
    { nome: "Gatsby", valorReciclagem: 45, quantidade: 1 },
  ]);
  const [valorTotalReciclagem, setValorTotalReciclagem] = useState(0);

  const abrePopUp = () => {
    setPopUpVisivel(true);
    const itemSelecionado = itens.find((item) => item.nome === nomeItem);
    if (itemSelecionado && itemSelecionado.quantidade > 0) {
      setValorReciclagem(itemSelecionado.valorReciclagem);

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

      // Atualizar o valor total de reciclagem
      setValorTotalReciclagem(
        (prevValor) => prevValor + itemSelecionado.valorReciclagem
      );
    }
  };

  const fechaPopUp = () => {
    setPopUpVisivel(false);
    setNomeItem("");
    setValorItemSelecionado(0);
  };

  const atualizarValorReciclagem = (valor) => {
    setValorReciclagem(valor);
  };

  const mostrarNomeItem = (nome, valor) => {
    setNomeItem(nome);
    setValorItemSelecionado(valor);
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
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="Recycle-window-cont" id="corpoRecycle"
        style={{
          paddingTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <div className="reciclar-painel">
          <Window
            titulo={"RECICLAR"}
            styleContainer={{

            }}
          >
            <div className="recycle-cont">
              <div className="recycle">
                {itensDisponiveis.map((item, index) => (
                  <div
                    className={`itens-folder ${
                      nomeItem === item.nome ? "item-selecionado" : ""
                    }`}
                    onMouseEnter={() =>
                      atualizarValorReciclagem(item.valorReciclagem)
                    }
                    onClick={() =>
                      mostrarNomeItem(item.nome, item.valorReciclagem)
                    }
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
            }}
          >
            <div className="troca-cont">
              <p className="obter-text">OBTER:</p>
              <p className="tiros-text">{valorItemSelecionado} Bits</p>
            </div>
            <div className="button-troca-cont">
              {nomeVisivel && (
                <div className="item-nome-visivel">
                  <p>{nomeItem}</p>
                </div>
              )}
              <button
                className="button-troca"
                onClick={abrePopUp}
                disabled={!nomeItem}
              >
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
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              visibility: popUpVisivel ? "visible" : "hidden",
            }}
          >
            <div className="recycle-feita">
              <p className="feita-text">TROCA CONCLUÍDA!</p>
              <p className="valor-total-reciclagem">
                Valor Total de Reciclagem: {valorTotalReciclagem}
              </p>
            </div>
            <div className="button-troca-cont">
              <button
                className="button-troca"
                onClick={fechaPopUp}
                onMouseLeave={esconderNomeItem}
              >
                <p>OK</p>
              </button>
            </div>
          </Window>
        </div>

        <div className="valor-armazenado-painel">
          <Window
            titulo={"VALOR ARMAZENADO"}
            styleContainer={{
            }}
          >
            <div className="valor-armazenado-cont">
              <p className="valor-armazenado-text">
                Valor Total Reciclado: {valorTotalReciclagem}
              </p>
            </div>
          </Window>
        </div>
      </div>
    </Window>
  );
};

export default TelaReciclagem;
