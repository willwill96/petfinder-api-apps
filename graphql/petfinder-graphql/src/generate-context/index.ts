import getAccessToken, { Options as AccessTokenOptions } from '../utils/get-petfinder-access-token'
import fetch from 'isomorphic-fetch'

const generateContext = (options: AccessTokenOptions) => {
  const fetchPetfinderRoute = async (url: string): Promise<any> => {
    const accessToken = await getAccessToken(options)
    const res = await fetch(`https://api.petfinder.com/v2/${url}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return await res.json()
  }
  return {
    fetchPetfinderRoute,
  }
}

export default generateContext