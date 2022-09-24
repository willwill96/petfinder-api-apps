import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginLandingPageGraphQLPlayground,
         ApolloServerPluginLandingPageDisabled } from 'apollo-server-core'
import express from 'express'

import { petFinderGraphQlSchema, generatePetfinderGraphQlContext  } from 'willwill96-petfinder-graphql'
const playgroundEnabled = Boolean(
  process.env['NODE_ENV'] === 'development' || process.env['PLAYGROUND_ENABLED']
)

const port = process.env['PETFINDER_GRAPHQL_PORT'] || 4000
const path = process.env['PETFINDER_GRAPHQL_PATH'] || '/graphql'

const petfinderApiKey = process.env['PETFINDER_API_KEY']
const petfinderSecretKey = process.env['PETFINDER_SECRET_KEY']

if (!petfinderApiKey || ! petfinderSecretKey) {
  throw new Error('Petfinder api key and secret key required')
}
const { typeDefs, resolvers } = petFinderGraphQlSchema
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: generatePetfinderGraphQlContext({ petfinderApiKey, petfinderSecretKey}),
  introspection: playgroundEnabled,
  plugins: [
    playgroundEnabled
      ? ApolloServerPluginLandingPageGraphQLPlayground()
      : ApolloServerPluginLandingPageDisabled(),
  ],
})
const apolloApp = express()
server.start().then(()=>{
  server.applyMiddleware({
    app: apolloApp,
    path: path,
  })

  apolloApp.listen(port)
})

