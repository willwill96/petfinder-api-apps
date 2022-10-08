// Mock list of urls + animals to not spam petfinder during development

import { useEffect, useState } from 'react'

const useMockAnimals = () => {
  const [loading, setLoading] = useState(true)
  const mockAnimals = Array.from(Array(5)).reduce((acc, _curr, index) => {
    acc.push({
      photos: [
        {
          medium:
            'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
        },
      ],
      name: `Dog ${index}`,
      url: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
    })
    return acc
  }, [])
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return { data: { animals: { animals: mockAnimals } }, loading }
}

export default useMockAnimals
