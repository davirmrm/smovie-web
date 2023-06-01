import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddAlert, Button, Input, Paginate } from '../../components'

import './home.scss'
import { searchMovie } from './redux/homeActions'
import ListMovies from './ListMovies'
import DetailMovie from './detailMovie'

export default () => {
  const dispatch = useDispatch()
  const nls = require(`./nls/en-US.json`)
  const [searchText, setSearchText] = useState('')
  const { paginate } = useSelector(state=> state.homeState)

  const handleSearch = e => {
    setSearchText(e.value)
  }

  const handleSearching = e => {
    console.log(e);
    if (e) {
      dispatch(searchMovie({search: e, page: 1}))
    } else{
      dispatch(AddAlert('info', nls.mensage.searchNone))
    }
  }

  const handlePaginate = e => {
    console.log(e);
      dispatch(searchMovie({search: paginate.search, page: e}))
  }

  return (
    <div className='box-home'>
      <div className='box-search'>
        <div>
          <Input
            action={(e) => handleSearch(e)}
            placeholder={nls.searchPlaceholder}
            name='search'
            value={searchText}
          />
        </div>
        <div>
          <Button
            color='primary'
            onClick={()=> handleSearching(searchText)}
          >{nls.search}</Button>
        </div>
      </div>

      <ListMovies />
      <Paginate
        data={paginate}
        action={(e)=> handlePaginate(e)}
      />
      
      <DetailMovie />
    </div>
  )
}
