import { Card } from '@repo/ui/components/card'

import { SampleCard } from '../sample-card'

type SampleBlockProps = object

export const SampleBlock = ({}: SampleBlockProps) => {
    return (
        <div className="flex w-full flex-col gap-5">
            <Card text="Card Component" />
            <SampleCard text="SampleCard Component" />
        </div>
    )
}
