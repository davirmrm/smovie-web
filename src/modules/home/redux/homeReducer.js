import {
  DETAIL_MOVIES,
  LIST_MOVIES,
} from './homeActions'

const initialState = {
  listMovies: [],
  movie: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_MOVIES:
      return { ...state, listMovies: payload }
    case DETAIL_MOVIES:
      return { ...state, movie: payload }
    default:
      return state
  }
}
