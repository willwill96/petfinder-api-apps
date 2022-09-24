# willwill96-petfinder-graphql

An npm package with utilities for scaffoloding a graphql server wrapping the [Petfinder API](https://www.petfinder.com/developers/v2/docs/)

NOTE: By using the Petfinder API, you must comply with the [Petfinder API Terms of Service](https://www.petfinder.com/api-terms-of-service/)

## Example Usage

```
import { ApolloServer } from 'apollo-server-micro'

import {
  petFinderGraphQlSchema,
  generatePetfinderGraphQlContext,
} from 'willwill96-petfinder-graphql'

const petfinderApiKey = 'yourKey'
const petfinderSecreteKey = 'yourSecretKey'

const { typeDefs, resolvers } = petFinderGraphQlSchema
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: generatePetfinderGraphQlContext({
    petfinderApiKey,
    petfinderSecretKey,
  }),
})
```

For a full example, see the [express implementation hosted as a docker image](https://github.com/willwill96/petfinder-api-apps/tree/main/graphql/app) or [Nextjs API route implementation](https://github.com/willwill96/petfinder-api-apps/blob/main/webapps/dog-search/pages/api/graphql.ts)
