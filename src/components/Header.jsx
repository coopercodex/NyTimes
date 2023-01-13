import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { Card } from './Card'
import endpoints from '../endpoints'
import "./Header.css"
import { CardDetails } from './CardDetails'
import { MostPopular } from './MostPopular'
import { SearchBar } from './SearchBar'
// const getUrl = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=WkxVvDsCfCHKL7AtdFbdwDMGFAW0y4pe`

export const Header = () => {
  const date = new Date().toLocaleString()
 
  return (
    <div className='header'>
      <div className='header-left'>
        <p className='date'>{date}</p>
      </div>
      <div className='header-middle'>
        {/* <SearchBar /> */}
        <Link to={'/'}>
          <h1 className='header-title'>The New York Times</h1>
        </Link>
        <MostPopular />
      </div>

    </div>
  )
}
