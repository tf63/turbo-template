import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const Popup = () => {
    return (
        <div>
            <h1 className="text-xl p-5 w-full bg-emerald-400 text-zinc-100 font-semibold">Popup</h1>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Popup />
    </React.StrictMode>
)
