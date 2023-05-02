import './WindowsQuestion.css'

export default function WindowsQuestion({ children, ...props }) {

    return (
        <div {...props} className='windowsQuestion-div' >
            <button className="windowsQuestion-button">
                {children}
            </button>
        </div>
    )
}