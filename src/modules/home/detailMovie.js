import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal } from '../../components'
import { modalOpen } from '../../layout/redux/layoutActions'
import './detailMovie.scss'

export default () => {
  const dispatch = useDispatch()
  const nls = require(`./nls/en-US.json`)
  const { statusModal } = useSelector(state => state.layoutState)
  const { movie } = useSelector(state=> state.homeState)

  return (
    <Modal
      title={`Detail - ${movie?.Title}`}
      size='medium'
      open={statusModal === 'detailMovie' ? true : false}
      close={() => dispatch(modalOpen(''))}
      closeText='Fechar'
      actions={<></>}
    >
      <>
        <div className='box-movie' key={movie.imdbID}>
          <div className='box-movie-img'>
            <span>{movie.imdbRating} - {movie.imdbVotes} votes</span>
            {
              movie.Poster !== 'N/A' ?
              <img src={movie.Poster} />
              :<div className='img-fake'></div>
            }
          </div>
          <div>
            <h3>{movie.Title} - {movie.Year}</h3>
            <p><small>{movie.Type}</small></p>
            <p>{movie.Plot}</p>
            <p><strong>{nls.Director}</strong>: {movie.Director}</p>
            <p><strong>{nls.Genre}</strong>: {movie.Genre}</p>
            <p><strong>{nls.Actors}</strong>: {movie.Actors}</p>
            <p><strong>{nls.Ratings}</strong>:</p>
            <ul>
              {
                movie?.Ratings?.map((r, i)=>{
                  return (
                    <li key={`Ratings-${i}`}><span>{r.Source}</span> - <strong>{r.Value}</strong></li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        {
          movie.Awards !== 'N/A' && (
            <div className='box-movie-awards'>
                <p>{movie.Awards}</p>
            </div>
          )
        }
      </>
    </Modal>
  )
}
