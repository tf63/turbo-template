type ViolationCardProps = { text: string }

export const ViolationCard = ({ text }: ViolationCardProps) => {
    return (
        <>
            <div className="w-full rounded-xl bg-indigo-300 p-5 text-center text-indigo-500">{text}</div>
            {/* biome-ignore lint/a11y/useAltText: <explanation> */}
            <img src="" />
        </>
    )
}
