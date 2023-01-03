import React, { useState } from "react";
import "./Banner.css";
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

const BotaoRodaGacha = ({ rodaGacha, bitsMoedaValor }) => {
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
        onClick={rodaGacha}
      >
        <Link to={endereco} className="home-button">
          ⟳
        </Link>
      </button>
    </div>
  );
};

const Banner = () => {
  const [sorteado, setSorteado] = useRecoilState(sorteadoAtom);
  const [storage, setStorage] = useRecoilState(storageAtom);
  const [imagemExibida, setImagemExibida] = useState(
    defaultBannerData[0].imagem
  );
  const [bitsMoeda, setBitsMoeda] = useRecoilState(bitsMoedaAtom);

  const botaoPassaEsquerda = () => {
    if (imagemExibida === defaultBannerData[0].imagem) {
      setImagemExibida(defaultBannerData[2].imagem);
    } else if (imagemExibida === defaultBannerData[2].imagem) {
      setImagemExibida(defaultBannerData[1].imagem);
    } else {
      setImagemExibida(defaultBannerData[0].imagem);
    }
  };

  const botaoPassaDireita = () => {
    if (imagemExibida === defaultBannerData[0].imagem) {
      setImagemExibida(defaultBannerData[1].imagem);
    } else if (imagemExibida === defaultBannerData[1].imagem) {
      setImagemExibida(defaultBannerData[2].imagem);
    } else {
      setImagemExibida(defaultBannerData[0].imagem);
    }
  };

  const rodaGacha = () => {
    if (bitsMoeda >= 500) {
      if (
        window.confirm(
          "Quer gastar 500 bits para rodar? Você possui " + bitsMoeda + " bits."
        )
      ) {
        setBitsMoeda(bitsMoeda - 500);
        console.log(defaultBannerData[0].imagem);
        const raridade = Math.random() * (100 - 0) + 0;
        let numSorteio;
        if (raridade <= 5) {
          numSorteio = Math.floor(Math.random() * (3 - 0) + 0);
          setSorteado(defaultBannerData[numSorteio]);
        } else if (raridade <= 20) {
          numSorteio = 3 + Math.floor(Math.random() * (3 - 0) + 0);
          setSorteado(defaultBannerData[numSorteio]);
        } else if (raridade <= 55) {
          numSorteio = 6 + Math.floor(Math.random() * (3 - 0) + 0);
          setSorteado(defaultBannerData[numSorteio]);
        } else {
          numSorteio = 9 + Math.floor(Math.random() * (3 - 0) + 0);
          setSorteado(defaultBannerData[numSorteio]);
        }

        if (storage.size === 0) {
          setStorage(storage.push(defaultBannerData[numSorteio]));
        } else {
          let itemEncontrado = false;

          const storageAtualizado = storage.map((item) => {
            if (item.nome === defaultBannerData[numSorteio].nome) {
              let novoItem = { ...item };
              novoItem.quantidade++;
              itemEncontrado = true;
              return novoItem;
            } else {
              return item;
            }
          });

          if (!itemEncontrado) {
            storageAtualizado.push(defaultBannerData[numSorteio]);
          }

          setStorage(storageAtualizado);
          console.log(storage);
        }
      }
    } else {
      alert("Você não possui bits suficientes.");
    }
  };

  return (
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
            x
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
          <BotaoRodaGacha rodaGacha={rodaGacha} bitsMoedaValor={bitsMoeda} />
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
  );
};

export default Banner;
