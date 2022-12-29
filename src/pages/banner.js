import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import { defaultBannerData } from "../data/banners/defaultBannerData";
import { useRecoilState } from "recoil";
import { sorteadoAtom } from "../atoms/sorteadoAtom";
import { storageAtom } from "../atoms/storageAtom";

const Banner = () => {
  const [sorteado, setSorteado] = useRecoilState(sorteadoAtom);
  const [storage, setStorage] = useRecoilState(storageAtom);

  const rodaGacha = () => {
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
      const storageAtualizado = [...storage];
      let itemEncontrado = false;

      storageAtualizado.forEach((item) => {
        let novoItem = item;
        if (novoItem.nome === defaultBannerData[numSorteio].nome) {
          item.quantidade++;
          itemEncontrado = true;
        }
      });

      if (!itemEncontrado) {
        storageAtualizado.push(defaultBannerData[numSorteio]);
      }

      setStorage(storageAtualizado);
    }
    console.log(storage);
  };

  return (
    <div className="pagina">
      <div className="parteSuperior">
        <p>Starter</p>
        <button type="button">x</button>
      </div>
      <img
        className="imagemBanner"
        src={sorteado.imagem}
        alt="Minha imagem"
      ></img>
      <div className="botoesBanner">
        <button type="button" id="passaEsquerda">
          ◄◄
        </button>
        <button type="button" id="roda" onClick={rodaGacha}>
          <Link to="/animacaoBanner" className="home-button">
            ⟳
          </Link>
        </button>
        <button type="button" id="passaDireita">
          ►►
        </button>
      </div>
    </div>
  );
};

export default Banner;
