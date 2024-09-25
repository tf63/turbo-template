type ComposeStorySampleProps = {
    label: string
}

export const ComposeStorySample = ({ label }: ComposeStorySampleProps) => {
    return <button type="button">{label}</button>
}
