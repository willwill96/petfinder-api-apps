module.exports = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts'],
  rewrites: async () => {
    return [
      {
        source: '/api/analytics-proxy/(.*)',
        destination: '/api/analytics-proxy',
      },
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.analytics-unblocker\/index\.js$/i,
      loader: 'raw-loader',
    })
    return config
  },
}
