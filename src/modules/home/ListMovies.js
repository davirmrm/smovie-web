import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailMovie } from './redux/homeActions'

export default () => {
  const dispatch = useDispatch()
  const { listMovies } = useSelector(state=> state.homeState)

  const movieDetail = e => {
    dispatch(detailMovie(e))
  }

  return (
    <div className='box-list-movie'>
      {
        listMovies?.map(movie=> {
          return (
            <div className='box-movie' key={movie.imdbID} onClick={()=> movieDetail(movie)}>
              <div className='box-movie-img'>
                <span>{movie.Type}</span>
                {
                  movie.Poster !== 'N/A' ?
                  <img src={movie.Poster} />
                  :<div className='img-fake'></div>
                }
              </div>
              <p>{movie.Title} - {movie.Year}</p>
            </div>
          )
        })
      }
    </div>
  )
}
