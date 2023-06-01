import { PaginateTotal } from '../../../components'
import {
  DETAIL_MOVIES,
  LIST_MOVIES,
  LIST_MOVIES_CLEAN,
} from './homeActions'

const paginateInit = {
  pageNumber: 1, 
  totalPages: 1, 
  totalElements: 0 
}

const initialState = {
  listMovies: [],
  paginate: paginateInit,
  movie: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_MOVIES:
      return { ...state, 
        listMovies: payload.Search, 
        paginate: {
          pageNumber: payload.page, 
          totalPages: PaginateTotal({total: payload.totalResults, totalPerPage: 10}), 
          totalElements: payload.totalResults,
          search: payload.search
        } 
      }
    case LIST_MOVIES_CLEAN:
      return { ...state, 
        listMovies: [], 
        paginate: paginateInit
      }
    case DETAIL_MOVIES:
      return { ...state, movie: payload }
    default:
      return state
  }
}
