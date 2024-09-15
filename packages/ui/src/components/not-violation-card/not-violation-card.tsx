type NotViolationCardProps = { text: string }

export const NotViolationCard = ({ text }: NotViolationCardProps) => {
    return (
        <>
            <div className="w-full rounded-xl bg-indigo-300 p-5 text-center">{text}</div>
            <img src="" alt="" />
        </>
    )
}
