import { AddAlert } from '../../../components'
import axios from 'axios';
import { paramsApi } from '../../../layout/redux/layoutActions';
import { modalOpen } from '../../../layout/redux/layoutActions';
const apikey = 'df667745'
const urlApi = 'http://www.omdbapi.com/'

export const LIST_MOVIES = 'LIST_MOVIES'
export const setListMovies = e => ({
  type: LIST_MOVIES,
  payload: e
})

export const DETAIL_MOVIES = 'DETAIL_MOVIES'
export const setDetailMovie = e => ({
  type: DETAIL_MOVIES,
  payload: e
})

export const searchMovie = e => {
  let params = paramsApi({s: e.search, apikey, page: e.page})
  return async dispatch => {
    axios.get(`${urlApi}${params}`)
    .then(result => {
      if (result.data.Response === 'True') {
        dispatch(setListMovies({...result.data, search: e.search, page: e.page}))
      } else {
        dispatch(AddAlert('info', result.data.Error))
      }
    })
    .catch(err => {
        console.error(err);
    });
  }
}


export const detailMovie = e => {
  let params = paramsApi({i: e.imdbID, apikey})
  return async dispatch => {
    axios.get(`${urlApi}${params}`)
    .then(result => {
      dispatch([
        setDetailMovie(result.data), 
        modalOpen('detailMovie')
      ])
    })
    .catch(err => {
        console.error(err);
    });
  }
}

