import { gql, useQuery } from '@apollo/client'
import AnimalResults from '../../components/Animals/AnimalResults'
import Loading from '../../components/Loading'
import useMockAnimals from './use-mock-animals'

const animalsGql = gql`
  query AnimalsQuery($location: String, $page: Int) {
    animals(location: $location, page: $page, limit: 20) {
      animals {
        name
        photos {
          medium
        }
        url
      }
    }
  }
`

const useAnimalsQuery = (location: string, page: number) => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useMockAnimals()
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery(animalsGql, {
      variables: {
        location,
        page,
      },
      skip: !location,
    })
  }
}

interface Props {
  location: string
}

const AnimalResultsContainer = (props: Props) => {
  const { data, loading } = useAnimalsQuery(props.location, 1)

  if (loading) return <Loading />

  return <AnimalResults animals={data.animals.animals} />
}

export default AnimalResultsContainer
