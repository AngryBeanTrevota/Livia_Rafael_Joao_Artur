import React, { useContext, useState } from "react";
import "./banner.css";
import { Link } from "react-router-dom";
import { defaultBannerData } from "../data/banners/defaultBannerData2";
import {
  useRecoilState,
} from "recoil";
import { sorteadoAtom } from "../atoms/sorteadoAtom";
import { storageAtom } from "../atoms/storageAtom";
import { bitsMoedaAtom } from "../atoms/bitsMoedaAtom";
import { AuthContext } from "../context/Auth/AuthContext";
import axios from "axios";

const PopUpRodaGacha = ({ bits, rodaGacha, visivel, fechaPopUp }) => {
  let textoCorpo, textoBotao, funcaoBotaoConfirmacao, endereco;
  if (bits >= 500) {
    textoCorpo = "Você quer rodar o banner? Você possui " + bits + " bits.";
    textoBotao = "confirmar";
    funcaoBotaoConfirmacao = rodaGacha;
    endereco = "/animacaoBanner";
  } else {
    textoCorpo = "Você não tem bits o suficiente.";
    textoBotao = "retornar";
    funcaoBotaoConfirmacao = fechaPopUp;
    endereco = "/banner";
  }
  return (
    <div style={{ visibility: visivel }} id="popUpRodaBanner">
      <div
        className="janelaWindows"
        style={{
          width: 170,
          height: 80,
        }}
      >
        <div className="footerJanelaWindows">
          <p className="textoCorpo">Banner</p>
          <button
            className="windowsButton"
            style={{ marginBottom: 15 }}
            onClick={fechaPopUp}
          >
            <Link to="/banner" className="home-button">
              <p className="textoCorpo">x</p>
            </Link>
          </button>
        </div>
        <p className="textoCorpo">{textoCorpo}</p>
        <button
          className="botaoGeralWindows"
          style={{ marginBottom: 50 }}
          onClick={funcaoBotaoConfirmacao}
        >
          <Link to={endereco} className="home-button">
            <p className="textoCorpo">{textoBotao}</p>
          </Link>
        </button>
      </div>
    </div>
  );
};

const BotaoRodaGacha = ({ abrePopUp, bitsMoedaValor }) => {
  let endereco;
  if (bitsMoedaValor >= 500) {
    endereco = "/animacaoBanner";
  } else {
    endereco = "/banner";
  }
  return (
    <div>
      <button
        className="windowsButton"
        style={{
          height: 40,
          fontSize: 20,
          width: 60,
        }}
        type="button"
        id="roda"
        onClick={abrePopUp}
      >
        ⟳
      </button>
    </div>
  );
};

