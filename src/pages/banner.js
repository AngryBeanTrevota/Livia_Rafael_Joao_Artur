import React from "react";
import { useState } from "react";
import "./Banner.css";

const Banner = () => {
    const [sorteado, setSorteado] = useState({});


    const personagensItens = [
        {
          nome: 'Stella',
          tipo: "personagem",
          id: 'stellaDefault',
          descricao: 'blablabadsnasdjfnsoedifd descrição da mina competitiva',
          bonus: 'nada ainda',
          habilitado: false,
          imagem: '../imagens/she.jpg',
          imagemChibi: 'nada ainda',
          nivel: 0,
          raridade: "SSR"
        },
        {
          nome: 'Reigen',
          tipo: "personagem",
          id: 'reigenDefault',
          descricao: 'mentirosinho da porra',
          bonus: 'nada ainda',
          habilitado: false,
          imagem: '../imagens/he.jpg',
          imagemChibi: 'nada ainda',
          nivel: 0,
          raridade: "SSR"
        },
        {
          nome: 'Tanaka',
          tipo: "personagem",
          id: 'tanakaDefault',
          descricao: 'zzzzzzzzzzzzzzzzzzzzzz ta dormindo po',
          bonus: 'nada ainda',
          habilitado: false,
          imagem: '../imagens/they.jpg',
          imagemChibi: 'nada ainda',
          nivel: 0,
          raridade: "SSR"
        },
        {
            nome: 'Stella item 3',
            tipo: "item",
            id: 'tanakaDefault',
            descricao: 'zzzzzzzzzzzzzzzzzzzzzz ta dormindo po',
            bonus: 'nada ainda',
            habilitado: false,
            imagem: 'nada ainda',
            raridade: "SR"
        },
        {
            nome: 'Reigen item 3',
            tipo: "item",
            id: 'tanakaDefault',
            descricao: 'zzzzzzzzzzzzzzzzzzzzzz ta dormindo po',
            bonus: 'nada ainda',
            habilitado: false,
            imagem: 'nada ainda',
            raridade: "SR"
        },
        {
            nome: 'Tanaka item 3',
            tipo: "item",
            id: 'tanakaDefault',
            descricao: 'zzzzzzzzzzzzzzzzzzzzzz ta dormindo po',
            bonus: 'nada ainda',
            habilitado: false,
            imagem: 'nada ainda',
            raridade: "SR"
        },
        {
            nome: 'Reigen item 2',
            tipo: "item",
            id: 'tanakaDefault',
            descricao: 'zzzzzzzzzzzzzzzzzzzzzz ta dormindo po',
            bonus: 'nada ainda',
            habilitado: false,
            imagem: 'nada ainda',
            raridade: "R"
        },
        {
            nome: 'Tanaka item 2',
            tipo: "item",
            id: 'tanakaDefault',
            descricao: 'zzzzzzzzzzzzzzzzzzzzzz ta dormindo po',
            bonus: 'nada ainda',
            habilitado: false,
            imagem: 'nada ainda',
            raridade: "R"
        },
        {
            nome: 'Stella item 2',
            tipo: "item",
            id: 'tanakaDefault',
            descricao: 'zzzzzzzzzzzzzzzzzzzzzz ta dormindo po',
            bonus: 'nada ainda',
            habilitado: false,
            imagem: 'nada ainda',
            raridade: "R"
        },
        {
            nome: 'Tanaka item 1',
            tipo: "item",
            id: 'tanakaDefault',
            descricao: 'zzzzzzzzzzzzzzzzzzzzzz ta dormindo po',
            bonus: 'nada ainda',
            habilitado: false,
            imagem: 'nada ainda',
            raridade: "N"
        },
        {
            nome: 'Reigen item 1',
            tipo: "item",
            id: 'tanakaDefault',
            descricao: 'zzzzzzzzzzzzzzzzzzzzzz ta dormindo po',
            bonus: 'nada ainda',
            habilitado: false,
            imagem: 'nada ainda',
            raridade: "N"
        },
        {
            nome: 'Stella item 1',
            tipo: "item",
            id: 'tanakaDefault',
            descricao: 'zzzzzzzzzzzzzzzzzzzzzz ta dormindo po',
            bonus: 'nada ainda',
            habilitado: false,
            imagem: 'nada ainda',
            raridade: "N"
        }
      ];

      const rodaGacha = () => {
        const raridade = Math.random() * (100 - 0) + 0;
        let numSorteio;
        if(raridade <= 5)
        {
            numSorteio = Math.floor(Math.random() * (3 - 0) + 0);
            setSorteado(personagensItens[numSorteio])
        }
        else if(raridade <= 20)
        {
            numSorteio = 3 + Math.floor(Math.random() * (3 - 0) + 0);
            setSorteado(personagensItens[numSorteio])
        } else if (raridade <= 55)
        {
            numSorteio = 6 + Math.floor(Math.random() * (3 - 0) + 0);
            setSorteado(personagensItens[numSorteio])
        }
        else
        {
            numSorteio = 9 + Math.floor(Math.random() * (3 - 0) + 0);
            setSorteado(personagensItens[numSorteio])
        }
      }


    return (
        <div className="pagina">
            <div className="parteSuperior">
                <h1>Starter Pack</h1>
                <button type="button">x</button>
            </div>
            <img className="imagemBanner" src="https://i.redd.it/ucga8emsa7q71.png"></img>
            <div className="botoesBanner">
                <button type="button" id="passaEsquerda">◄◄</button>
                <button type="button" id="roda" onClick={rodaGacha}>⟳</button>
                <button type="button" id="passaDireita">►►</button>
            </div>
        </div>
    )
}

export default Banner;