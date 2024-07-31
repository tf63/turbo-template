/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@repo/ui'],
    typescript: {
        tsconfigPath: 'tsconfig.build.json',
    },
}

export default nextConfig
