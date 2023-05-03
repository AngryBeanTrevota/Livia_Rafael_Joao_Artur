import React from "react";
import "./quizIndividual.css";
import timer from "../icones/timer.webp";
import chibi from "../imagens/chibi.png";
import item from "../imagens/item.png";

import WindowsButton from "../components/WindowsButton";
import WindowsInput from "../components/WindowsInput";
import Window from "../components/Window";
import WindowsQuestion from "../components/WindowsQuestion";


const QuizIndividual = () => {    
    return (
        <Window titulo={"Quiz"}
            styleWindow={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                gap: 60,
            }}
        >
            <div className="main-quiz"
            > 
                <div className="timer">
                    <Window titulo={"TIME LEFT"} 
                    styleContainer={{
                        width: 600,
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
                                00:00
                            </h2>
                        </div>
                    </Window>
                </div>
                <div className="question">
                    <Window titulo={"Question"}
                        styleContainer={{
                            width: 600,
                        }}
                        styleWindow={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: 40,
                        }}
                     >
                        <div className="question-title">
                            <h2>
                                Question 1
                            </h2>
                        </div>
                        <div className="question-options">
                            <WindowsQuestion>
                                1. AAAAAAAA
                            </WindowsQuestion>
                            <WindowsQuestion>
                                2. AAAAAAAA
                            </WindowsQuestion>
                            <WindowsQuestion>
                                3. AAAAAAAA
                            </WindowsQuestion>
                            <WindowsQuestion>
                                4. AAAAAAAA
                            </WindowsQuestion>  
                            <WindowsButton
                                style={
                                    {
                                        fontSize: 20,
                                        marginBottom: 10,
                                    }
                                }
                            >
                                Enviar
                            </WindowsButton>              
                        </div>

                    </Window>
                </div>
            </div>

            <div className="user"
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: 40,
            }}
            >
                <div className="user-picture">
                    <Window titulo={"Nome do Personagem"}
                        styleContainer={{
                            width: 200,
                        }}
                        styleWindow={{
                            display: "flex",
                            justifyContent: "center",
                            height: 120,
                        }}
                    >
                        <img src={chibi} alt="chibi" style={{
                            width: "12rem",
                        }}/>
                    </Window>                            
                </div>
                <div className="user-item">
                    <Window titulo={"Item"}
                        styleContainer={{
                            width: 200,
                        }}
                        styleWindow={{
                            display: "flex",
                            justifyContent: "center",
                            height: 120,
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

        </Window>
    )
}

export default QuizIndividual;