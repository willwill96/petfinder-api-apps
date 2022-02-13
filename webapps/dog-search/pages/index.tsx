import Head from 'next/head'
import { useState } from 'react'
import Button from '../components/Button'
import { gql, useQuery } from '@apollo/client'
import Card from '../components/Card'
import Input from '../components/Input'
import AnimalResults from '../components/Animals/AnimalResults'
// import { initializeApollo, addApolloState } from '../lib/apollo-client'

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

export default function Home() {
  const [location, setLocation] = useState('')
  const [locationInput, setLocationInput] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const { data, fetchMore } = useQuery(animalsGql, {
    variables: {
      location,
      page: 1,
    },
    skip: !location,
  })
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
  return (
    <div className="@h-full">
      <Head>
        <title>Dog Search App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {location && (
        <Button
          onClick={() => {
            fetchMore({
              variables: {
                page: currentPage + 1,
              },
            })
            setCurrentPage(currentPage + 1)
          }}
        >
          Fetch more results
        </Button>
      )} */}
      <main className="@h-full @flex @justify-center">
        {!location && (
          <Card className="@px-8 @py-4">
            <div className="@text-center @mb-10 @text-gray-200 @text-3xl">
              <span>Enter your zip code</span>
            </div>
            <div className="@my-2">
              <Input
                className="@text-center"
                value={locationInput}
                onChange={(event) => {
                  if (!event.target.value.match(/\d*/)) return
                  setLocationInput(
                    event.target.value.match(/\d{0,5}/)[0].substring(0, 5)
                  )
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && locationInput.length === 5) {
                    setLocation(locationInput)
                  }
                }}
                style={{ lineHeight: '30px', fontSize: '24px', width: '100%' }}
              />
            </div>
            <div className="@mb-4 @mt-10">
              <Button
                className="@w-full"
                disabled={locationInput.length !== 5}
                onClick={() => {
                  setLocation(locationInput)
                }}
              >
                Find some pets to adopt!
              </Button>
            </div>
          </Card>
        )}
        {location && <AnimalResults animals={mockAnimals} />}
        {/* {location && data && data.animals.animals && (
          <AnimalResults animals={data.animals.animals} />
        )} */}
      </main>
    </div>
  )
}

// export async function getServerSideProps() {
//   // const apolloClient = initializeApollo()

//   // await apolloClient.query({
//   //   query: gql`
//   //   query AnimalsQuery {
//   //     animals(location: "80210") {
//   //       animals {
//   //         name
//   //         photos {
//   //           full
//   //         }
//   //       }
//   //     }
//   //   }`,
//   // })

//   // return addApolloState(apolloClient, {
//   //   props: {},
//   // })
// }
