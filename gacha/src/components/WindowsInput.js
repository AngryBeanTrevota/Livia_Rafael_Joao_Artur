import './WindowsInput.css'

export default function WindowsInput({ children,...props }) {

    return (
        <input {...props} className="windowsInput">{children}</input>
    )
}