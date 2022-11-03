import React from 'react'
import { HiOutlinePhotograph } from 'react-icons/hi'

const CardSkeleton = () => {
  return (
    <div className='flex animate-pulse my-2 gap-x-4 overflow-hidden'>
      {
        Array(3).fill('').map((v, index) => (
          <div className='w-[230px] flex-shrink-0' key={`card-skeleton-${index}`}>
            <div className='h-[350px] bg-slate-800 flex items-center justify-center rounded-md'>
              <HiOutlinePhotograph className='text-8xl' />
            </div>
            <div className='mt-2 w-3/5 h-4 bg-slate-700 rounded' />
            <div className='flex justify-between gap-x-4'>
              <div className='mt-2 w-2/5 h-4 bg-slate-700 rounded' />
              <div className='mt-2 w-full h-4 bg-slate-700 rounded' />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CardSkeleton