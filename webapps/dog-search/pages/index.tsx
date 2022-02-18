import Head from 'next/head'
import { useState } from 'react'
import { gql, useQuery } from '@apollo/client'
import AnimalResults from '../components/Animals/AnimalResults'
import EntryInterview from '../components/EntryInterview'
import { useRouter } from 'next/router'

const animalsGql = gql`
  query AnimalsQuery($location: String, $page: Int) {
    animals(location: $location, page: $page, limit: 20) {
      animals {
        name
        photos {
          full
        }
        url
      }
    }
  }
`

const useAnimalsQuery = (location: string, page: number) => {
  if (process.env.NODE_ENV === 'development') {
    const mockAnimals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((acc, curr) => {
      acc.push({
        photos: [
          {
            full: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
          },
        ],
        name: `Dog ${curr}`,
        url: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
      })
      return acc
    }, [])
    return { data: { animals: mockAnimals } }
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

export default function Home(props) {
  const [location, setLocation] = useState(props.location || '')
  const [currentPage, setCurrentPage] = useState(1)
  const router = useRouter()

  const { data } = useAnimalsQuery(location, 1)
  return (
    <div className="@h-full">
      <Head>
        <title>Dog Search App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="@h-full @flex @justify-center">
        {!location && (
          <EntryInterview
            onSubmit={({ location: newLoc }) => {
              setLocation(newLoc)
              router.push(`/?location=${newLoc}`, undefined, {
                shallow: true,
              })
            }}
          />
        )}
        {location && <AnimalResults animals={data && data.animals} />}
      </main>
    </div>
  )
}

export const getServerSideProps = ({ query }) => {
  const location = (query && query.location) || null
  return {
    props: {
      location,
    },
  }
}
