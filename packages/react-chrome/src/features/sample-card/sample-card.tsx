type SampleCardProps = { text: string }

export const SampleCard = ({ text }: SampleCardProps) => {
    return <div className="w-full rounded-xl bg-emerald-300 p-5 text-center">{text}</div>
}
