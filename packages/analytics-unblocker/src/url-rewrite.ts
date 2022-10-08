const domains = [
  'doubleclick.net',
  'tagassistant.google.com',
  'googletagmanager.com',
  'analytics.google.com',
  'googleanalytics.com',
]

const urlRewrite = (input: string): string => {
  const regexMatch = input.match(/(https?:\/\/)([^/?]*)(\/|\?)?(.*)/)
  console.log('input', input)
  console.log('regexMatch', regexMatch)
  if (regexMatch && domains.includes(regexMatch[2])) {
    return `${location.protocol}//${
      location.host
    }/api/analytics-proxy/${encodeURIComponent(
      regexMatch[1] || ''
    )}${encodeURIComponent(regexMatch[2] || '')}${regexMatch[3] || ''}${
      regexMatch[4] || ''
    }`
  }
  return input
}
export default urlRewrite
