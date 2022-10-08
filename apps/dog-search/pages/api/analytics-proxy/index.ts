import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'

function getIpFromReq(req) {
  // get the client's IP address
  const bareIP =
    ':' +
    ((req.connection.socket && req.connection.socket.remoteAddress) ||
      req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress ||
      '')
  return (bareIP.match(/:([^:]+)$/) || [])[1] || '127.0.0.1'
}

const BAD_REQUEST_URL = 'Bad Request URL'

const whitelistedDomains = [
  'doubleclick.net',
  'stats.g.doublick.net',
  'tagassistant.google.com',
  'googletagmanager.com',
  'analytics.google.com',
  'googleanalytics.com',
]

const httpProxyMiddleware = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  if (!req.url) {
    throw new Error(BAD_REQUEST_URL)
  }
  const urlMatch = req.url.match(/\/api\/analytics-proxy\/([^/]*)\/(.*)/)
  if (!urlMatch || !urlMatch[1]) {
    throw new Error(BAD_REQUEST_URL)
  }
  const newTarget = decodeURIComponent(urlMatch[1])
  return new Promise((resolve, reject) => {
    const protocolMatch = newTarget.match(/(https?):\/\/(.*)/)
    if (!protocolMatch) return reject(BAD_REQUEST_URL)

    const [_, protocol, newDomain] = protocolMatch
    if (!whitelistedDomains.includes(newDomain)) return reject(BAD_REQUEST_URL)
    const proxy: httpProxy = httpProxy.createProxyServer({
      target: `${protocol}://${newDomain}`,
      changeOrigin: true,
    })
    proxy
      .once('proxyReq', (proxyReq, req) => {
        proxyReq.path = proxyReq.path.replace(
          /\/api\/analytics-proxy\/([^/]*)/,
          ''
        )
        proxyReq.path =
          proxyReq.path +
          (proxyReq.path.indexOf('?') === -1 ? '?' : '&') +
          // uip is not officially supported by GA4, but prepending with "_" works for now to forward proper geolocation
          '_uip=' +
          encodeURIComponent(getIpFromReq(req))
      })
      .once('proxyRes', resolve as any)
      .once('error', reject)
      .web(req, res)
  })
}
export const config = {
  api: {
    bodyParser: false,
  },
}

export default httpProxyMiddleware
