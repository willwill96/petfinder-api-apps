module.exports = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts'],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.analytics-unblocker\/index\.js$/i,
      loader: 'raw-loader',
    })

    // Important: return the modified config
    return config
  },
}
