import { combineReducers } from 'redux'
import alerts from './components/alert/alertsRedux'
import layoutState from './layout/redux/layoutReducer'

import homeState from './modules/home/redux/homeReducer'

export const rootReducer = combineReducers({
  alerts,
  layoutState,

  homeState,
})

export default rootReducer
