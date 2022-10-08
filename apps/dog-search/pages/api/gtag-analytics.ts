import type { NextApiRequest, NextApiResponse } from 'next'

const GOOGLE_TAG_URL =
  'https://www.googletagmanager.com/gtag/js?id=G-NNGJPRJDLP'

const apiRoute = async (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).send(await (await fetch(GOOGLE_TAG_URL)).text())
}
export const config = {
  api: {
    bodyParser: false,
  },
}
export default apiRoute
