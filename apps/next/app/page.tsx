import { SampleCard } from '@/features/sample-card'
import { Card } from '@ui/components/card'

const Page = (): JSX.Element => {
    return (
        <main className="min-h-screen w-full p-10">
            <h1 className="text-xl bg-gray-300 p-5 rounded-lg">Next App</h1>

            <div className="my-5 w-60 space-y-3">
                <p>Component</p>
                <SampleCard />
            </div>

            <div className="my-5 w-60 space-y-3">
                <p>Shared Component</p>
                <Card />
            </div>
        </main>
    )
}

export default Page
