import queryString from 'query-string'

import {
  Animal,
  Animals,
  Organization,
  Organizations,
  QueryAnimalArgs,
  QueryAnimalsArgs,
  QueryOrganizationArgs,
  QueryOrganizationsArgs,
  QueryTypeBreedsArgs,
  Type,
  TypeBreeds,
  Types,
} from '../../types/graphql-types'

const animals = async (_, args: QueryAnimalsArgs, context): Promise<Animals> => {
  const { fetchPetfinderRoute } = context
  const res = await fetchPetfinderRoute(
    `animals?${queryString.stringify(args, {
      arrayFormat: 'comma',
    })}`
  )
  const { animals, ...rest } = res
  return {
    ...rest,
    animals: animals.map(animal => {
      const { organization_id, ...rest } = animal
      return {
        ...rest,
        organization: () => organization({}, { id: organization_id }, context),
      }
    }),
  }
}

const animal = async (_, args: QueryAnimalArgs, context): Promise<Animal> => {
  const { fetchPetfinderRoute } = context
  const { id } = args
  const res = await fetchPetfinderRoute(`animals/${id}`)
  const { organization_id, ...rest } = res.animal
  return {
    ...rest,
    organization: () => organization({}, { id: organization_id }, context),
  }
}

const types = async (_, _a, { fetchPetfinderRoute }): Promise<Types> => {
  return await fetchPetfinderRoute('types')
}

const typeBreeds = async (
  _,
  args: QueryTypeBreedsArgs,
  { fetchPetfinderRoute }
): Promise<TypeBreeds> => {
  const { type } = args
  return await fetchPetfinderRoute(`types/${type}/breeds`)
}

const type = async (_, args, { fetchPetfinderRoute }): Promise<Type> => {
  const { type } = args
  return await fetchPetfinderRoute(`types/${type}`)
}
const organizations = async (
  _,
  args: QueryOrganizationsArgs,
  { fetchPetfinderRoute }
): Promise<Organizations> => {
  return await fetchPetfinderRoute(
    `/organizations?${queryString.stringify(args, {
      arrayFormat: 'comma',
    })}`
  )
}
const organization = async (
  _,
  args: QueryOrganizationArgs,
  { fetchPetfinderRoute }
): Promise<Organization> => {
  const { id } = args
  const res = await fetchPetfinderRoute(`organizations/${id}`)
  return res.organization
}
export default {
  Query: {
    animal,
    animals,
    organization,
    organizations,
    type,
    types,
    typeBreeds,
  },
}