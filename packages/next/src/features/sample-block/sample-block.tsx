import { Card } from '@repo/ui/components/card'

import { SampleCard } from '@repo/next/features/sample-card'

type SampleBlockProps = object

export const SampleBlock = ({}: SampleBlockProps) => {
    return (
        <div className="flex flex-col gap-5">
            <Card text="Card Component" />
            <SampleCard text="SampleCard Component" />
        </div>
    )
}
