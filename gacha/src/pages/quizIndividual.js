import React, { useContext, useEffect, useState } from "react";
import "./quizIndividual.css";
import timer from "../icones/timer.webp";
import chibi from "../imagens/chibi.png";
import item from "../imagens/item.png";
import axios from "axios";

import WindowsButton from "../components/WindowsButton";
import WindowsInput from "../components/WindowsInput";
import Window from "../components/Window";
import WindowsQuestion from "../components/WindowsQuestion";
import { AuthContext } from "../context/Auth/AuthContext";
import { useNavigate } from 'react-router-dom';


const QuizIndividual = () => {
    const [time, setTime] = useState({ minutes: 0, seconds: 0 });
    const [questao, setQuestao] = useState(0)
    const [respondido, setRespondido] = useState(false);
    const [resposta, setResposta] = useState(-1);
    const [acertos, setAcertos] = useState(0);
    const [erro, setErro] = useState(false);

    let auth = useContext(AuthContext);
    const navigate = useNavigate();

    if (!auth.quiz) {
        navigate('/menu');
    }

    const atualizaBits = async () => {

        axios
            .put(`http://localhost:3333/student/${auth.user.id}`, {
                xp: parseInt(parseInt(auth.user.xp) + parseInt(acertos * 100) + parseInt(((10 / time.seconds * 60 + time.seconds)/acertos/5).toFixed(0)))
            })
            .then( async (response) => {
                console.log("Atualizado")
                auth.user.xp = response.data.xp
                console.log(response)
            }).catch((err) => {
                console.log(err)
            })
        
        
    }

    useEffect(() => {

        let interval = null;
        
        if(questao === 5){
            atualizaBits();
            setQuestao(6)
        }

        // Função para atualizar o timer a cada segundo
        if (questao <= 4) {
            interval = setInterval(() => {
                setTime((prevTime) => {
                    const seconds = prevTime.seconds + 1;

                    // Verifica se os segundos atingiram 60 e atualiza os minutos
                    if (seconds === 60) {
                        return { minutes: prevTime.minutes + 1, seconds: 0 };
                    }

                    if (questao >= 4) {
                        console.log(12)
                        clearInterval(interval);
                    }

                    return { ...prevTime, seconds };
                });
            }, 1000);
        }
        // Função de limpeza para parar o timer quando o componente for desmontado
        return () => {
            clearInterval(interval);
        };
    }, [questao]);

    return (
        <Window titulo={"Quiz"}
            styleContainer={{
                height: "100%",
                width: "100%",
                
            }}
            
            styleWindow={{
                width: '100%',
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingBottom: 100,
                gap: 40,
            }}>
            <div className="main-quiz"
            >
                <div className="timer">
                    <Window titulo={"TIME LEFT"}
                        styleContainer={{
                            width: 250,
                            marginTop: '8%'
                        }}

                        styleWindow={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: 40,
                        }}>
                        <div className="timer">
                            <img src={timer} alt="timer"
                                style={{
                                    maxWidth: 50,
                                }}
                            />
                        </div>
                        <div className="timer-number">
                            <h2>
                                {String(time.minutes).padStart(2, '0')}:{String(time.seconds).padStart(2, '0')}
                            </h2>
                        </div>
                    </Window>
                </div>
                {
                    questao > 4 ?
                        <Window
                            styleContainer={{
                                width: '100%',
                                maxWidth: 600,
                            }}
                            styleWindow={{
                                display: "flex",
                                alignItens: 'center',
                                justifyContent: "center",
                                gap: 40,
                            }}
                            
                            titulo='Pontuação'
                        >

                            <h2>{acertos}/5</h2>

                            <div>
                                <div className="pontuacao">
                                    <p className="titulo-pontuacao">{acertos} acertos</p>
                                    <p>{acertos * 100} tiros</p>
                                </div>
                                <div className="pontuacao">
                                    <p className="titulo-pontuacao">Bônus de Tempo </p>
                                    <p>{((10 / time.seconds * 60 + time.seconds)*acertos/5).toFixed(0)} tiros</p>
                                </div>
                            </div>
                            <WindowsButton
                                onClick={ async () => {
                                    navigate('/menu')
                                }}
                                style={
                                    {
                                        fontSize: 20,
                                        marginTop: 10,
                                        marginBottom: 10,
                                        width: '90%',
                                        height: 40
                                    }
                                }
                            >
                                Menu
                            </WindowsButton>

                        </Window>
                        :
                        <div className="question">
                            <Window titulo={"Question"}
                                styleContainer={{
                                    width: '100%',
                                    minWidth: 280,
                                    margin: 10
                                }}
                                styleWindow={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    gap: 40,
                                }}
                            >
                                <div className="question-title">
                                    <h2 className="pergunta">
                                        {auth.quiz && questao < 5 ? auth.quiz.questoes[questao].pergunta : null}
                                    </h2>
                                </div>

                                <div className="question-options">
                                    {
                                        auth.quiz && questao < 5 && auth.quiz.questoes[questao].respostas.map((r, index) =>
                                            <WindowsQuestion
                                                disabled={respondido}
                                                style={respondido && index === resposta && index !== auth.quiz.questoes[questao].resposta ? { color: 'red' } : respondido && index === auth.quiz.questoes[questao].resposta ? { color: 'green' } : null}
                                                selected={index === resposta}
                                                onClick={(() => setResposta(index))}>
                                                {r}
                                            </WindowsQuestion>
                                        )}
                                </div>


                                <WindowsButton
                                    onClick={async () => {

                                        if (!respondido) {
                                            if (resposta === -1) {
                                                setErro(true);
                                                return;
                                            }
                                            setRespondido(true)
                                            if (resposta === auth.quiz.questoes[questao].resposta) {
                                                setAcertos(acertos + 1)
                                            }
                                        } else {
                                            setQuestao(questao + 1)
                                            setRespondido(false)
                                            setResposta(-1)
                                        }
                                        console.log(questao)
                                    }}
                                    style={
                                        {
                                            fontSize: 20,
                                            marginBottom: 10,
                                            width: '90%',
                                            height: 40
                                        }
                                    }
                                >
                                    {respondido ? 'Próximo' : 'Enviar'}
                                </WindowsButton>
                            </Window>
                        </div>
                }
            </div>

            <div className="user"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 40,
                    flexWrap: "wrap",
                    marginTop: 10,
                }}
            >
                <div className="user-picture">
                    <Window showX={false} titulo={"Nome do Personagem"}
                        styleContainer={{
                            width: 200,
                        }}
                        styleWindow={{
                            display: "flex",
                            justifyContent: "center",
                            height: 100,
                        }}
                    >
                        <img src={chibi} alt="chibi" style={{
                            width: "12rem",
                        }} />
                    </Window>
                </div>
                <div className="user-item">
                    <Window showX={false} titulo={"Item"}
                        styleContainer={{
                            width: 200,
                        }}
                        styleWindow={{
                            display: "flex",
                            justifyContent: "center",
                            height: 100,
                        }}
                    >
                        <img src={item} alt="item"
                            style={{
                                width: "70%",
                            }}
                        />
                    </Window>
                </div>
            </div>

            {
                erro
                    ?
                    <Window titulo='Erro' styleContainer={{
                        position: 'absolute',
                        top: '30%'
                    }} 
                    clickX={() => setErro(false)}>
                        <h4>Você deve selecionar uma resposta</h4>
                        <WindowsButton  onClick={() => setErro(false)}>
                            OK
                        </WindowsButton>
                    </Window>
                    :
                    null
            }
        </Window>
    )
}

export default QuizIndividual;