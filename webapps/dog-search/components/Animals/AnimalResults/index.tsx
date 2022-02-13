import Card from '../../Card'
import styles from './AnimalResults.module.css'

interface Animal {
  photos: {
    full: string
  }[]
  url: string
  name: string
}

interface Props {
  loading?: boolean
  animals: Animal[]
}
const AnimalResults = (props: Props) => {
  if (props.loading) return null
  return (
    <div className={styles['root']}>
      {props.animals.map((animal, i) => {
        return (
          <a key={i} href={animal.url}>
            <Card className="hover:@opacity-50">
              <div className={styles['card-title']}>
                <span>{animal.name}</span>
              </div>
              <img
                className={styles['animal-img']}
                alt={`Image of ${animal.name}`}
                src={animal.photos[0].full}
              />
            </Card>
          </a>
        )
      })}
    </div>
  )
}
export default AnimalResults
