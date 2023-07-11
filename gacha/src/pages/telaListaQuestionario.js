import React, { useContext } from "react";
import Window from "../components/Window";
import "./telaListaQuestionario.css";

import talk from "../icones/talk.png";
import talk2 from "../icones/talk2.png";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth/AuthContext";


const questionarios =
    [
        {
            nome: "Questionario 1",
            num: 0,
            liberado: true,
            questoes: [
                {
                    pergunta: "Qual das alternativas de levantamento de dados tem tendência de concentração de respostas padrão?",
                    resposta: 2,
                    respondido: 0,
                    erros: 0,
                    respostas: [
                        "Entrevista",
                        "Seminário",
                        "Questionário",
                        "Observação Pessoal"
                    ],
                    liberado: true
                },
                {
                    pergunta: "Dentre as alternativas qual se encaixa melhor com o método de levantamento de dados Observação Pessoal?",
                    resposta: 1,
                    respondido: 1,
                    erros: 0,
                    respostas: [
                        "Permite esclarecer dúvidas durante a aplicação",
                        "Permite avaliar a real frequência que as atividades ocorrem",
                        "O analista pode esquecer de perguntar algo",
                        "É um método de levantamento de dados que ocoore de maneira coletiva"
                    ],
                },
                {
                    pergunta: "Qual das alternativas indica uma dificuldade de se realizar levantamento de dados pelo método da entrevista?",
                    resposta: 2,
                    respondido: 3,
                    erros: 0,
                    respostas: [
                        "Não permite esclarecer dúvidas durante a aplicação",
                        "Não possibilita alterar a forma e a ordem das perguntas",
                        "Pode ocorrer desvio de curso",
                        "Não é possível motivar o cliente envolvido"
                    ],
                },
                {
                    pergunta: "Temos quatro tipos de manutenção a Corretiva, a Adaptativa, a Perfectiva e a...",
                    resposta: 0,
                    respondido: 2,
                    erros: 0,
                    respostas: [
                        "Preventiva",
                        "Evolutiva",
                        "Legal",
                        "Preditiva"
                    ],
                },
                {
                    pergunta: "Dentre as alternativas qual não se encaixa nos dez riscos mais comuns na Engenahria de software?",
                    resposta: 1,
                    respondido: 2,
                    erros: 0,
                    respostas: [
                        "Perda de pessoal",
                        "Ataques cibernéticos",
                        "Subjulgamento dos requisitos",
                        "Cronograma e custos não realísticos"
                    ],
                }
            ]
        },
        {
            nome: "Questionario 2",
            num: 1,
            liberado: true,
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
                    ],
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
                    ],
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
                    ],
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
                    ],
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
                    ],
                }
            ]
        }, {
            nome: "Questionario 3",
            num: 2,
            liberado: true,
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
                    ],
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
                    ],
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
                    ],
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
                    ],
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
                    ],
                }
            ]
        }, {
            nome: "Questionario 4",
            num: 3,
            liberado: true,
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
                    ],
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
                    ],
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
                    ],
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
                    ],
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
                    ],
                }
            ]
        }, {
            nome: "Questionario 5",
            num:4,
            liberado: true,
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
                    ],
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
                    ],
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
                    ],
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
                    ],
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
                    ],
                }
            ]
        }, {
            nome: "Questionario 6",
            liberado: false,
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
                    ],
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
                    ],
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
                    ],
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
                    ],
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
                    ],
                }
            ]
        },
    ]

const BotaoNivel = ({ nivel, quiz, context,  }) => {
    let tipoQuiz, visivel;
    if (!quiz.liberado) {
        tipoQuiz = "divNivelQuizBloqueado";
        visivel = true;
    } else {
        tipoQuiz = "divNivelQuiz";
        visivel = false;
    }
    return (
        <Link
            to={quiz.liberado ? "/historia" : ""}
            onClick={() => {
                context.setQuiz(quiz);
                context.setHistoria(nivel)
            }}
        >
            <div style={{ marginTop: 25, marginBottom: 25 }}>
                <img
                    src={talk2} alt="recycle"
                    style={{
                        visibility: visivel ? "hidden" : "visible",
                        maxWidth: 50,
                        marginBottom: -65,
                        marginLeft: -50,
                    }}
                />
                <img
                    alt="cadeado"
                    style={{ visibility: visivel ? "visible" : "hidden" }}
                    id="imagemCadeadoQuiz"
                    src="https://static.thenounproject.com/png/228611-200.png"
                ></img>
                <div className={tipoQuiz}>
                    <img
                        alt="pasta"
                        style={{ width: 70, height: 55, paddingLeft: 5 }}
                        className="imagemPasta"
                        src="https://i.imgur.com/r3a0P0E.png"
                    />
                </div>
                <h5>{quiz.nome}</h5>
            </div>
        </Link>
    );
};

const TelaListaQuestionario = () => {
    let auth = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <Window titulo={"Lista de Questionários"}
            clickX={() => navigate('/menu')}
            styleWindow={{
                height: "100vh",
                width: "100vw",
                display: "",
                // display: "flex",
                // flexDirection: "column",
                // gap: 60,
            }}
        >
            <div className="windowsBox" id="corpoQuestionarios">
                {
                    questionarios.map((q, index) =>
                        <BotaoNivel nivel={index} context={auth} quiz={q} key={index} />
                    )

                }
            </div>
        </Window>
    )
}

export default TelaListaQuestionario;