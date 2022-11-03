
import { poster_img_url } from '@/service/movie'
import React from 'react'
import tw from 'tailwind-styled-components'
import { MovieType, useFetchMovie } from '../home.controller'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { AiOutlineStar, AiFillLike } from 'react-icons/ai'
import { BsBookmarksFill } from 'react-icons/bs'
import CardSkeleton from './cardSkeleton'


import 'react-lazy-load-image-component/src/effects/blur.css'

const Container = tw.div`m-4  `
const Header = tw.h1`text-2xl capitalize font-bold`
const MovieWrapper = tw.div`relative my-2 flex gap-x-4 overflow-x-scroll lg:scrollbar-y`
const Card = tw.div`group w-[230px] flex-shrink-0 overflow-hidden mb-4 cursor-pointer`
const CardImg = tw(LazyLoadImage)`object-cover w-full h-full transform  group-hover:scale-110`
const CardContent = tw.div`flex flex-col p-2`
const BookMarkBtn = tw.button`absolute -bottom-14 right-4 inline-flex  justify-center items-center gap-2
                 h-[2.875rem] w-[2.875rem] rounded-full border border-transparent font-semibold
                 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2
                 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm 
                 focus:ring-offset-gray-800 group-hover:bottom-4`

function Row({ title, url } : IRowProps) {
  const { isFetched, movie } = useFetchMovie(url)
  return (
    <Container>
      <Header>{title}</Header>
      {!isFetched ? <CardSkeleton /> : null}
      <MovieWrapper>
        { movie?.map(m => (
          <Card key={m.id}>
            <div className='relative w-full h-[350px] overflow-hidden'>
              <CardImg 
                src={`${poster_img_url}${m?.poster_path}`} 
                effect='blur'
                style={{ transition: 'opacity .3s, transform .5s'}}
              />
              <BookMarkBtn>
                <BsBookmarksFill size={24} />
              </BookMarkBtn>

            </div>

            <CardContent>
              <h1 className='text-lg h-8 overflow-hidden'>{m.title || m.name}</h1>
              <div className="inline-flex justify-between">
                <span className="text-slate-400">
                  {/* [var type : yyyy-mm-dd] get the year value */}
                  {m.release_date ?  m.release_date.split('-')[0] : m.first_air_date.split('-')[0]}
                </span>
                <div className='flex gap-4'>
                  <div className="flex items-center gap-1 text-blue-400" >
                    <AiFillLike size={16}/>
                    <span>{m.vote_count}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-yellow-400" >
                    <AiOutlineStar size={16}/>
                    <span>{m.vote_average}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
        }
      </MovieWrapper>
    </Container>
  )
}

export default Row;

interface IRowProps {
  title: string
  url: MovieType
}