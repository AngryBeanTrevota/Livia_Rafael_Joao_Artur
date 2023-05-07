import Window from "../components/Window";
import "./telaReciclagem.css";

const TelaReciclagem = () => {
    return (
        <Window titulo={"Tela de Reciclagem"}
            styleWindow={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                gap: 60,
            }}
        >
            <Window titulo={"RECICLAR"} 
                styleContainer={{
                    width: 500,
                    height: 400,
                }}
            >
                <div className="recycle-cont">
                    <div className="recycle">
                        <div className="itens-folder">
                            <img
                                style={{ width: 70, height: 55 }}
                                className="imagemPasta"
                                src="https://i.imgur.com/r3a0P0E.png"
                            />
                            <p className="item-name">Personagem</p>
                            <p>3x</p>
                        </div>
                        <div className="itens-folder">
                            <img
                                style={{ width: 70, height: 55 }}
                                className="imagemPasta"
                                src="https://i.imgur.com/r3a0P0E.png"
                            />
                            <p className="item-name">Personagem</p>
                            <p>2x</p>
                        </div>
                        <div className="itens-folder">
                            <img
                                style={{ width: 70, height: 55 }}
                                className="imagemPasta"
                                src="https://i.imgur.com/r3a0P0E.png"
                            />
                            <p className="item-name">Personagem</p>
                            <p>4x</p>
                        </div>
                        <div className="itens-folder">
                            <img
                                style={{ width: 70, height: 55 }}
                                className="imagemPasta"
                                src="https://i.imgur.com/r3a0P0E.png"
                            />
                            <p className="item-name">Personagem</p>
                            <p>3x</p>
                        </div>
                        <div className="itens-folder">
                            <img
                                style={{ width: 70, height: 55 }}
                                className="imagemPasta"
                                src="https://i.imgur.com/r3a0P0E.png"
                            />
                            <p className="item-name">Personagem</p>
                            <p>2x</p>
                        </div>
                        <div className="itens-folder">
                            <img
                                style={{ width: 70, height: 55 }}
                                className="imagemPasta"
                                src="https://i.imgur.com/r3a0P0E.png"
                            />
                            <p className="item-name">Personagem</p>
                            <p>1x</p>
                        </div>
                    </div>
                </div>
            </Window>
            
        </Window>
    )
}

export default TelaReciclagem;