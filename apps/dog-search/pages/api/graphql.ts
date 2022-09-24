import { ApolloServer } from 'apollo-server-micro'

import {
  petFinderGraphQlSchema,
  generatePetfinderGraphQlContext,
} from 'willwill96-petfinder-graphql'
const playgroundEnabled = Boolean(
  process.env['NODE_ENV'] === 'development' || process.env['PLAYGROUND_ENABLED']
)

const petfinderApiKey = process.env['PETFINDER_API_KEY']
const petfinderSecretKey = process.env['PETFINDER_SECRET_KEY']

if (!petfinderApiKey || !petfinderSecretKey) {
  throw new Error('Petfinder api key and secret key required')
}
const { typeDefs, resolvers } = petFinderGraphQlSchema
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: generatePetfinderGraphQlContext({
    petfinderApiKey,
    petfinderSecretKey,
  }),
  introspection: playgroundEnabled,
})

const startServer = server.start()
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com'
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await server.createHandler({
    path: '/api/graphql',
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}
