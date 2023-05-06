import Window from "../components/Window";

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
            <div>
                <h1>Tela Sala Aluno</h1>
            </div>
        </Window>
    )
}

export default TelaSalaAluno;