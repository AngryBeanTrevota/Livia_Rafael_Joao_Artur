import "./Window.css"
import WindowsButton from "./WindowsButton"

export default function Window({ children, titulo, styleContainer, styleTitulo, styleWindow}) {

    return (

        <div className="container" style={styleContainer}>

            <div className="titulo-container" style={styleTitulo}>
                <h5 className="titulo">{titulo}</h5>
                <WindowsButton style={{maxWidth: 18, maxHeight: 18, margin: 5}} >X</WindowsButton>
            </div>

            <div className="window" style={styleWindow}>

                {children}

            </div>
        </div>

    )

}