import Script from 'next/script'
import { analyticsScript } from './analytics-unblocker-script'

const BrowserNetworkUrlRewriter = () => {
  return <Script id="analytics-script">{analyticsScript}</Script>
}
export default BrowserNetworkUrlRewriter
