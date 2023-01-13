import React from 'react'
import { BsSearch } from 'react-icons/bs'

export const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <div className='search-bar'>

      <form onSubmit={onTermSubmit} >
        <BsSearch className='search-icon' />
        <input
          type='text' required
          placeholder=''
          value={term}
          onChange={onTermChange}>
        </input>
      </form>
    </div>
  )
}
