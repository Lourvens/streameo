import React from 'react'

function HeroSkeleton() {
  return (
  <div className="flex flex-col gap-y-2 animate-pulse max-w-lg">
    <h3 className='h-5 w-2/5 bg-gray-700 rounded mb-2' ></h3>
    <h1 className='h-6 w-2/3 bg-gray-700 rounded-md' ></h1>
    <p className='h-28 bg-gray-700 rounded-md' ></p>
    <ul className='flex mt-2 gap-4'>
      <li className='h-10 w-24 bg-gray-700 rounded-full' ></li>
      <li className='h-10 w-24 bg-gray-700 rounded-full' ></li>
    </ul>
  </div>
  )
}

export default HeroSkeleton