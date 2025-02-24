'use client'
type ClientComponentProps = object

export const ClientComponent = ({}: ClientComponentProps) => {
    return (
        <button className="w-full rounded-lg bg-emerald-300 p-5" type="button" onClick={() => console.log('click')}>
            Button
        </button>
    )
}
