import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/Auth/AuthProvider";
import { useNavigate } from "react-router-dom";

import "./telaRevisao.css"

import WindowsButton from "../components/WindowsButton";
import WindowsInput from "../components/WindowsInput";
import Window from "../components/Window";

import fotoPersonagem from "../imagens/chibi.png"

const questionarios =
    [
        {
            nome: "Questionario 1",
            questoes: [
                {
                    pergunta: "Pergunta 1",
                    resposta: 2,
                    respondido: 0,
                    erros: 0,
                    respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 2",
                    resposta: 2,
                    respondido: 1,
                    erros: 0,
                    respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 3",
                    resposta: 2,
                    respondido: 3,
                    erros: 0,
                    respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 4",
                    resposta: 2,
                    respondido: 2,
                    erros: 0,
                    respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 5",
                    resposta: 2,
                    respondido: 2,
                    erros: 0,
                    respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                }
            ]
        },
        {
            nome: "Questionario 2",
            questoes: [
                {
                    pergunta: "Pergunta 1",
                    resposta: 2,
                    respondido: 1,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 2",
                    resposta: 2,
                    respondido: 1,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 3",
                    resposta: 2,
                    respondido: 3,
                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 4",
                    resposta: 2,
                    respondido: 2,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 5",
                    resposta: 2,
                    respondido: 2,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                }
            ]
        }, {
            nome: "Questionario 1",
            questoes: [
                {
                    pergunta: "Pergunta 1",
                    resposta: 2,
                    respondido: 1,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 2",
                    resposta: 2,
                    respondido: 1,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 3",
                    resposta: 2,
                    respondido: 3,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 4",
                    resposta: 2,
                    respondido: 2,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 5",
                    resposta: 2,
                    respondido: 2,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                }
            ]
        }, {
            nome: "Questionario 1",
            questoes: [
                {
                    pergunta: "Pergunta 1",
                    resposta: 2,
                    respondido: 1,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 2",
                    resposta: 2,
                    respondido: 1,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 3",
                    resposta: 2,
                    respondido: 3,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 4",
                    resposta: 2,
                    respondido: 2,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 5",
                    resposta: 2,
                    respondido: 2,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                }
            ]
        }, {
            nome: "Questionario 1",
            questoes: [
                {
                    pergunta: "Pergunta 1",
                    resposta: 2,
                    respondido: 1,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 2",
                    resposta: 2,
                    respondido: 1,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 3",
                    resposta: 2,
                    respondido: 3,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 4",
                    resposta: 2,
                    respondido: 2,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 5",
                    resposta: 2,
                    respondido: 2,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                }
            ]
        }, {
            nome: "Questionario 1",
            questoes: [
                {
                    pergunta: "Pergunta 1",
                    resposta: 2,
                    respondido: 1,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 2",
                    resposta: 2,
                    respondido: 1,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 3",
                    resposta: 2,
                    respondido: 3,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 4",
                    resposta: 2,
                    respondido: 2,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                },
                {
                    pergunta: "Pergunta 5",
                    resposta: 2,
                    respondido: 2,

                    erros: 0, respostas: [
                        "Resposta 1",
                        "Resposta 2",
                        "Resposta 3",
                        "Resposta 4"
                    ]
                }
            ]
        },
    ]


export default function TelaRevisao() {

    const [selectedQuest, setSelectedQuest] = useState(null);
    const [openQuestions, setOpenQuestions] = useState(false);

    const totalAcertos = () => {
        let total = 0;

        for (let i = 0; i < questionarios.length; i++) {
            for (let j = 0; j < questionarios[i].questoes.length; j++) {
                if (questionarios[i].questoes[j].resposta == questionarios[i].questoes[j].respondido) {
                    total++;
                }
            }
        }
        return total;

    }

    const acertosQuestionario = (q) => {
        let total = 0;
        for (let j = 0; j < q.questoes.length; j++) {
            if (q.questoes[j].resposta === q.questoes[j].respondido) {
                total++;
            }
        }
        return total
    }

    const totalPerguntas = questionarios.length * 5;
    const percentAcertos = (totalAcertos() / totalPerguntas) * 100;

    let statusBarClassName = '';

    if (percentAcertos <= 33) {
        statusBarClassName = 'percent-range-1';
    } else if (percentAcertos <= 66) {
        statusBarClassName = 'percent-range-2';
    } else {
        statusBarClassName = 'percent-range-3';
    }

    const Questionario = (q) => {

        return (

            <Window key={Math.random() % 9999} titulo={q.nome} styleContainer={{ marginTop: 20 }} showX={false}>

                <div className="lista-questionarios">
                    <h2>
                        {`${acertosQuestionario(q)}/5`}
                    </h2>
                    <WindowsButton onClick={() => { setSelectedQuest(q); setOpenQuestions(true) }}>Ver perguntas</WindowsButton>
                </div>

            </Window>
        )

    }

    const Pergunta = (p) => {

        return (

            <div className="pergunta" key={Math.random() % 9999} style={{ marginBottom: 20 }}>
                <h3>{p.pergunta}</h3>
                {p.respostas.map((r, index) => <p style={index == p.resposta ? { color: "#070", fontWeight: "bold" , marginBottom: 5} : index == p.respondido ? { marginBottom: 5, color: "#700", fontWeight: "bold" } : {marginBottom: 5}}>{
                    index == 0 ? "a)" : 
                    index == 1 ? "b)" : 
                    index == 2 ? "c)" : 
                    index == 3 ? "d)" : 
                    null}{r}</p>)}
            </div>
            
        )
    }

    return (
        <Window
            styleWindow={{ height: "100vh", width: "100vw", justifyContent: "start", padding: 10 }}
            titulo="Revisão"
        >
            <Window
                titulo="Questinários Realizados"
                showX={false}
            >
                <h1>{questionarios.length}</h1>
            </Window>

            <Window titulo="Total de acertos" styleContainer={{ marginTop: 20 }} showX={false}>
                <div className="status-bar">
                    <div className={statusBarClassName} style={{ width: `${percentAcertos}%` }}></div>
                </div>
                <p>{`${totalAcertos()} / ${totalPerguntas}`}</p>
            </Window>

            <div className="scroll-questionarios">
                {questionarios ? questionarios.map((q) => Questionario(q)) : null}
            </div>
            <Window titulo={"Perguntas"} clickX={() => setOpenQuestions(false)} styleContainer={openQuestions ? { position: "absolute", minHeigth: 300, minWidth: 300 } : { display: "none" }}>
                <div className="scroll-perguntas">
                    {selectedQuest ? selectedQuest.questoes.map(p => Pergunta(p)) : null}
                </div>
            </Window>
        </Window >


    );
}