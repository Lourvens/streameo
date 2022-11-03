import { addMovie } from '@/feature/favList/favlistSlice'
import { useAppDispatch } from '@/hooks'
import { poster_img_url } from '@/service/movie'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import tw from 'tailwind-styled-components'

import { AiOutlineStar, AiFillLike } from 'react-icons/ai'
import { BsBookmarksFill } from 'react-icons/bs'
import IMovieData from '@/types/movie'



const Container = tw.div`group w-[230px] flex-shrink-0 overflow-hidden mb-4 cursor-pointer`
const CardImg = tw(LazyLoadImage)`object-cover w-full h-full transform  group-hover:scale-110`
const CardContent = tw.div`flex flex-col p-2`
const BookMarkBtn = tw.button`absolute -bottom-14 right-4 inline-flex  justify-center items-center gap-2
                 h-[2.875rem] w-[2.875rem] rounded-full border border-transparent font-semibold
                 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2
                 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm 
                 focus:ring-offset-gray-800 group-hover:bottom-4`

function Card({ data } : CardProp) {
  const dispatch = useAppDispatch()
  return (
    <Container>
      <div className='relative w-full h-[350px] overflow-hidden'>
        <CardImg 
          src={`${poster_img_url}${data.poster_path}`} 
          effect='blur'
          style={{ transition: 'opacity .3s, transform .5s'}}
        />
        <BookMarkBtn onClick={() => {
          dispatch(addMovie(data))
        }}>
          <BsBookmarksFill size={24} />
        </BookMarkBtn>

      </div>

      <CardContent>
        <h1 className='text-lg h-8 overflow-hidden'>{data.title || data.name}</h1>
        <div className="inline-flex justify-between">
          <span className="text-slate-400">
            {/* [var type : yyyy-mm-dd] get the year value */}
            {data.release_date ?  data.release_date.split('-')[0] : data.first_air_date.split('-')[0]}
          </span>
          <div className='flex gap-4'>
            <div className="flex items-center gap-1 text-blue-400" >
              <AiFillLike size={16}/>
              <span>{data.vote_count}</span>
            </div>
            
            <div className="flex items-center gap-1 text-yellow-400" >
              <AiOutlineStar size={16}/>
              <span>{data.vote_average}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Container>
  )
}

export default Card

interface CardProp {
  data: IMovieData 
}