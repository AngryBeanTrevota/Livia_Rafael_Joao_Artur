import React from "react";
import "./AnimacaoBanner.css";
import { Link } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { sorteadoAtom } from "../atoms/sorteadoAtom";

const AnimacaoBanner = () => {
  const sorteado = useRecoilValue(sorteadoAtom);

  return (
    <div className="tudo">
      <p>{sorteado.nome}</p>
      <button type="button">
        <Link to="/" className="home-button">
          skip
        </Link>
      </button>
    </div>
  );
};

export default AnimacaoBanner;
