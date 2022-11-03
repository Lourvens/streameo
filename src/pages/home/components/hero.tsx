import React, { useMemo } from 'react'
import { sortWithName } from '@/utils/sort'
import tw from 'tailwind-styled-components'
import { useBrandMovie } from '../home.controller'
import { BsStarFill, BsPlayFill, BsPlusCircle } from 'react-icons/bs'
import HeroSkeleton from './heroSkeleton'
import { original_img_url } from '@/service/movie'

const Container = tw.div`
  w-full h-[560px] relative flex items-end pb-20 mb-8
`
const absoluteEl = tw.div`w-full h-full top-0 left-0 absolute pointer-events-none`
const Image = tw(absoluteEl)`object-cover `
const GradientEffect = tw(absoluteEl)`
  bg-gradient-to-t  from-slate-900
`
const Content = tw.div`relative z-10 px-4 md:px-8 lg:px-12 w-full max-w-lg `
const Title = tw.h1`text-blue-100 text-xl uppercase font-title font-semibold tracking-widest`
const Overview = tw.p`text-slate-200  mt-2 text-sm`
const Row = tw.div`flex items-center font-medium mb-4 gap-x-4`
const Star = tw.span`flex items-center gap-x-1 text-yellow-300 text-xl`
const GenreList = tw.span`inline-flex items-center gap-x-2 text-sm text-gray-400 text-ellipsis
  px-4 py-2 rounded-lg bg-slate-900 bg-opacity-25 overflow-hidden max-w-[290px]`
const Separator = tw.span`h-6 w-0.5 bg-slate-100`
const ButtonGroup = tw.div`mt-4 flex gap-x-6`
const Button = tw.button`
  uppercase py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border
  border-transparent font-semibold bg-red-600 text-white
  hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 
  focus:ring-offset-2 transition-all text-sm focus:ring-offset-gray-800
`
const AddBtn = tw(Button)`
  bg-slate-700 hover:bg-slate-500 focus:ring-slate-500 
`
// const starBox 
function Hero() {
  const { movie, error, isFetched } = useBrandMovie()
  const imageUrl = useMemo(() => `${original_img_url}${movie?.backdrop_path}`, [isFetched])
  const movieGenres = sortWithName(movie?.genre_ids)

  return (
    <Container>
      <Content>
        {
          isFetched ? 
          <>
            <Row>
              <Star>
                <BsStarFill color='currentColor'/>
                <span>{movie?.vote_average}</span>
              </Star>
              <GenreList>
                {movieGenres.map((genre, index) => (
                  <React.Fragment key={genre.id}>
                    <span className="flex-shrink-0">{genre.name}</span>
                    {movieGenres.length !==  index + 1 ? <Separator /> : null}
                  </React.Fragment>
                ))}
              </GenreList>
            </Row>
            <Title> {movie?.title} </Title>
            <Overview>{movie?.overview}</Overview>
            <ButtonGroup>
              <Button>
                <BsPlayFill size={24}/>
                watch
              </Button>
              <AddBtn>
                <BsPlusCircle size={24} />
                add to list
              </AddBtn>
            </ButtonGroup>
          </>
           :
           <HeroSkeleton />
        }
      </Content>
      <Image $as="img" src={imageUrl} alt={movie?.title}/>
      <GradientEffect />
    </Container>
  )
}

export default Hero