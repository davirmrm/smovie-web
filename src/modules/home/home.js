import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddAlert, Button, Input } from '../../components'

import './home.scss'
import { searchMovie } from './redux/homeActions'
import ListMovies from './ListMovies'
import DetailMovie from './detailMovie'

export default () => {
  const dispatch = useDispatch()
  const nls = require(`./nls/en-US.json`)
  const [searchText, setSearchText] = useState('')

  const handleSearch = e => {
    setSearchText(e.value)
  }

  const handleSearching = e => {
    console.log(e);
    if (e) {
      dispatch(searchMovie({search: e}))
    } else{
      dispatch(AddAlert('info', nls.mensage.searchNone))
    }
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
      
      <DetailMovie />
    </div>
  )
}
