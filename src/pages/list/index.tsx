import { useAppSelector } from '@/hooks'
import tw from 'tailwind-styled-components'
import React from 'react'
import Card from '@/common/card'

import { MdOutlinePersonalVideo, MdHomeFilled } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { HOMEROUTE } from '@/router/constant'
const Container = tw.div`
  flex flex-wrap p-4 gap-4 pt-24 lg:pt-4
`
const Button = tw.button`
  py-2 px-3 bg-blue-600 rounded-md hover:bg-blue-700
  flex items-center gap-2 mt-2
`

function List() {
  const navigate = useNavigate()
  const movies = useAppSelector(state => state.favList.values)
  const HomeClick = () => {
    navigate(HOMEROUTE)
  }
  if(movies.length == 0) {
    return (
      <Container className='h-[90vh] flex items-center justify-center'>
        <div className='flex flex-col items-center' >
          <MdOutlinePersonalVideo size={96}/>
          <h1>you haven't added movie to your favorites yet.</h1>
          <Button onClick={HomeClick}>
           <MdHomeFilled />
            Go Home
          </Button>
        </div>
      </Container>
    )
  }
  return (
    <Container>
      {
        movies.map(movie => <Card key={movie.id} actionOnClick='remove' data={movie}/>)
      }
    </Container>
  )
}

export default List