import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { SampleCard } from '@repo/react-chrome/features/sample-card'
import { Provider } from '@repo/react-chrome/provider'

import { Card } from '@repo/ui/components/card'

const Options = () => {
    return (
        <Provider>
            <div className="min-h-screen w-full p-10">
                <h1 className="rounded-lg bg-gray-300 p-5 text-xl">Options</h1>

                <div className="my-5 w-60 space-y-3">
                    <p>Component</p>
                    <SampleCard text="SampleCard Component" />
                </div>

                <div className="my-5 w-60 space-y-3">
                    <p>Shared Component</p>
                    <Card text="Card Component" />
                </div>
            </div>
        </Provider>
    )
}

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('options')!).render(
    <React.StrictMode>
        <Options />
    </React.StrictMode>
)
