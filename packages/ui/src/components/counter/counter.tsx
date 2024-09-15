'use client'

import { useState } from 'react'

type CounterProps = object

export const Counter = ({}: CounterProps) => {
    const [value, updateValue] = useState(0)
    const increment = () => {
        updateValue((prev) => prev + 1)
    }
    const decrement = () => {
        updateValue((prev) => prev + -1)
    }

    return (
        <div className="flex gap-5">
            <button type="button" onClick={increment} className="rounded-md bg-red-400 p-3">
                +1
            </button>
            <div className="rounded-md bg-zinc-400 p-3">{value}</div>
            <button type="button" onClick={decrement} className="rounded-md bg-blue-400 p-3">
                -1
            </button>
        </div>
    )
}
