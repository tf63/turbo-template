import { Card } from '@repo/ui/components/card'

import { SampleCard } from '../features/sample-card'

const Page = (): JSX.Element => {
    return (
        <main className="min-h-screen w-full p-10">
            <h1 className="rounded-lg bg-gray-300 p-5 text-xl">Next App</h1>

            <div className="my-5 w-60 space-y-3">
                <p>Component</p>
                <SampleCard text="SampleCard Component" />
            </div>

            <div className="my-5 w-60 space-y-3">
                <p>Shared Component</p>
                <Card text="Card Component" />
            </div>
        </main>
    )
}

export default Page
