import React from 'react'
import endpoints from '../endpoints'
import { Card } from './Card'
import './Home.css'
import { SearchPage } from './SearchPage'

export const Home = () => {
  return (
    <>
    <div className='main-container'>
      <div className='home-container'>
        <SearchPage />
      <Card title='World News' getUrl={endpoints.getWorld} rid={true} />
      <Card title='Politics' getUrl={endpoints.getPolitics} rid={true} />
      </div>
      <div className='home-right'>
      <Card title='Art' getUrl={endpoints.getArt} rid={false} />
      <Card title='Technology' getUrl={endpoints.getTech} rid={false} />
      </div>
    </div>
    </>
  )
}
