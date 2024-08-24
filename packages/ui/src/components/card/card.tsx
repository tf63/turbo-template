type CardProps = { text: string }

export const Card = ({ text }: CardProps) => {
    return <div className="w-full rounded-xl bg-indigo-300 p-5 text-center">{text}</div>
}
