
import React from 'react'
import tw from 'tailwind-styled-components'
import { useAppDispatch } from '@/hooks'
import { MovieType, useFetchMovie } from '../home.controller'

import CardSkeleton from './cardSkeleton'
import Card from '@/common/card'


import 'react-lazy-load-image-component/src/effects/blur.css'
import IMovieData from '@/types/movie'

const Container = tw.div`m-4  `
const Header = tw.h1`text-2xl capitalize font-bold`
const MovieWrapper = tw.div`relative my-2 flex gap-x-4 overflow-x-scroll lg:scrollbar-y`

function Row({ title, url } : IRowProps) {
  const { isFetched, movie } = useFetchMovie(url)
  const dispatch = useAppDispatch()

  return (
    <Container>
      <Header>{title}</Header>
      {!isFetched ? <CardSkeleton /> : null}
      <MovieWrapper>
        {movie?.map(data =>  <Card data={data} key={data.id} /> )}
      </MovieWrapper>
    </Container>
  )
}

export default Row;

interface IRowProps {
  title: string
  url: MovieType
}