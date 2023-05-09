import Window from "../components/Window";

const TelaListaQuestionario = () => {
    return (
        <Window titulo={"Tela de Reciclagem"}
            styleWindow={{
                height: "100vh",
                width: "100vw",
                display: "",
                // display: "flex",
                // flexDirection: "column",
                // gap: 60,
            }}
        >
            <div className="Recycle-window-cont" id="corpoRecycle">
                <p>LISTA DE QUESTIONÁRIOS</p>
            </div>
        </Window>
    )
}

export default TelaListaQuestionario;