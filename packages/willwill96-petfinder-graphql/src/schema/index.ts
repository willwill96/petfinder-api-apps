import enumAliasResolvers from './resolvers/enum-alias-resolvers'
import petfinderResolvers from './resolvers/petfinder-resolvers'
import petfinderTypeDefs from './petfinder-type-defs'

const petFinderGraphQlSchema = {
  typeDefs: [petfinderTypeDefs],
  resolvers: [petfinderResolvers, enumAliasResolvers],
}
export default petFinderGraphQlSchema
