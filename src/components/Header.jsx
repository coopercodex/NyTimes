import React from 'react'
import "./Header.css"

export const Header = () => {
  const date = new Date().toLocaleString()
  return (
    <div className='header'>
      <div className='header-left'>
        <p className='date'>{date}</p>
      </div>
      <div className='header-middle'>
        <h1 className='header-title'>The New York Times</h1>
        <ul className='sub-header'>World U.S. Politics N.Y. Business Opinion Tech Science Health Sports Arts  Books Style Food Travel Magazine TMagazine Real Estate Video</ul>
      </div>

    </div>
  )
}
