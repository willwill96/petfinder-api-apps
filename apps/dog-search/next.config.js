module.exports = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts'],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.analytics-unblocker\/index\.js$/i,
      loader: 'raw-loader',
    })
    return config
  },
}
