import Head from 'next/head'
import { useState } from 'react'
import { gql } from '@apollo/client'
import EntryInterview from '../components/EntryInterview'
import { useRouter } from 'next/router'
import AnimalResultsContainer from '../containers/AnimalResults'

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

export default function Home(props) {
  const [initialLocation] = useState(props.location || '')
  const router = useRouter()

  const location = router ? router.query.location : initialLocation

  return (
    <div className="tw-h-fit tw-py-4">
      <Head>
        <title>Dog Search App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {location && (
        <h2 className="tw-text-2xl tw-font-bold tw-text-black tw-mb-4">
          Viewing Pets near {location}
        </h2>
      )}
      <main className="tw-flex tw-justify-center">
        {!location && (
          <EntryInterview
            onSubmit={({ location: newLoc }) => {
              router.push(`/?location=${newLoc}`, undefined, {
                shallow: true,
              })
            }}
          />
        )}
        {location && <AnimalResultsContainer location={location} />}
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
