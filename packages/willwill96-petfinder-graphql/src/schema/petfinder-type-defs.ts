import gql from 'graphql-tag'
import { readFileSync } from 'fs'
import * as path from 'path'

/**
 * These typeDefs were generated using the tool openapi-to-graphql(https://github.com/IBM/openapi-to-graphql)
 * and the Petfinder OpenAPI Specification(https://api.petfinder.com/openapi.yaml)
 */
const graphQlSchema = readFileSync(path.join(__dirname, 'schema.graphql')).toString('utf-8')
const typeDefs = gql`
  ${graphQlSchema}
`
export default typeDefs