import React, { useEffect, useRef, useState } from 'react'
import Button from '../Button'
import Card from '../Card'
import Input from '../Input'
import styles from './EntryInterview.module.css'

interface Form {
  location: string
}

interface Props {
  onSubmit: (form: Form) => void
}

const EntryInterview = (props: Props) => {
  const [locationInput, setLocationInput] = useState('')
  const formValid = locationInput.length === 5
  const form = { location: locationInput }
  const inputEl = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (!inputEl.current) {
      console.log('error')
      return
    }
    inputEl.current.focus()
  }, [inputEl])
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formValid) return
    props.onSubmit(form)
  }
  return (
    <Card className={`${styles['root']}`}>
      <div className={styles['title']}>
        <span>Enter your zip code</span>
      </div>
      <form onSubmit={onSubmit}>
        <div className="tw-my-2">
          <Input
            aria-label="Zip Code"
            ref={inputEl}
            className="tw-text-center"
            value={locationInput}
            onChange={(event) => {
              if (!event.target.value.match(/\d*/)) return
              setLocationInput(
                event.target.value.match(/\d{0,5}/)[0].substring(0, 5)
              )
            }}
            style={{ lineHeight: '30px', fontSize: '24px', width: '100%' }}
          />
        </div>
        <div className="tw-mb-4 tw-mt-10">
          <Button className="tw-w-full" disabled={locationInput.length !== 5}>
            Find some pets to adopt!
          </Button>
        </div>
      </form>
    </Card>
  )
}

export default EntryInterview
