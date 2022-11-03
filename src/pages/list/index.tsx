import { useAppSelector } from '@/hooks'
import tw from 'tailwind-styled-components'
import React from 'react'
import Card from '@/common/card'

const Container = tw.div`
  flex flex-wrap p-4 gap-4 pt-24 lg:pt-4
`

function List() {
  const movies = useAppSelector(state => state.favList.values)
  return (
    <Container>
      {
        movies.map(movie => <Card key={movie.id} data={movie}/>)
      }
    </Container>
  )
}

export default List