const Banner = () => {
  const [sorteado, setSorteado] = useRecoilState(sorteadoAtom);
  const [storage, setStorage] = useRecoilState(storageAtom);
  const [imagemExibida, setImagemExibida] = useState(
    defaultBannerData[0][0].obj.imagem
  );
  const [bitsMoeda, setBitsMoeda] = useRecoilState(bitsMoedaAtom);
  const [popUpVisivel, setPopUpVisivel] = useState("hidden");
  const auth = useContext(AuthContext);

  // TENTANDO ATUALIZAR O USER

  const atualizaEstudante = (itensAtualizados) => {
    axios
      .put(`http://localhost:3333/student/${auth.user.id}`, {
        itens: itensAtualizados,
      })
      .then(() => {
      });
    setStorage(itensAtualizados);
  };

  const pegaItens = () => {
    axios
      .get(`http://localhost:3333/student/${auth.user.id}`)
      .then((response) => {
      });
  };

  const atualizaSorteado = (numSorteio) => {
    /*
    await axios.get(`http://localhost:3333/item/${numSorteio}")
    .then((response) => {
      setSorteado(response);
    });
    */
    setSorteado(defaultBannerData[numSorteio][0].obj);
  };

  const botaoPassaEsquerda = () => {
    pegaItens();
    if (imagemExibida === defaultBannerData[0][0].obj.imagem) {
      setImagemExibida(defaultBannerData[2][0].obj.imagem);
    } else if (imagemExibida === defaultBannerData[2].imagem) {
      setImagemExibida(defaultBannerData[1][0].obj.imagem);
    } else {
      setImagemExibida(defaultBannerData[0][0].obj.imagem);
    }
  };

  const botaoPassaDireita = () => {
    if (imagemExibida === defaultBannerData[0][0].obj.imagem) {
      setImagemExibida(defaultBannerData[1][0].obj.imagem);
    } else if (imagemExibida === defaultBannerData[1][0].obj.imagem) {
      setImagemExibida(defaultBannerData[2][0].obj.imagem);
    } else {
      setImagemExibida(defaultBannerData[0][0].obj.imagem);
    }
  };

  const fechaPopUp = () => {
    setPopUpVisivel("hidden");
  };

  const rodaGacha = () => {
    // TEMPORÁRIO, quando fizer o quiz pra atualizar o dinheiro, tem que tirar isso
    setBitsMoeda(bitsMoeda - 500);

    const raridade = Math.random() * (100 - 0) + 0;
    let numSorteio;
    if (raridade <= 5) {
      numSorteio = Math.floor(Math.random() * (3 - 0) + 0);
      atualizaSorteado(numSorteio);
    } else if (raridade <= 20) {
      numSorteio = 3 + Math.floor(Math.random() * (3 - 0) + 0);
      atualizaSorteado(numSorteio);
    } else if (raridade <= 55) {
      numSorteio = 6 + Math.floor(Math.random() * (3 - 0) + 0);
      atualizaSorteado(numSorteio);
    } else {
      numSorteio = 9 + Math.floor(Math.random() * (3 - 0) + 0);
      atualizaSorteado(numSorteio);
    }

    // Parte pra salvar no banco

    // Pega lista do usuário

    axios
      .get(`http://localhost:3333/student/${auth.user.id}`)
      .then((response) => {
        let itens = [...response.data.itens];

        let itensStorage = [...storage]; // Apaga quando conseguir fazer os itens salvarem no banco

        // Atualiza moedas

        let moedasAtualizado = response.data.xp - 500;
        auth.user.xp = moedasAtualizado;

        axios
          .put(`http://localhost:3333/student/${auth.user.id}`, {
            xp: moedasAtualizado,
          })
          .then(() => {
            pegaItens();
          });

        itens.push(numSorteio);
        itensStorage.push(numSorteio); // Apaga quando conseguir fazer os itens salvarem no banco

        // Atualiza no banco de dados

        atualizaEstudante(itens);
        setStorage(itensStorage); // Apaga quando conseguir fazer os itens salvarem no banco
      });
  };

  

  const abrePopUp = () => {
    setPopUpVisivel("visible");
  };

  return (
    <div>
      <PopUpRodaGacha
        bits={auth.user.xp}
        rodaGacha={rodaGacha}
        visivel={popUpVisivel}
        fechaPopUp={fechaPopUp}
      />
      <div className="pagina">
        <div className="parteSuperior">
          <p>Starter</p>
          <button
            className="windowsButton"
            style={{
              height: 20,
              width: 20,
            }}
            type="button"
          >
            <span
              style={{
                fontSize: 13,
                marginBottom: 3,
              }}
            >
              <Link to="/menu">x</Link>
            </span>
          </button>
        </div>
        <div className="paginaCorpo">
          <img
            className="imagemBanner"
            src={imagemExibida}
            alt="Minha imagem"
          ></img>
          <div className="botoesBanner">
            <button
              className="windowsButton"
              style={{
                height: 40,
                fontSize: 20,
                width: 60,
              }}
              type="button"
              id="passaEsquerda"
              onClick={botaoPassaEsquerda}
            >
              ◄◄
            </button>
            <BotaoRodaGacha
              abrePopUp={abrePopUp}
              bitsMoedaValor={auth.user.xp}
            />
            <button
              className="windowsButton"
              type="button"
              id="passaDireita"
              style={{
                height: 40,
                fontSize: 20,
                width: 60,
              }}
              onClick={botaoPassaDireita}
            >
              ►►
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
