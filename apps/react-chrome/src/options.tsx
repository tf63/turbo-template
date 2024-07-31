import React from 'react'
import ReactDOM from 'react-dom/client'

const Options = () => {
    return (
        <div>
            <p>Option</p>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('options')!).render(
    <React.StrictMode>
        <Options />
    </React.StrictMode>
)
