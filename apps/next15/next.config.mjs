import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@repo/ui'],
    typescript: {
        tsconfigPath: 'tsconfig.build.json',
    },
}

export default withBundleAnalyzer(nextConfig)
