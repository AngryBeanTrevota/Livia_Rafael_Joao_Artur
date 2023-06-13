import { useState } from 'react'
import './WindowsQuestion.css'

export default function WindowsQuestion({ children, selected, disabled, ...props }) {

    return (
        <div {...props} className='windowsQuestion-div' >
            <button disabled={disabled} className={selected ? 'WindowsQuestionSelected' : "windowsQuestion-button"}>
                {children}
            </button>
        </div>
    )
}