import Window from "../components/Window";
import "./telaReciclagem.css";

const TelaReciclagem = () => {
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
            <div className="system-reciclagem">
                <p>TELA RECICLAGEM</p>
            </div> 
            <img
            style={{ width: 70, height: 55 }}
            className="imagemPasta"
            src="https://i.imgur.com/r3a0P0E.png"
            ></img>
        </Window>
    )
}

export default TelaReciclagem;