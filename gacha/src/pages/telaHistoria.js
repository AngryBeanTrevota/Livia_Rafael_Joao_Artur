import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./telaHistoria.css"

import WindowsButton from "../components/WindowsButton";
import WindowsInput from "../components/WindowsInput";
import Window from "../components/Window";

import fotoPersonagem from "../imagens/chibi.png"
import { AuthContext } from "../context/Auth/AuthContext";

export default function Historia() {
    const [falas, setFalas] = useState([]);
    const [numFalas, setNumFalas] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [mensage, setMensage] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const navigate = useNavigate()

    const containerRef = useRef(null);
    const auth = useContext(AuthContext);
    const conversa = auth.conversas[auth.quiz.num];

    if (!auth.quiz) {
        navigate('/menu');
    }

    const scrollToBottom = () => {
        if (containerRef.current) {
            const container = containerRef.current;
            container.scrollTop = container.scrollHeight;
        }
    };



    const Fala = (fala) => {
        return (
            <div key={Math.random() % 9999} className={fala.nome === conversa.personagem ? "mensagem-personagem" : "mensagem-jogador"}>
                <p style={{ opacity: 0.6, fontSize: 14 }}>{fala.nome} diz:</p>
                <p style={{ opacity: 0.9, fontSize: 15 }}>{fala.mensagem ? `${fala.mensagem}` : ''}</p>
                {
                    fala.imagem ?
                    <img width={200} src={fala.imagem} alt="Imagem" />
                    :
                    null
                }
            </div>
        );
    };

    const proximo = () => {
        if (numFalas !== conversa.mensagens.length) {
            setNumFalas(numFalas + 1);

            if (conversa.mensagens[numFalas].nome === conversa.personagem) {
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
        if(auth.historia === -1){
            navigate('/menu')
        }
        scrollToBottom();

        if (conversa && conversa.mensagens[numFalas]  && conversa.mensagens[numFalas].nome === conversa.personagem) {
            proximo();
        }

        if (
            conversa &&
            conversa.mensagens[numFalas] &&
            numFalas < conversa.mensagens.length &&
            conversa.mensagens[numFalas].nome != conversa.personagem &&
            !isTyping
        ) {
            const mensagem = conversa.mensagens[numFalas].mensagem;
            let i = -1;

            const displayNextCharacter = () => {
                setIsButtonDisabled(true)
                setMensage((prevMensage) => prevMensage + mensagem.charAt(i));
                i++;

                if (i < mensagem.length) {
                    setTimeout(displayNextCharacter, 2);
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
            styleContainer={{ width: '100vw', width: "100vw", }}
            styleWindow={{ height: "100vh", width: "100vw", justifyContent: "start", alignItems: 'center' }}
            titulo="História"
        >
            <div className="container-personagem">
                <img src={fotoPersonagem} width={120} height={120} />
                <p>{conversa ? conversa.personagem : null}</p>
            </div>

            <Window
                showX={false}
                windowRef={containerRef}
                styleContainer={{
                    height: "300px",
                    width: "90vw",
                    maxWidth: 600,
                }}
                styleWindow={{
                    height: 300,
                    maxWidth: 600,
                    backgroundColor: "#FFF",
                    justifyContent: "start",
                    alignItems: "center",
                    overflow: "hidden",
                    overflowY: "scroll",
                }}
                titulo={"Chat"}
            >
                {falas ? falas.map((f) => Fala(f)) : null}
                {isTyping && <p>Personagem está digitando...</p>}
            </Window >


            <div className="input-wrapper">

                <textarea type="" style={{width: '85vw', maxWidth: 600, height: '100%'}} disabled={true} value={mensage}></textarea>
            </div>


            <WindowsButton
                style={{ height: 40, width: '90vw', marginTop: 20, maxWidth: 600, fontSize: 18 }}
                onClick={conversa && numFalas < conversa.mensagens.length ? () => {proximo(); setMensage("")} : () => navigate('/quizIndividual')}
                disabled={isTyping || isButtonDisabled}
            >
                {conversa && numFalas < conversa.mensagens.length ? 'Enviar' : 'Terminar'}
            </WindowsButton>
        </Window>
    );
}