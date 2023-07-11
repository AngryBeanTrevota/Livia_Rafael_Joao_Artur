import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/Auth/AuthContext";
import Window from "../components/Window";
import recycle from "../icones/recycle.png";
import "./telaReciclagem.css";

const TelaReciclagem = () => {
  const [popUpVisivel, setPopUpVisivel] = useState(false);
  const [valorReciclagem, setValorReciclagem] = useState(0);
  const [nomeVisivel, setNomeVisivel] = useState(true);
  const [nomeItem, setNomeItem] = useState("");
  const [valorItemSelecionado, setValorItemSelecionado] = useState(0);
  const [valorTotalReciclagem, setValorTotalReciclagem] = useState(0);
  const [item, setItem] = useState();

  const [listaItens, setListaItens] = useState([]);
  const [contagem, setContagem] = useState([]);
  const [repetidos, setRepetidos] = useState({});

  const auth = useContext(AuthContext);

  const abrePopUp = () => {
    setPopUpVisivel(true);
    const itemSelecionado = repetidos.find((item) => item.itemname === nomeItem);
    if (itemSelecionado && itemSelecionado.quantidade > 0) {
      setValorReciclagem(itemSelecionado.valorReciclagem);

      // Atualizar o valor total de reciclagem
      setValorTotalReciclagem(
        (prevValor) => prevValor + itemSelecionado.valorReciclagem
      );
    }
  };

  function encontrarElementosRepetidos(listaItens) {
    let repetidos = {};
    listaItens.forEach((item) => {
      if (item.quantity > 1) {
        repetidos[item.item.name] = {quantidade: item.quantity, item_id: item.item.id};
      }
    });
    return repetidos;
  }

  async function updateItemQuantity(studentId, itemId, quantity) {
    try {
      const response = await axios.put(
        `http://localhost:3333/students/${studentId}/items/${itemId}/quantity`,
        { quantity }
      );
      const updatedStudentItem = response.data;
      // Faça o que for necessário com o student_item atualizado
      console.log(updatedStudentItem);
    } catch (error) {
      console.error('Error updating item quantity:', error);
    }
  }

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios.get(
          `http://localhost:3333/student/${auth.user.id}/items`
        );
        
        const itensRepetidos = encontrarElementosRepetidos(response.data);
        setRepetidos(itensRepetidos);
        setListaItens(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    }

    fetchItems();
  }, [repetidos]);

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
  const navigate = useNavigate();


  return (
    <Window
      titulo={"Tela de Reciclagem"}
      clickX={() => navigate('/menu')}
      styleWindow={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="Recycle-window-cont" id="corpoRecycle"
        style={{
          paddingTop: '20%',
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
              maxWidth: '300px',
              maxHeigth: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              overflowY: 'auto',
            }}
          >
            <div className="recycle-cont">
              <div className="recycle">
                {Object.entries(repetidos).map(([itemName, dados], index) => (
                  <div
                    className={`itens-folder ${nomeItem === itemName ? "item-selecionado" : ""}`}
                    onMouseEnter={() => atualizarValorReciclagem(10)}
                    onClick={() => {
                      mostrarNomeItem(itemName, 10);
                      setItem({ name: itemName, valorReciclagem: 10, quantidade: dados.quantidade, item_id: dados.item_id });
                    }}
                    key={index}
                  >
                    <img
                      style={{ width: 70, height: 55 }}
                      className="imagemPasta"
                      src="https://i.imgur.com/r3a0P0E.png"
                      alt="item-icon"
                    />
                    <p className="item-name">{itemName}</p>
                    <p className="item-quantity">{dados.quantidade}</p>
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
                onClick={() => updateItemQuantity(auth.user.id, item.item_id, item.quantidade - 1)}
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
