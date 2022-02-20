import Card from '../../Card'
import Loading from '../../Loading'
import styles from './AnimalResults.module.css'

interface Animal {
  photos: {
    medium: string
  }[]
  url: string
  name: string
}

interface Props {
  loading?: boolean
  animals: Animal[]
}
const AnimalResults = (props: Props) => {
  if (props.loading) return <Loading />

  const animals = props.animals.filter((animal) =>
    Boolean(animal.photos && animal.photos[0] && animal.photos[0].medium)
  )

  return (
    <div className={styles['root']}>
      {animals.map((animal, i) => {
        return (
          <a key={i} href={animal.url} className={styles['animal-card']}>
            <Card>
              <div className={styles['card-title']}>
                <span>{animal.name}</span>
              </div>
              <img
                className={styles['animal-img']}
                alt={`Image of ${animal.name}`}
                src={animal.photos[0].medium}
              />
            </Card>
          </a>
        )
      })}
    </div>
  )
}
export default AnimalResults
