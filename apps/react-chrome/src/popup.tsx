import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@repo/ui/styles.css'

import { SampleCard } from '@/features/sample-card'
import { Card } from '@ui/components/card'

const Popup = () => {
    return (
        <div className="min-h-screen w-full p-10">
            <h1 className="text-xl bg-gray-300 p-5 rounded-lg">Popup</h1>

            <div className="my-5 w-60 space-y-3">
                <p>Component</p>
                <SampleCard />
            </div>

            <div className="my-5 w-60 space-y-3">
                <p>Shared Component</p>
                <Card />
            </div>
        </div>
    )
}

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Popup />
    </React.StrictMode>
)
