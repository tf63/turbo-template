import { Button } from '@/features/button'

export default function Page(): JSX.Element {
    return (
        <main className="min-h-screen w-full p-10">
            <h1 className="text-xl bg-gray-300 p-5 rounded-lg">Next.js App</h1>
            <div className="my-5 w-52">
                <Button />
            </div>
        </main>
    )
}
