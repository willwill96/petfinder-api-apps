import NodeCache from 'node-cache'
import fetch from 'isomorphic-fetch'

interface AccessToken {
  access_token: string
  expires_in: number
}

export interface Options {
    petfinderApiKey: string
    petfinderSecretKey: string
}

const fetchAccessToken = async (options: Options): Promise<AccessToken> => {
  const params = new URLSearchParams()
  params.append('grant_type', 'client_credentials')
  params.append('client_id', options.petfinderApiKey)
  params.append('client_secret', options.petfinderSecretKey)
  const petfinderRes = await fetch(
    'https://api.petfinder.com/v2/oauth2/token',
    {
      method: 'POST',
      body: params,
    }
  )
  const json = await petfinderRes.json()
  return json as AccessToken
}

type CacheValue = string | null | undefined
const PetfinderAccessTokenCache = new NodeCache()

const TWO_MINUTES_IN_SECONDS = 60 * 2

const bufferExpiration = expirationTime =>
  expirationTime - TWO_MINUTES_IN_SECONDS

const getAccessToken = async (options: Options): Promise<string> => {
  const petfinderAccessToken = PetfinderAccessTokenCache.get(
    'value'
  ) as CacheValue
  if (petfinderAccessToken) return petfinderAccessToken
  const json = await fetchAccessToken(options)
  PetfinderAccessTokenCache.set(
    'value',
    json.access_token,
    bufferExpiration(json.expires_in)
  )
  return json.access_token
}
export default getAccessToken