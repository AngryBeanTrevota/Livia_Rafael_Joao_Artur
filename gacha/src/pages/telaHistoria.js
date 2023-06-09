import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/Auth/AuthProvider";
import { useNavigate } from "react-router-dom";

import "./telaHistoria.css"

import WindowsButton from "../components/WindowsButton";
import WindowsInput from "../components/WindowsInput";
import Window from "../components/Window";

import fotoPersonagem from "../imagens/chibi.png"

const conversa =
{
    personagem: "Nome Personagem",
    mensagens: [
        {
            nome: "Personagem",
            mensagem: "Uma mensagem",
        },
        {
            nome: "Jogador",
            mensagem: "Uma mensagem"
        },
        {
            nome: "Jogador",
            mensagem: "Uma mensagem"
        },
        {
            nome: "Jogador",
            mensagem: "Uma mensagem"
        },
        {
            nome: "Personagem",
            mensagem: "Uma mensagem"
        },
        {
            nome: "Personagem",
            mensagem: "Uma mensagem"
        },
        {
            nome: "Jogador",
            mensagem: "Uma mensagem"
        },
        {
            nome: "Jogador",
            mensagem: "Uma mensagem"
        },
        {
            nome: "Jogador",
            mensagem: "Uma mensagem"
        },
        {
            nome: "Personagem",
            mensagem: "Uma mensagem asdf;kja;sdkjf ;alksjd f;lkajsdflk jas;ldf ha;ksjdh f';oas hdflkja hgsdlki"
        }
    ]
}

export default function Historia() {
    const [falas, setFalas] = useState([]);
    const [numFalas, setNumFalas] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [mensage, setMensage] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const containerRef = useRef(null);

    const scrollToBottom = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            container.scrollTop = container.scrollHeight;
        }
    };

    const Fala = (fala) => {
        return (
            <div key={Math.random() % 9999} className={fala.nome === "Personagem" ? "mensagem-personagem" : "mensagem-jogador"}>
                <p style={{ opacity: 0.6, fontSize: 14 }}>{fala.nome} diz:</p>
                <p style={{ opacity: 0.9, fontSize: 15 }}>{`${fala.mensagem}`}</p>
            </div>
        );
    };

    const proximo = () => {
        if (numFalas !== conversa.mensagens.length) {
            setNumFalas(numFalas + 1);

            if (conversa.mensagens[numFalas].nome === "Personagem") {
                setIsTyping(true)
                setIsButtonDisabled(true);

                const typingTimer = setTimeout(() => {
                    setFalas((prevFalas) => [...prevFalas, conversa.mensagens[numFalas]]);
                    setIsTyping(false);
                    setIsButtonDisabled(false);
                }, 1000);

            } else {

                setFalas((prevFalas) => [...prevFalas, conversa.mensagens[numFalas]]);

            }
        }
    };

    useEffect(() => {
        scrollToBottom();

        if (conversa.mensagens[numFalas] && conversa.mensagens[numFalas].nome === "Personagem") {
            proximo();
        }

        if (
            conversa.mensagens[numFalas] &&
            numFalas < conversa.mensagens.length &&
            conversa.mensagens[numFalas].nome === "Jogador" &&
            !isTyping
        ) {
            const mensagem = conversa.mensagens[numFalas].mensagem;
            let i = -1;

            const displayNextCharacter = () => {
                setIsButtonDisabled(true)
                setMensage((prevMensage) => prevMensage + mensagem.charAt(i));
                i++;

                if (i < mensagem.length) {
                    setTimeout(displayNextCharacter, 100);
                } else {
                    setIsButtonDisabled(false)
                }
            };

            if (mensagem.length > 0) {
                displayNextCharacter();
            } else {
                setIsButtonDisabled(false)
            }
        }
    }, [numFalas, isTyping]);



    return (
        <Window
            styleWindow={{ height: "100vh", width: "100vw", justifyContent: "start", padding: 10 }}
            titulo="História"
        >
            <div className="container-personagem">
                <img src={fotoPersonagem} width={120} height={120} />
                <p>{conversa.personagem}</p>
            </div>

            <Window
                showX={false}
                windowRef={containerRef}
                styleWindow={{
                    height: "352px",
                    width: "355px",
                    backgroundColor: "#FFF",
                    justifyContent: "start",
                    alignItems: "start",
                    padding: 6,
                    overflow: "hidden",
                    overflowY: "scroll",
                }}
                titulo={"Chat"}
            >
                {falas ? falas.map((f) => Fala(f)) : null}
                {isTyping && <p>Personagem está digitando...</p>}
            </Window >


            <div className="input-wrapper">

                <textarea type="" disabled={true} value={mensage}></textarea>
            </div>


            <WindowsButton
                style={{ height: 40, width: 370, marginTop: 20, fontSize: 18 }}
                onClick={() => { proximo(); setMensage("") }}
                disabled={isTyping || isButtonDisabled}
            >
                Enviar
            </WindowsButton>
        </Window>
    );
}