import React, { useMemo } from 'react'
import { sortWithName } from '@/utils/sort'
import { useBrandMovie } from '../home.controller'
import { BsStarFill, BsPlayFill, BsPlusCircle } from 'react-icons/bs'
import HeroSkeleton from './heroSkeleton'
import { original_img_url } from '@/service/movie'

import styles from './hero.style'

// const starBox 
function Hero() {
  const { movie, isFetched } = useBrandMovie()
  const imageUrl = useMemo(() => `${original_img_url}${movie?.backdrop_path}`, [isFetched])
  const movieGenres = sortWithName(movie?.genre_ids)

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {
          isFetched ? 
          <>
            <div className={styles.row}>
              <span className={styles.icon}>
                <BsStarFill color='currentColor'/>
                <span>{movie?.vote_average}</span>
              </span>
              <span className={styles.list}>
                {movieGenres.map((genre, index) => (
                  <React.Fragment key={genre.id}>
                    <span className="flex-shrink-0">{genre.name}</span>
                    {movieGenres.length !==  index + 1 ? <div className={styles.separator} /> : null}
                  </React.Fragment>
                ))}
              </span>
            </div>
            <h1 className={styles.title}> {movie?.title} </h1>
            <h3 className={styles.overview}>{movie?.overview}</h3>
            <div className={styles.btnGroup}>
              <button className={styles.btn}>
                <BsPlayFill size={24}/>
                watch
              </button>
              <button className={styles.addBtn}>
                <BsPlusCircle size={24} />
                add to list
              </button>
            </div>
          </>
           :
           <HeroSkeleton />
        }
      </div>
      <img className={styles.img} src={imageUrl} alt={movie?.title}/>
      <div className={styles.gradientEffect} />
    </div>
  )
}

export default Hero