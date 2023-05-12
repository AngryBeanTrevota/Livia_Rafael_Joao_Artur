import Window from "../components/Window";
import "./telaSalaAluno.css";

import load from "../icones/load.png";

const TelaSalaAluno = () => {
    return (
        <Window titulo={"Tela de Sala"}
            styleWindow={{
                height: "100vh",
                width: "100vw",
                display: "",
                // display: "flex",
                // flexDirection: "column",
                // gap: 60,
            }}
        >
            <div id="corpo">
                <div className="system-aluno">
                    <Window titulo={"SYSTEM"}
                        styleContainer={{
                            width: 500,
                            height: 400,
                            position: "absolute",
                            top: "3%",
                            left: "50%",
                        }}
                    >
                        <div className="loading-codigo">
                            <p className="text-features">Please wait while the features are configured</p>
                            <div className="loading">
                                <p className="text-system">Initiating System...</p>
                                <div class="bar" />
                            </div>
                        </div>
                    </Window>
                </div>

                <div className="novo-jogo-aluno">
                    <Window titulo={"NOVO JOGO"}
                        styleContainer={{
                            width: 500,
                            height: 400,
                            position: "absolute",
                            top: "25%",
                            left: "30%",
                        }}
                    >
                        <div className="input-codigo">
                            <input
                                style={{
                                    width: 400,
                                    height: 40,
                                    fontSize: 22,
                                }}
                                placeholder="Digite o código da sala..."
                            />
                        </div>
                        <div className="button-ok-cont">
                            <button className="button-ok">
                                <p>OK</p>
                            </button>
                        </div>
                    </Window>
                </div>

                <div className="hystoric-aluno">
                    <Window titulo={"HISTORYC"}
                        styleContainer={{
                            width: 500,
                            height: 400,
                            position: "absolute",
                            top: "45%",
                            left: "50%",
                        }}
                    >
                        <div className="historic">
                            <p className="text-verifiyng">Verifiyng Historic of rooms</p>
                            <div className="historic-codigo">
                                <p>Sala 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . #</p>
                                <p>Sala 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . #</p>
                                <p>Sala 3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . #</p>
                                <p>Sala ... . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . #</p>
                                <p>Sala ... . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . #</p>
                            </div>
                            <div className="img-loading">
                                <img src={load} alt="load"
                                    style={{
                                        maxWidth: 50,
                                    }}
                                />
                            </div>
                        </div>
                    </Window>
                </div>
            </div>
        </Window>
    )
}

export default TelaSalaAluno;