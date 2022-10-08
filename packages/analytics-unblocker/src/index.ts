import { browserNetworkUrlRewriter } from 'browser-network-url-rewriter'
import urlRewrite from './url-rewrite'
;(function () {
  browserNetworkUrlRewriter(urlRewrite)
})()
