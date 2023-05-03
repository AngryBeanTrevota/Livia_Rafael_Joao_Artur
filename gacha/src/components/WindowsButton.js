import './WindowsButton.css'

export default function WindowsButton({ children,...props }) {

    return (
        <button {...props} className="buttonWindows">{children}</button>
    )
}