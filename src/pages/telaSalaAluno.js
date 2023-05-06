import Window from "../components/Window";
import "./telaSalaAluno.css";



const TelaSalaAluno = () => {
    return (
        <Window titulo={"Tela de Sala"}
            styleWindow={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                gap: 60,
            }}
        >
            <Window titulo={"NOVO JOGO"} 
                styleContainer={{
                    width: 500,
                    height: 400,
                }}
            >
                {/* <div 
                // className="Conteudo-codigo"
                > */}
                    <div  className="input-codigo">
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
                {/* </div> */}
            </Window>
        </Window>
    )
}

export default TelaSalaAluno;