import React, { useContext, useState, useEffect } from "react";
import "./banner.css";
import { Link } from "react-router-dom";
import { defaultBannerData } from "../data/banners/defaultBannerData";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { sorteadoAtom } from "../atoms/sorteadoAtom";
import { storageAtom } from "../atoms/storageAtom";
import { bitsMoedaAtom } from "../atoms/bitsMoedaAtom";
import PopupConfirmacao from "../components/PopupConfirmacao";
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

  const atualizaEstudante = () => {
    axios
      .put(`http://localhost:3333/student/${auth.user.id}`, auth.user)
      .then(() => {
        console.log("mudado");
      });
  };

  const verEstudante = () => {
    axios
      .get(`http://localhost:3333/student/${auth.user.id}`)
      .then((response) => {
        console.log("aluno: ", response.data);
      });
  };

  const botaoPassaEsquerda = () => {
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
    if (bitsMoeda >= 500) {
      setBitsMoeda(bitsMoeda - 500);
      const raridade = Math.random() * (100 - 0) + 0;
      let numSorteio;
      if (raridade <= 5) {
        numSorteio = Math.floor(Math.random() * (3 - 0) + 0);
        setSorteado(defaultBannerData[numSorteio][0].obj);
      } else if (raridade <= 20) {
        numSorteio = 3 + Math.floor(Math.random() * (3 - 0) + 0);
        setSorteado(defaultBannerData[numSorteio][0].obj);
      } else if (raridade <= 55) {
        numSorteio = 6 + Math.floor(Math.random() * (3 - 0) + 0);
        setSorteado(defaultBannerData[numSorteio][0].obj);
      } else {
        numSorteio = 9 + Math.floor(Math.random() * (3 - 0) + 0);
        setSorteado(defaultBannerData[numSorteio][0].obj);
      }

      if (storage.size === 0) {
        setStorage(storage.push(defaultBannerData[numSorteio][0].id));
      } else {
        let itemEncontrado = false;

        const storageAtualizado = storage.map((item) => {
          if (item === defaultBannerData[numSorteio][0].id) {
            let novoItem = { ...item };
            novoItem.quantidade++;
            itemEncontrado = true;
            return novoItem;
          } else {
            return item;
          }
        });

        if (!itemEncontrado) {
          storageAtualizado.push(defaultBannerData[numSorteio][0].id);
        }

        setStorage(storageAtualizado);
      }
    }
  };

  const abrePopUp = () => {
    setPopUpVisivel("visible");
  };

  return (
    <div>
      <PopUpRodaGacha
        bits={bitsMoeda}
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
            <BotaoRodaGacha abrePopUp={abrePopUp} bitsMoedaValor={bitsMoeda} />
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
