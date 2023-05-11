import "./Window.css"
import WindowsButton from "./WindowsButton"

export default function Window({ children, titulo, styleContainer, styleTitulo, styleWindow, showX=true, windowRef}) {

    return (

        <div className="container" style={styleContainer}>

            <div className="titulo-container" style={styleTitulo}>
                <h5 className="titulo">{titulo}</h5>
                {
                    showX
                    ?
                    <WindowsButton style={{maxWidth: 18, maxHeight: 18, margin: 5}} >X</WindowsButton>
                    :
                    null
                }
            </div>

            <div className="window"  ref={windowRef} style={styleWindow}>

                {children}

            </div>
        </div>

    )

}